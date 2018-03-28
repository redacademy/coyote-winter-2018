import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Favourite from './Favourite';
import { fetchListings } from '../../redux/modules/listings';
import { fetchFaves } from '../../redux/modules/faves';
import { connect } from 'react-redux';
import { getListings, getFaves } from '../../config/helpers';

class FavouriteScreen extends Component {
  async componentDidMount() {
    const { authenticated } = this.props;
    await getListings().then(querySnapshot => {
      let data = [];
      querySnapshot.forEach(function(doc) {
        data.push(doc.data());
      });
      this.props.dispatch(fetchListings(data));
    });

    await getFaves().then(querySnapshot => {
      let data = [];
      querySnapshot.forEach(function(doc) {
        doc.id === authenticated ? data.push(doc.data().favourites) : null;
      });

      this.setFaves(data[0], this.props.listings);
    });
  }

  setFaves = (faveIds, listings) => {
    let favourites = listings.filter(listing => {
      return faveIds.find(fav => fav === listing.listingId);
    });
    this.props.dispatch(fetchFaves(favourites));
  };

  componentWillReceiveProps(props) {
    if (props.faveIds.length !== props.faves.length) {
      this.setFaves(props.faveIds, props.listings);
    }
  }

  render() {
    return (
      <Favourite faves={this.props.faves} navigation={this.props.navigation} />
    );
  }
}

FavouriteScreen.propTypes = {
  dispatch: PropTypes.func.isRequired,
  listings: PropTypes.array.isRequired,
  faves: PropTypes.array.isRequired,
  faveIds: PropTypes.array.isRequired,
  authenticated: PropTypes.string.isRequired,
  navigation: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  listings: state.listings.listings,
  faveIds: state.faves.faveIds,
  faves: state.faves.faves,
  authenticated: state.auth.authenticated
});

export default connect(mapStateToProps)(FavouriteScreen);
