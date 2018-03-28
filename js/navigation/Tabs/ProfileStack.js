import { StackNavigator } from 'react-navigation';

import ProfileScreen from '../../screens/Profile/ProfileScreen';
import ApplicationScreen from '../../screens/Application/ApplicationScreen';
import { colors, typography } from '../../config/styles';
import ListingScreen from '../../screens/Listing';

const ProfileTab = StackNavigator(
  {
    Profile: {
      screen: ProfileScreen,
      path: '/',
      navigationOptions: () => ({
        title: 'Profile'
      })
    },
    Application: {
      screen: ApplicationScreen
    },
    Listing: {
      screen: ListingScreen
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

export default ProfileTab;
