import { StyleSheet } from 'react-native';
import {
  colors,
  typography
} from '../../config/styles';

export const styles = StyleSheet.create({
  text: {
    color: colors.night,
    fontFamily: typography.OS_REGULAR,
    fontSize: 18,
    textDecorationLine: 'underline',
    textDecorationColor: colors.night
  },
  buttonText: {
    color: colors.MAIN,
    fontFamily: typography.OS_REGULAR,
    fontSize: 18
  },
  container: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
