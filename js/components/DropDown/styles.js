import { StyleSheet } from 'react-native';
import { colors /*typography*/ } from '../../config/styles';

export const styles = StyleSheet.create({
  text: {
    marginTop: 15,
    marginBottom: 5,
    //fontFamily: typography.M_BOLD,
    color: colors.MAIN
  },
  container: { alignItems: 'flex-end' }
});
