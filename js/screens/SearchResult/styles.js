import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';
import { typography } from '../../config/styles';

export const styles = StyleSheet.create({
  faveText: {
    color: colors.MAIN,
    fontFamily: typography.M_BOLD
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  listContainer: {
    borderTopWidth: 0,
    borderBottomWidth: 0
  }
});
