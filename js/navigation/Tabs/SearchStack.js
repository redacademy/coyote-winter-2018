import { StackNavigator } from 'react-navigation';

import SearchResultScreen from '../../screens/SearchResult/SearchResultScreen';
import FilteringScreen from '../../screens/Filtering/FilteringScreen';

import ListingScreen from '../../screens/Listing/ListingScreen';
import LandlordScreen from '../../screens/Landlord/LandlordScreen';

import { colors, typography } from '../../config/styles';

const SearchTab = StackNavigator(
  {
    Search: {
      screen: SearchResultScreen,
      path: '/',
      navigationOptions: {
        title: 'Search'
      }
    },
    Filter: {
      screen: FilteringScreen,
      navigationOptions: {
        title: 'Filter'
      }
    },
    Listing: {
      screen: ListingScreen,
      path: '/listings/:listing',
      navigationOptions: {
        title: 'Listing'
      }
    },
    Landlord: {
      screen: LandlordScreen
    }
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

export default SearchTab;
