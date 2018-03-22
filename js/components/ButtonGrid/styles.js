import { StyleSheet } from 'react-native';
import {
  colors,
  typography
} from '../../config/styles';

export const styles = StyleSheet.create({
  text: {
    marginTop: 10,
    fontFamily: typography.M_BOLD,
    color: colors.MAIN
  },
  heading: { marginBottom: 10 },
  body: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10
  },
  buttonGridContainer: {
    borderBottomColor: '#CED0CE',
    borderWidth: StyleSheet.hairlineWidth
  }
});
