import React, { Component } from 'react';
import Listing from './Listing';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { sha256 } from 'js-sha256';
import {
  fetchListing,
  fetchImages,
  fetchFeaturedImage,
  fetchLandlord
} from '../../redux/modules/listing';
import {
  getFaves,
  getSingleListing,
  addFavourite,
  updateFavourites,
  addApplication,
  applicationsYo
} from '../../config/helpers';
import { fetchFaves, favesError } from '../../redux/modules/faves';
import { updateAuthState } from '../../redux/modules/auth';
import { updateApplicationState } from '../../redux/modules/application';
import moment from 'moment';

class ListingScreen extends Component {
  constructor() {
    super();

    this.handleFeaturedImage = this.handleFeaturedImage.bind(this);
    this.addToFaves = this.addToFaves.bind(this);
  }
  static navigationOptions = {
    header: null
  };

  async componentDidMount() {
    //testing using redux to get an authenticated user until navigation is provided to this screen
    await this.props.dispatch(updateAuthState('RitwUtfThcfO6SxapXCuKfZ15SR2'));
    const { authenticated } = this.props;

    getSingleListing().then(querySnapshot => {
      let data = [];
      querySnapshot.forEach(doc => {
        data.push(doc.data());
      });

      this.props.dispatch(fetchListing(data));
      const images = Object.values(data[0].pictures);
      const landlord = data[0].landlordId;
      this.props.dispatch(fetchImages(images));
      this.props.dispatch(fetchFeaturedImage(images[0]));
      this.props.dispatch(fetchLandlord(landlord));
    });

    getFaves().then(querySnapshot => {
      let data = [];
      querySnapshot.forEach(doc => {
        doc.id === authenticated ? data.push(doc.data()) : null;
      });
      this.props.dispatch(fetchFaves(data[0].favourites));
    });

    const userId = 'co38EO820KZfSJEEx24xKyuJibh2';

    applicationsYo().then(querySnapshot => {
      let data = [];
      querySnapshot.forEach(doc => {
        doc.id === userId ? data.push(doc.data()) : null;
      });
      this.props.dispatch(updateApplicationState(data[0].applications));
    });
  }

  handleFeaturedImage(image) {
    this.props.dispatch(fetchFeaturedImage(image));
  }

  addToFaves() {
    const { authenticated } = this.props;
    const id = this.props.listing[0].listingId;
    const { faves } = this.props;

    if (!faves.includes(id)) {
      faves.push(id);

      addFavourite(faves, authenticated).catch(error => {
        this.props.dispatch(favesError(error));
      });
    } else {
      faves.splice(faves.indexOf(id), 1);
      updateFavourites(faves, authenticated).catch(error => {
        this.props.dispatch(favesError(error));
      });
    }
    this.props.dispatch(fetchFaves([...faves]));
  }

  addToApplications = () => {
    const userId = 'co38EO820KZfSJEEx24xKyuJibh2';
    const listingId = this.props.listing[0].listingId;
    const created = moment().unix();
    let id = sha256(created.toString());

    let { applications } = this.props;

    applications.push({
      applicationStatus: 'Pending',
      createdOn: created,
      listingId: listingId,
      applicationId: id
    });

    addApplication(userId, applications);
    this.props.dispatch(updateApplicationState([...applications]));
  };

  render() {
    const { listing, images, featuredImage, faves, landlordId } = this.props;
    const listingId = listing[0] && listing[0].listingId;
    let applications = [];
    this.props.applications.forEach(app => {
      applications.push([app.listingId, app.createdOn]);
    });

    return (
      <Listing
        listing={listing}
        faves={faves}
        images={images}
        imageUrl={this.imageUrl}
        featuredImage={featuredImage}
        handleFeaturedImage={this.handleFeaturedImage}
        addToFaves={this.addToFaves}
        currentListing={listingId}
        landlord={landlordId}
        navigation={this.props.navigation}
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
  dispatch: PropTypes.func.isRequired,
  listing: PropTypes.array.isRequired,
  images: PropTypes.array.isRequired,
  featuredImage: PropTypes.string.isRequired,
  faves: PropTypes.array.isRequired,
  landlordId: PropTypes.string.isRequired,
  navigation: PropTypes.object,
  authenticated: PropTypes.string.isRequired,
  applications: PropTypes.array
};

const mapStateToProps = state => ({
  listing: state.listing.listing,
  images: state.listing.images,
  featuredImage: state.listing.featuredImage,
  faves: state.faves.faves,
  landlordId: state.listing.landlordId,
  authenticated: state.auth.authenticated,
  applications: state.application.applications
});

export default connect(mapStateToProps)(ListingScreen);
