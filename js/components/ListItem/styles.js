import { StyleSheet, Dimensions } from 'react-native';
import {
  colors,
  typography
} from '../../config/styles';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  image: {
    height: 150,
    width: width / 3,
    borderRadius: 10
  },
  listing: {
    width: width / 2,
    marginLeft: 10,
    justifyContent: 'space-between'
  },
  title: {
    fontFamily: typography.M_BOLD,
    color: colors.MAIN
  },
  descriptionContainer: { flexDirection: 'row' },
  description: {
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
  },
  priceAndButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10
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
