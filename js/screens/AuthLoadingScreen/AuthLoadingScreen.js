import React, { Component } from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  View
} from 'react-native';
import PropTypes from 'prop-types';

import { styles } from './styles';

class AuthLoadingScreen extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    navigation: PropTypes.object
  };

  componentDidMount() {
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem(
      'userToken'
    );

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.

    let initialRouteName = userToken ? 'App' : 'Auth';
    this.props.navigation.navigate(initialRouteName);
  };
  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

export default AuthLoadingScreen;
