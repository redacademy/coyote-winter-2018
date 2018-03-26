import { StyleSheet } from 'react-native';
import { colors, typography } from '../../config/styles';

export const styles = StyleSheet.create({
  locationLabel: {
    marginTop: 15,
    color: colors.MAIN,
    fontFamily: typography.OS_REGULAR
  },
  text: {
    marginTop: 5,
    fontFamily: typography.OS_REGULAR
  },
  applyButton: {
    padding: 5,
    alignItems: 'center'
  },
  rooms: {
    padding: 5,
    alignItems: 'center'
  },
  price: {
    marginTop: 10
  },
  scroll: {
    marginTop: 25
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  location: {
    flexDirection: 'column'
  }
});
