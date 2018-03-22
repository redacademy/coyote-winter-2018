import { StackNavigator } from 'react-navigation';

import ListingScreen from '../../screens/Listing/ListingScreen';

import ApplicationScreen from '../../screens/Application/ApplicationScreen';

const ListingStack = StackNavigator({
  Listing: {
    screen: ListingScreen,
    path: '/'
  },
  Application: {
    screen: ApplicationScreen
  }
});

export default ListingStack;
