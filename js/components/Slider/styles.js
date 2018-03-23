import { StyleSheet } from 'react-native';
import {
  colors,
  typography
} from '../../config/styles';

export const styles = StyleSheet.create({
  label: {
    marginBottom: 20,
    fontFamily: typography.OS_REGULAR
  },
  slider: {
    backgroundColor: colors.MAIN
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  priceLabel: {
    alignSelf: 'center',
    paddingBottom: 20
  },
  center: { alignItems: 'center' }
});
