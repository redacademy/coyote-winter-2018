import { StyleSheet } from 'react-native';
import { colors, typography } from '../../config/styles';

export const styles = StyleSheet.create({
  text: {
    color: colors.MAIN,
    fontFamily: typography.OS_REGULAR
  },
  container: { alignItems: 'center' }
});
