import { StackNavigator } from 'react-navigation';

import ProfileScreen from '../../screens/Profile/ProfileScreen';
import ApplicationScreen from '../../screens/Application/ApplicationScreen';

const ProfileTab = StackNavigator({
  Profile: {
    screen: ProfileScreen,
    path: '/',
    navigationOptions: () => ({
      title: 'Profile'
    })
  },
  Application: {
    screen: ApplicationScreen
  }
});

export default ProfileTab;
