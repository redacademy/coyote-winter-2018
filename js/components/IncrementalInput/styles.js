import { StyleSheet } from 'react-native';
import { colors /*typography*/ } from '../../config/styles';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.BACKGROUND,
    borderColor: colors.GREY,
    borderWidth: 3,
    width: 240,
    height: 40,
    borderRadius: 5,
    flex: 1,
    flexDirection: 'row'
  },
  label: {
    marginTop: 10,
    marginLeft: 5
    //fontFamily: typography.OS_REGULAR
  },
  icon: {
    fontSize: 20
    //fontFamily: typography.OS_REGULAR
  },
  value: {
    fontSize: 14,
    marginTop: 5
    //fontFamily: typography.OS_REGULAR
  },
  incrementContainer: {
    marginTop: 5,
    flex: 1,
    flexDirection: 'row'
  }
});
