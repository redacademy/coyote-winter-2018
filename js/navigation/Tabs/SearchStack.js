import { StackNavigator } from 'react-navigation';

import SearchResultScreen from '../../screens/SearchResult/SearchResultScreen';

import FilteringScreen from '../../screens/Filtering/FilteringScreen';

const SearchTab = StackNavigator({
  Search: {
    screen: SearchResultScreen,
    path: '/'
  },
  Filter: {
    screen: FilteringScreen,
    mode: 'modal'
  }
});

export default SearchTab;
