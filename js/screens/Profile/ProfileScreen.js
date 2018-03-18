import React, { Component } from 'react';
import { Button, AsyncStorage } from 'react-native';
import PropTypes from 'prop-types';

import { colors } from '../../config/styles';

import Profile from './Profile';

class ProfileScreen extends Component {
  static propTypes = {
    navigation: PropTypes.object
  };
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: (
        <Button
          onPress={() =>
            navigation.navigate('Listing')
          }
          title="Info"
          color={colors.MAIN}
        />
      ),
      title: 'Profile',
      tabBarLabel: 'Profile'
    };
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };

  render() {
    return (
      <Profile
        navigation={this.props.navigation}
        signOut={this._signOutAsync}
      />
    );
  }
}

export default ProfileScreen;
