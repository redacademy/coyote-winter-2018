import { StyleSheet, Dimensions } from 'react-native';
import {
  colors,
  typography
} from '../../config/styles';
const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  heading: {
    fontFamily: typography.M_MEDIUM,
    color: colors.night,
    fontSize: 16,
    marginLeft: width / 8,
    marginBottom: 20
  },
  text: {
    marginTop: 10,
    fontFamily: typography.M_BOLD,
    color: colors.MAIN
  },
  body: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
    width: width / 1.5,
    marginHorizontal: width / 6
  },
  buttonGridContainer: {
    width: width,
    flexWrap: 'wrap'
  }
});
