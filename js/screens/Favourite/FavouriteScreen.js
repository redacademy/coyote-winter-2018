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
    // TODO: REFACTOR THIS
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
        doc.id === authenticated ? data.push(doc.data()) : null;
      });
      let faves = [];
      data.forEach(favourites => {
        favourites.favourites.forEach(fav => {
          faves.push(fav);
        });
      });

      let favourites = this.props.listings.filter(listing => {
        return faves.find(fav => fav === listing.listingId);
      });
      this.props.dispatch(fetchFaves(favourites));
    });
    // END REFACTOR
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
  authenticated: PropTypes.string.isRequired,
  navigation: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  listings: state.listings.listings,
  faves: state.faves.faves,
  authenticated: state.auth.authenticated
});

export default connect(mapStateToProps)(FavouriteScreen);
