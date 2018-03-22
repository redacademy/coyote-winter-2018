import React, { Component } from 'react';
import Listing from './Listing';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loader from '../../components/Loader/';

import {
  fetchImages,
  fetchFeaturedImage,
  fetchLandlord,
  getAddress,
  updateLoading
} from '../../redux/modules/listing';
import {
  getFaves,
  addFavourite,
  updateFavourites,
  constructMapUrl,
  getListings
} from '../../config/helpers';
import { favesError, getFaveIds } from '../../redux/modules/faves';

class ListingScreen extends Component {
  constructor() {
    super();

    this.handleFeaturedImage = this.handleFeaturedImage.bind(this);
    this.addToFaves = this.addToFaves.bind(this);
  }

  async componentDidMount() {
    const { authenticated, dispatch, listing } = this.props;
    const images = Object.values(listing.pictures);

    dispatch(fetchImages(images));
    dispatch(fetchFeaturedImage(images[0]));
    dispatch(fetchLandlord(listing.landlordId));

    const address = constructMapUrl(listing.address);
    dispatch(getAddress(address));

    let data = [];
    await getListings().then(querySnapshot => {
      querySnapshot.forEach(function(doc) {
        data.push(doc.data());
      });
    });

    await getFaves().then(querySnapshot => {
      let faves = [];
      querySnapshot.forEach(function(doc) {
        if (doc.id === authenticated) faves.push(doc.data().favourites);
      });
      // write array of faveIds to redux state
      dispatch(getFaveIds(faves[0]));
    });
    dispatch(updateLoading(false));
  }

  handleFeaturedImage(image) {
    this.props.dispatch(fetchFeaturedImage(image));
  }

  async addToFaves() {
    const { authenticated, dispatch, faveIds, listing } = this.props;

    const id = listing.listingId;
    if (faveIds && !faveIds.includes(id)) {
      const newFaves = faveIds;
      newFaves.push(id);
      await addFavourite(newFaves, authenticated)
        .then(() => {
          dispatch(getFaveIds([...newFaves]));
        })
        .catch(error => {
          dispatch(favesError(error));
        });
    } else {
      const unFave = faveIds;
      unFave.splice(unFave.indexOf(id), 1);
      await updateFavourites(unFave, authenticated)
        .then(() => dispatch(getFaveIds([...unFave])))
        .catch(error => {
          dispatch(favesError(error));
        });
    }
  }

  render() {
    const {
      listing,
      loading,
      images,
      featuredImage,
      faveIds,
      landlordId,
      address
    } = this.props;

    return loading ? (
      <Loader />
    ) : (
      <Listing
        listing={listing}
        faveIds={faveIds}
        images={images}
        imageUrl={this.imageUrl}
        featuredImage={featuredImage}
        handleFeaturedImage={this.handleFeaturedImage}
        addToFaves={this.addToFaves}
        landlord={landlordId}
        navigation={this.props.navigation}
        address={address}
      />
    );
  }
}

ListingScreen.propTypes = {
  dispatch: PropTypes.func.isRequired,
  faveIds: PropTypes.array,
  listing: PropTypes.object.isRequired,
  listings: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  images: PropTypes.array.isRequired,
  featuredImage: PropTypes.string.isRequired,
  landlordId: PropTypes.string.isRequired,
  navigation: PropTypes.object,
  authenticated: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired
};

ListingScreen.defaultProps = {
  faveIds: []
};

const mapStateToProps = state => ({
  faveIds: state.faves.faveIds,
  listing: state.listing.listing,
  listings: state.listings.listings,
  loading: state.listing.loading,
  images: state.listing.images,
  featuredImage: state.listing.featuredImage,
  landlordId: state.listing.landlordId,
  authenticated: state.auth.authenticated,
  address: state.listing.address
});

export default connect(mapStateToProps)(ListingScreen);
