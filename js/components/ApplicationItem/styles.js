import { StyleSheet } from 'react-native';
import {
  colors,
  typography
} from '../../config/styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    height: 120,
    width: 100,
    borderRadius: 10,
    marginRight: 10,
    marginTop: 15,
    marginBottom: 10
  },
  listing: { marginTop: 5 },
  title: {
    marginBottom: 5,
    fontFamily: typography.M_BOLD,
    color: colors.MAIN
  },
  descriptionContainer: { flexDirection: 'row' },
  description: {
    flex: 1,
    flexWrap: 'wrap',
    fontSize: 12,
    marginBottom: 5,
    fontFamily: typography.OS_REGULAR
  },
  lastUpdated: {
    fontSize: 10,
    marginBottom: 5,
    color: 'grey',
    fontFamily: typography.OS_REGULAR
  },
  price: {
    color: '#CD5C5C',
    fontFamily: typography.M_SEMIBOLD
  }
});
