import { StackNavigator } from 'react-navigation';

import FavouriteScreen from '../../screens/Favourite/FavouriteScreen';
import ListingScreen from '../../screens/Listing/ListingScreen';

const SearchTab = StackNavigator({
  Favourite: {
    screen: FavouriteScreen,
    path: '/'
  },
  Listing: {
    screen: ListingScreen,
    mode: 'modal'
  }
});

export default SearchTab;
