import { StackNavigator } from 'react-navigation';

import ProfileScreen from '../../screens/Profile/ProfileScreen';
import ApplicationScreen from '../../screens/Application/ApplicationScreen';
import { colors } from '../../config/styles';

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
