import React, { Component } from 'react';
import Listing from './Listing';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loader from '../../components/Loader/';
import { sha256 } from 'js-sha256';
import {
  fetchImages,
  fetchFeaturedImage,
  getAddress,
  updateLoading
} from '../../redux/modules/listing';
import {
  addApplication,
  applicationsYo,
  addFavourite,
  updateFavourites,
  constructMapUrl,
  getListings,
  getSingleListing
} from '../../config/helpers';
import {
  favesError,
  fetchFaves,
  getFaveIds,
  fetchFaveIds
} from '../../redux/modules/faves';
import { updateApplicationState } from '../../redux/modules/application';
import moment from 'moment';
import { updateLandlordId } from '../../redux/modules/landlord';

class ListingScreen extends Component {
  async componentDidMount() {
    const { authenticated, dispatch, listing } = this.props;
    const images = Object.values(listing.pictures);

    dispatch(fetchImages(images));
    dispatch(fetchFeaturedImage(images[0]));
    dispatch(updateLandlordId(listing.landlordId));

    const address = constructMapUrl(listing.address);
    dispatch(getAddress(address));

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

    applicationsYo().then(querySnapshot => {
      let data = [];
      querySnapshot.forEach(doc => {
        doc.id === authenticated ? data.push(doc.data()) : null;
      });
      if (data.length > 0)
        this.props.dispatch(updateApplicationState(data[0].applications));
    });
    dispatch(updateLoading(false));
  }

  handleFeaturedImage = image => {
    this.props.dispatch(fetchFeaturedImage(image));
  };

  addToFaves = async () => {
    const { authenticated, dispatch, faves, faveIds, listing } = this.props;

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
      // get single listing, add it to faves
      await getSingleListing(id)
        .then(listing => {
          const faveListings = faves;
          listing.forEach(query => {
            faveListings.push(query.data());
          });
          dispatch(fetchFaves([...faveListings]));
        })
        .catch(e => console.log(e));
    } else {
      const unFave = faveIds;
      unFave.splice(unFave.indexOf(id), 1);

      const faveListings = faves;
      let newListings = [];
      faveListings.forEach(fave => {
        if (fave.listingId !== id) newListings.push(fave);
      });
      dispatch(fetchFaves([...newListings]));

      await updateFavourites(unFave, authenticated)
        .then(() => {})
        .catch(error => {
          dispatch(favesError(error));
        });
      dispatch(getFaveIds([...unFave]));
    }
  };

  addToApplications = () => {
    const { authenticated, dispatch, listing } = this.props;
    const listingId = listing.listingId;
    const created = moment().unix();
    let id = sha256(created.toString());

    let { applications } = this.props;

    applications.push({
      applicationStatus: 'Pending',
      createdOn: created,
      listingId: listingId,
      applicationId: id
    });

    addApplication(authenticated, applications);
    dispatch(updateApplicationState([...applications]));
  };

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

    let applications = [];
    this.props.applications.forEach(app => {
      applications.push([app.listingId, app.createdOn]);
    });

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
        application={this.addToApplications}
        applications={applications}
      />
    );
  }
}

ListingScreen.defaultProps = {
  applications: []
};

ListingScreen.propTypes = {
  applications: PropTypes.array,
  dispatch: PropTypes.func.isRequired,
  faves: PropTypes.array,
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
  faveIds: [],
  applications: []
};

const mapStateToProps = state => ({
  faves: state.faves.faves,
  faveIds: state.faves.faveIds,
  listing: state.listing.listing,
  listings: state.listings.listings,
  loading: state.listing.loading,
  images: state.listing.images,
  featuredImage: state.listing.featuredImage,
  landlordId: state.listing.landlordId,
  authenticated: state.auth.authenticated,
  address: state.listing.address,
  applications: state.application.applications
});

export default connect(mapStateToProps)(ListingScreen);
