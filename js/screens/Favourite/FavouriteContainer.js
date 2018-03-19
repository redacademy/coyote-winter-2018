import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Favourite from './Favourite';
import { firebaseAuth, firestoreDb } from '../../config/firebaseConfig';
import { fetchListings } from '../../redux/modules/listings';
import { fetchFaves } from '../../redux/modules/faves';
import { connect } from 'react-redux';

class FavouriteScreen extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    firestoreDb
      .collection('listings')
      .get()
      .then(querySnapshot => {
        let data = [];
        querySnapshot.forEach(function(doc) {
          data.push(doc.data());
        });
        this.props.dispatch(fetchListings(data));
      });

    firestoreDb
      .collection('favourites')
      .get()
      .then(querySnapshot => {
        let data = [];
        querySnapshot.forEach(function(doc) {
          doc.id === 'krurd1mdLUTgqLUGVGBcOtpUDYt1'
            ? data.push(doc.data())
            : null;
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
  }

  render() {
    console.log(firebaseAuth);
    return <Favourite faves={this.props.faves} />;
  }
}

FavouriteScreen.propTypes = {
  dispatch: PropTypes.func.isRequired,
  listings: PropTypes.array.isRequired,
  faves: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  listings: state.listings.listings,
  faves: state.faves.faves
});

export default connect(mapStateToProps)(FavouriteScreen);
