import React, { Component } from 'react';
import { Button } from 'react-native';
import PropTypes from 'prop-types';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { colors } from '../../config/styles';

import { profileIcon } from '../../config/iconType';

import Profile from './Profile';

class ProfileScreen extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    navigate: PropTypes.func
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
      /* the rest of this config is unchanged */

      title: 'Profile',
      tabBarLabel: 'Profile',

      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={
            focused
              ? profileIcon
              : `${profileIcon}-outline`
          }
          size={26}
          style={{ color: tintColor }}
        />
      )
    };
  };

  render() {
    const { navigation } = this.props.navigation;
    return (
      // <View
      //   style={{
      //     flex: 1,
      //     alignItems: "center",
      //     justifyContent: "center"
      //   }}
      // >
      //   {/* <Profile /> */}
      //   <Button
      //     title="Go to details"
      //     onPress={() => navigate("Favourites")}
      //   />
      // </View>
      <Profile navigation={navigation} />
    );
  }
}

export default ProfileScreen;
