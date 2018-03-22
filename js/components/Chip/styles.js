import { StyleSheet } from 'react-native';
import { colors, typography } from '../../config/styles';

export const styles = StyleSheet.create({
  chip: {
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.MAIN,
    borderRadius: 15,
    width: 100,
    minHeight: 20,
    marginTop: 10
  },
  textView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  labelView: {
    marginRight: 5,
    alignItems: 'center'
  },
  iconView: {
    marginTop: 5,
    alignItems: 'center'
  },
  text: {
    color: colors.BACKGROUND,
    fontSize: 10,
    marginTop: 2,
    fontFamily: typography.OS_REGULAR
  },
  closeIcon: {
    fontSize: 9
  }
});
