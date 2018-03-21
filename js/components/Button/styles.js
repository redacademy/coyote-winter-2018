import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

export const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.MAIN,
    borderRadius: 25,
    width: 120,
    minHeight: 30,
    marginTop: 10
  },
  text: {
    color: colors.BACKGROUND
  }
});
