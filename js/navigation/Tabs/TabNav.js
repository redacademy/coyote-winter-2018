import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  TabNavigator,
  SwitchNavigator
} from 'react-navigation';

import LocationSearchScreen from '../../screens/LocationSearch/LocationSearchScreen';

import {
  profileIcon,
  searchIcon,
  heartIcon
} from '../../config/iconType';

import SearchTab from './SearchStack';
import FavouriteTab from './FavouriteStack';
import ProfileTab from './ProfileStack';
import AuthStack from './AuthStack';
import SignUpStack from './SignUpStack';

import { colors } from '../../config/styles';
import AuthLoadingScreen from '../../screens/AuthLoadingScreen';

const { night, MAIN } = colors;

const TabNav = TabNavigator(
  {
    SearchTab: {
      screen: SearchTab,
      path: '/',
      navigationOptions: {
        tabBarLabel: 'Search',
        tabBarIcon: function tabSearchIcon({
          // eslint-disable-next-line
          focused,
          // eslint-disable-next-line
          tintColor
        }) {
          return (
            <Ionicons
              name={
                focused
                  ? searchIcon
                  : `${searchIcon}-outline`
              }
              size={26}
              style={{ color: tintColor }}
            />
          );
        }
      }
    },
    FavouriteTab: {
      screen: FavouriteTab,
      path: '/favourite',
      navigationOptions: {
        tabBarLabel: 'Faves',
        tabBarIcon: function favTab({
          // eslint-disable-next-line
          focused,
          // eslint-disable-next-line
          tintColor
        }) {
          return (
            <Ionicons
              name={
                focused
                  ? heartIcon
                  : `${heartIcon}-outline`
              }
              size={26}
              style={{ color: tintColor }}
            />
          );
        }
      }
    },
    ProfileTab: {
      screen: ProfileTab,
      path: '/profile',
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: function tabIcon({
          // eslint-disable-next-line
          focused,
          // eslint-disable-next-line
          tintColor
        }) {
          return (
            <Ionicons
              name={
                focused
                  ? profileIcon
                  : `${profileIcon}-outline`
              }
              size={26}
              style={{ color: tintColor }}
            />
          );
        }
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: MAIN,
      inactiveTintColor: '#fff',
      activeBackgroundColor: night,
      inactiveBackgroundColor: night
    },
    tabBarPosition: 'bottom',
    swipeEnabled: false
  }
);

const RootNavigator = SwitchNavigator(
  {
    Loading: AuthLoadingScreen,
    App: TabNav,
    Auth: AuthStack,
    LocationSearch: LocationSearchScreen,
    SignUp: SignUpStack
  },
  { initialRouteName: 'Loading' }
);

export default RootNavigator;
