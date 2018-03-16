/**
 * Coyote React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import LocationSearchContainer from './screens/LocationSearch/';

export default class App extends Component {
  render() {
    return (
      <View>
        <Text>Welcome to Coyote Rentals! This will be a login page.</Text>
        <LocationSearchContainer />
      </View>
    );
  }
}
