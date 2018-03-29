import { StackNavigator } from 'react-navigation';

import FavouriteScreen from '../../screens/Favourite/FavouriteScreen';

import {
  colors,
  typography
} from '../../config/styles';
import ListingScreen from '../../screens/Listing';

const FavouriteTab = StackNavigator(
  {
    Favourite: {
      screen: FavouriteScreen,
      path: '/',
      navigationOptions: () => ({
        title: 'Faves',
        style: { color: colors.MAIN }
      })
    },
    Listing: { screen: ListingScreen }
  },
  {
    mode: 'modal',
    navigationOptions: {
      gesturesEnabled: false,
      headerTintColor: colors.MAIN,
      headerTitleStyle: {
        fontFamily: typography.OS_REGULAR,
        fontSize: 18
      }
    }
  }
);

export default FavouriteTab;
