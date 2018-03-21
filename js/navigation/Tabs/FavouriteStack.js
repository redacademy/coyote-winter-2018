import { StackNavigator } from 'react-navigation';

import FavouriteScreen from '../../screens/Favourite/FavouriteScreen';

const SearchTab = StackNavigator({
  Favourite: {
    screen: FavouriteScreen,
    path: '/'
  }
});

export default SearchTab;
