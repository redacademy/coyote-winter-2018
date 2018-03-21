import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../config/styles';

const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  backgroundContainer: {
    backgroundColor: colors.night,
    height: height
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: height / 5
  },
  input: {
    borderWidth: 1,
    borderColor: colors.MAIN,
    borderRadius: 25,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    height: 40,
    backgroundColor: 'white',
    textAlign: 'center',
    color: colors.MAIN
  },
  buttonContainer: {
    alignItems: 'center'
  },
  button: {
    minHeight: 40,
    minWidth: 100,
    backgroundColor: colors.MAIN,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginTop: 10
  },
  error: {
    color: colors.MAIN,
    marginTop: 10
  },
  coyote: {
    height: 100,
    width: 100,
    alignSelf: 'center',
    marginBottom: 50
  }
});
