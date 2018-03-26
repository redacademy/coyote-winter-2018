import { StyleSheet, Dimensions } from 'react-native';
import { colors } from './styles';
import { typography } from './styles';

const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.night,
    height: height
  },
  container: {
    flexDirection: 'column',
    marginTop: height / 6
  },
  input: {
    borderWidth: 1,
    borderRadius: 25,
    borderColor: colors.MAIN,
    marginTop: 20,
    marginRight: 20,
    marginLeft: 20,
    height: 40,
    backgroundColor: 'white',
    textAlign: 'center',
    fontFamily: typography.OS_REGULAR,
    color: colors.MAIN
  },
  buttonContainer: {
    marginTop: 15,
    flexDirection: 'column',
    alignItems: 'center'
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.MAIN,
    borderRadius: 25,
    minWidth: 100,
    minHeight: 30,
    marginTop: 10
  },
  coyote: {
    height: 100,
    width: 100,
    alignSelf: 'center',
    marginBottom: 50
  },
  error: {
    color: colors.MAIN,
    textAlign: 'center',
    marginTop: 10,
    fontFamily: typography.M_MEDIUM
  },
  keyboard: {
    marginBottom: -height / 8
  },
  noAccountText: {
    marginTop: 20,
    color: colors.MAIN,
    fontFamily: typography.M_MEDIUM
  },
  buttonText: {
    color: '#fff',
    fontFamily: typography.M_MEDIUM
  },
  backButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.MAIN,
    borderRadius: 25,
    minWidth: 160,
    minHeight: 30,
    marginTop: 10
  }
});
