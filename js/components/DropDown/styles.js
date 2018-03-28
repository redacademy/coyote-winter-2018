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
    width: width / 2,
    justifyContent: 'space-between',
    alignSelf: 'center'
  }
});
