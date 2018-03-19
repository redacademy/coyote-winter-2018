import {
  StackNavigator,
  TabNavigator,
  SwitchNavigator
} from 'react-navigation';

// import ApplicationScreen from "../screens/Application/ApplicationScreen";
// import ConfirmationScreen from "../screens/Application/ApplicationScreen";
import FavouriteScreen from '../../screens/Favourite/FavouriteScreen';
import ProfileScreen from '../../screens/Profile/ProfileScreen';
import SearchResultScreen from '../../screens/SearchResult/SearchResultScreen';
import ListingScreen from '../../screens/Listing/ListingScreen';
import LoginScreen from '../../screens/Login/LoginScreen';

import { colors } from '../../config/styles';
import AuthLoadingScreen from '../../screens/AuthLoadingScreen';

// const SearchTab = StackNavigator({
//   Search: {
//     screen: SearchScreen,
//     path: "/"
//   }
// });

const TabNav = TabNavigator(
  {
    SearchTab: {
      screen: SearchResultScreen,
      path: '/'
    },
    FavouriteTab: {
      screen: FavouriteScreen,
      path: '/favourite'
    },
    ProfileTab: {
      screen: ProfileScreen,
      path: '/profile'
    }
  },
  {
    tabBarOptions: {
      activeTintColor: colors.MAIN,
      inactiveTintColor: '#fff',
      activeBackgroundColor: colors.night,
      inactiveBackgroundColor: colors.night
    },

    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false
  }
);
const AuthStack = StackNavigator(
  {
    Login: LoginScreen
  },
  { navigationOptions: { header: null } }
);

const AppStack = StackNavigator(
  {
    Root: {
      screen: TabNav
    },
    Listing: {
      screen: ListingScreen
    }
  },
  { mode: 'modal' }
);

const RootNavigator = SwitchNavigator(
  {
    Loading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack
  },
  { initialRouteName: 'Loading' }
);

export default RootNavigator;
