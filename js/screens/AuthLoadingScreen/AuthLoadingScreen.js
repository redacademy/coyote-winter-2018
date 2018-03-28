import React, { Component } from 'react';
import { ActivityIndicator, AsyncStorage, StatusBar, View } from 'react-native';
import PropTypes from 'prop-types';

import { styles } from './styles';

import { colors } from '../../config/styles';

class AuthLoadingScreen extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.

    let initialRouteName = userToken ? 'App' : 'Auth';
    this.props.navigation.navigate(initialRouteName);
  };

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator
          animating={true}
          color={colors.MAIN}
          size="large"
          style={styles.loader}
        />
        <StatusBar backgroundColor={'blue'} barStyle="light-content" />
      </View>
    );
  }
}

AuthLoadingScreen.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default AuthLoadingScreen;
