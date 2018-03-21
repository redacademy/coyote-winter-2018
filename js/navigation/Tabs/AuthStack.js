import { StackNavigator } from 'react-navigation';

import LoginScreen from '../../screens/Login/LoginScreen';
import LocationSearchScreen from '../../screens/LocationSearch/LocationSearchScreen';

const AuthStack = StackNavigator(
  {
    Login: LoginScreen
  },
  { LocationSearch: LocationSearchScreen },
  { navigationOptions: { header: null } }
);

export default AuthStack;
