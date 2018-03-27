import { StackNavigator } from 'react-navigation';

import SearchResultScreen from '../../screens/SearchResult/SearchResultScreen';
import LocationSearchScreen from '../../screens/LocationSearch/';
import FilteringScreen from '../../screens/Filtering/FilteringScreen';

import ListingScreen from '../../screens/Listing/ListingScreen';

const SearchTab = StackNavigator({
  Search: {
    screen: SearchResultScreen,
    path: '/',
    navigationOptions: () => ({
      title: 'Search'
    })
  },
  Filter: {
    screen: FilteringScreen
  },
  Listing: {
    screen: ListingScreen,
    path: '/listings/:listing'
  }
});

export default SearchTab;
