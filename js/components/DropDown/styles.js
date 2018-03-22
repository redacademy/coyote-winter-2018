<<<<<<< HEAD
import { StyleSheet, Dimensions } from 'react-native';
import { colors, typography } from '../../config/styles';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  text: {
    color: colors.night,
    fontFamily: typography.OS_REGULAR,
    fontSize: 18,
    textDecorationLine: 'underline',
    textDecorationColor: colors.night
  },
  buttonText: {
    color: colors.MAIN,
    fontFamily: typography.OS_REGULAR,
    fontSize: 18
  },
  container: {
    marginTop: 15,
    flexDirection: 'row',
    // width: width / 2
    justifyContent: 'space-between'
    // alignSelf: 'center'
=======
import { StyleSheet } from 'react-native';
import {
  colors,
  typography
} from '../../config/styles';

export const styles = StyleSheet.create({
  buttonText: {
    color: colors.MAIN,
    fontFamily: typography.OS_REGULAR,
    fontSize: 18,
    marginRight: 4
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: StyleSheet.hairlineWidth
>>>>>>> Removed incremental input, changed redux function in search result
  }
});
