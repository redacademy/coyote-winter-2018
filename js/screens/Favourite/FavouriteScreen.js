import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Favourite from './Favourite';
import Loader from '../../components/Loader/';
import {
  fetchFaves,
  fetchFaveIds,
  updateLoading
} from '../../redux/modules/faves';
import { connect } from 'react-redux';
import { getListings } from '../../config/helpers';

class FavouriteScreen extends Component {
  async componentDidMount() {
    const { authenticated, dispatch } = this.props;
    this.props.dispatch(updateLoading(true));

    dispatch(fetchFaveIds(authenticated));

    let data = [];
    await getListings().then(querySnapshot => {
      const faves = this.props.faveIds;
      querySnapshot.forEach(function(doc) {
        faves.forEach(fave => {
          if (fave === doc.data().listingId) {
            data.push(doc.data());
          }
        });
      });
    });
    dispatch(fetchFaves(data));
    dispatch(updateLoading(false));
  }

  // setFaves = (faveIds, listings) => {
  //   let favourites = [];
  //   if (faveIds && faveIds.length > 0) {
  //     favourites = listings.filter(listing => {
  //       return faveIds.find(fav => fav === listing.listingId);
  //     });
  //   }
  //   this.props.dispatch(fetchFaves(favourites));
  // };

  render() {
    const { loading } = this.props;
    return loading ? (
      <Loader />
    ) : (
      <Favourite faves={this.props.faves} navigation={this.props.navigation} />
    );
  }
}

FavouriteScreen.propTypes = {
  dispatch: PropTypes.func.isRequired,
  listings: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  faves: PropTypes.array.isRequired,
  faveIds: PropTypes.array,
  authenticated: PropTypes.string.isRequired,
  navigation: PropTypes.object.isRequired
};

FavouriteScreen.defaultProps = {
  faveIds: []
};

const mapStateToProps = state => ({
  listings: state.listings.listings,
  loading: state.faves.loading,
  faveIds: state.faves.faveIds,
  faves: state.faves.faves,
  authenticated: state.auth.authenticated
});

export default connect(mapStateToProps)(FavouriteScreen);
