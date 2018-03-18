import { StyleSheet } from 'react-native';
import { colors /*typography*/ } from '../../config/styles';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.white,
    borderColor: colors.MAIN,
    borderWidth: 2,
    width: 100,
    height: 30,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2
  },
  pressedButton: {
    backgroundColor: colors.MAIN,
    borderColor: colors.MAIN,
    borderWidth: 2,
    width: 100,
    height: 30,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2
  },
  text: {
    color: colors.night
    //fontFamily: typography.OS_REGULAR
  },
  pressedText: {
    color: colors.BACKGROUND
    //fontFamily: typography.OS_REGULAR
  }
});
