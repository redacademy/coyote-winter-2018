import React, { Component } from 'react';

import PropTypes from 'prop-types';

import Listing from './Listing';

class ListingScreen extends Component {
  static navigationOptions = {
    headerMode: 'none'
  };

  render() {
    return (
      <Listing navigation={this.props.navigation} />
    );
  }
}

ListingScreen.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default ListingScreen;
