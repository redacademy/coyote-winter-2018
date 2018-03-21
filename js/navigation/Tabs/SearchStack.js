import { StackNavigator } from 'react-navigation';

import SearchResultScreen from '../../screens/SearchResult/SearchResultScreen';
import ListingScreen from '../../screens/Listing/ListingScreen';

import ApplicationScreen from '../../screens/Application/ApplicationScreen';

const SearchTab = StackNavigator({
  Search: {
    screen: SearchResultScreen,
    path: '/'
  },
  Application: {
    screen: ApplicationScreen
  },
  Listing: {
    screen: ListingScreen,
    mode: 'modal'
  }
});

export default SearchTab;
