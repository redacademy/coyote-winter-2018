import { StackNavigator } from 'react-navigation';

import SearchResultScreen from '../../screens/SearchResult/SearchResultScreen';

import FilteringScreen from '../../screens/Filtering/FilteringScreen';

import ListingScreen from '../../screens/Listing/ListingScreen';

const SearchTab = StackNavigator({
  Search: {
    screen: SearchResultScreen,
    path: '/'
  },
  Filter: {
    screen: FilteringScreen
  },
  Listing: {
    screen: ListingScreen
  }
});

export default SearchTab;
