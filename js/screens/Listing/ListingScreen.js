import React, { Component } from 'react';

import { View } from 'react-native';
import Map from '../../components/Map';
import PropTypes from 'prop-types';

import Listing from './Listing';

class ListingScreen extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View>
        <Listing navigation={this.props.navigation} />
      </View>
    );
  }
}

ListingScreen.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default ListingScreen;
