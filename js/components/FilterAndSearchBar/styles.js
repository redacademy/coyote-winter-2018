import { StyleSheet } from 'react-native';
import { colors, /*typography*/ } from '../../config/styles';

export const styles = StyleSheet.create({
  text: {
    marginTop: 10,
    //fontFamily: typography.M_BOLD,
    color: colors.MAIN
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
