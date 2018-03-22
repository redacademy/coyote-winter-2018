import { StyleSheet } from 'react-native';
import {
  colors,
  typography
} from '../../config/styles';

export const styles = StyleSheet.create({
  faveText: {
    marginTop: 40,
    color: colors.MAIN,
    fontFamily: typography.M_BOLD
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: colors.MAIN,
    borderRadius: 25,
    marginTop: 25
  },
  buttonText: {
    color: colors.BACKGROUND,
    marginVertical: 5,
    marginHorizontal: 20
  }
});
