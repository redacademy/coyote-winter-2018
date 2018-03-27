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
    marginRight: 28,
    borderRadius: 25
  },
  buttonText: {
    color: colors.BACKGROUND,
    marginVertical: 5,
    marginHorizontal: 20,
    borderRadius: 30
  }
});
