import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../config/styles';

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.GREY,
    height: height
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 20
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.GREY,
    marginTop: 20,
    marginRight: 20,
    marginLeft: 50,
    height: 40,
    width: width / 1.5,
    backgroundColor: 'white',
    textAlign: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -1 },
    shadowOpacity: 0.8,
    shadowRadius: 2
  },
  headerImage: { height: 150, width: 150 },
  label: {
    marginTop: 20,
    marginLeft: 60,
    marginBottom: 20
  },
  buttonContainer: {
    marginTop: 15,
    flexDirection: 'column',
    alignItems: 'center'
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.MAIN_,
    borderRadius: 25,
    minWidth: 100,
    minHeight: 30,
    marginTop: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2
  },
  text: {
    color: colors.BACKGROUND
  }
});
