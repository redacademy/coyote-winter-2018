import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import Favourite from './Favourite';
import Loader from '../../components/Loader/';
import { fetchListings } from '../../redux/modules/listings';
import {
  fetchFaves,
  updateLoading,
  getFaveIds
} from '../../redux/modules/faves';
import {
  getListings,
  getFaves
} from '../../config/helpers';

class FavouriteScreen extends Component {
  async componentDidMount() {
    const { authenticated } = this.props;
    this.props.dispatch(updateLoading(true));

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
        doc.id === authenticated
          ? data.push(doc.data().favourites)
          : null;
      });
      // if this is the first time we go to the faves, we may
      // need to set faveIds
      if (data[0] !== this.props.faveIds)
        this.props.dispatch(getFaveIds(data[0]));

      this.setFaves(data[0], this.props.listings);
    });
    this.props.dispatch(updateLoading(false));
  }

  setFaves = (faveIds, listings) => {
    let favourites = [];
    if (faveIds && faveIds.length > 0) {
      favourites = listings.filter(listing => {
        return faveIds.find(
          fav => fav === listing.listingId
        );
      });
    }
    this.props.dispatch(fetchFaves(favourites));
  };

  componentWillReceiveProps(props) {
    if (
      props.faveIds &&
      props.faveIds.length !== props.faves.length
    ) {
      this.setFaves(props.faveIds, props.listings);
    }
  }

  renderViewMore = onPress => {
    return (
      <Text
        onPress={onPress}
        style={{
          marginTop: 8,
          opacity: 0.7,
          fontSize: 14,
          fontStyle: 'italic'
        }}
      >
        View more
      </Text>
    );
  };

  renderViewLess = onPress => {
    return (
      <Text
        onPress={onPress}
        style={{
          marginTop: 8,
          opacity: 0.7,
          fontSize: 14,
          fontStyle: 'italic'
        }}
      >
        View less
      </Text>
    );
  };

  render() {
    const { loading } = this.props;
    return loading ? (
      <Loader />
    ) : (
      <Favourite
        viewMore={this.renderViewMore}
        viewLess={this.renderViewLess}
        faves={this.props.faves}
        navigation={this.props.navigation}
      />
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

export default connect(mapStateToProps)(
  FavouriteScreen
);
