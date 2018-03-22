import { StyleSheet, Dimensions } from 'react-native';
import {
  colors,
  typography
} from '../../config/styles';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  locationContainer: {
    marginRight: 3,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginTop: 25,
    marginBottom: 30
  },
  locationText: {
    fontFamily: typography.M_MEDIUM,
    color: colors.night,
    fontSize: 16,
    marginRight: 15
  },
  applyButton: {
    padding: 10,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    alignItems: 'center',
    backgroundColor: colors.MAIN
  },
  rooms: {
    padding: 5,
    alignItems: 'center'
  },
  price: {
    alignSelf: 'center',
    width: width / 1.5
  },
  heading: {
    fontFamily: typography.M_MEDIUM,
    color: colors.night,
    fontSize: 16,
    marginLeft: width / 8,
    marginBottom: -10
  },
  scroll: {
    marginBottom: 50
  },
  pickerContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  },
  pickerHeader: {
    zIndex: 3,
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: colors.GREY,
    height: width / 6,
    textAlign: 'center',
    fontFamily: typography.M_MEDIUM,
    color: colors.night,
    fontSize: 16
  },
  pickerWrapper: {
    width: width / 3,
    flexDirection: 'column'
  },
  picker: {
    marginTop: -70
  },
  button: {
    backgroundColor: colors.MAIN,
    borderRadius: 25
  },
  buttonText: {
    color: colors.BACKGROUND,
    marginVertical: 5,
    marginHorizontal: 25,
    borderRadius: 30,
    fontSize: 16
  }
});
