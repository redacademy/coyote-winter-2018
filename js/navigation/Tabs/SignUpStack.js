import { StackNavigator } from 'react-navigation';
import SignUpScreen from '../../screens/SignUp/SignUpScreen';
import SignUpNameScreen from '../../screens/SignUpName/SignUpNameScreen';

const SignUpStack = StackNavigator({
  SignUpName: {
    screen: SignUpNameScreen
  },
  SignUpEmailAndPassword: {
    screen: SignUpScreen
  }
});

export default SignUpStack;
