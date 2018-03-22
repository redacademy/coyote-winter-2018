import { StackNavigator } from 'react-navigation';

import FavouriteScreen from '../../screens/Favourite/FavouriteScreen';

import { colors } from '../../config/styles';

const FavouriteTab = StackNavigator({
  Favourite: {
    screen: FavouriteScreen,
    path: '/',
    navigationOptions: () => ({
      title: 'Faves',
      style: { color: colors.MAIN }
    })
  }
});

export default FavouriteTab;
