import { StyleSheet } from 'react-native';
import {
  colors,
  typography
} from '../../config/styles';

export const styles = StyleSheet.create({
  buttonText: {
    color: colors.MAIN,
    fontFamily: typography.OS_REGULAR,
    fontSize: 18,
    marginRight: 4
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: StyleSheet.hairlineWidth
  }
});
