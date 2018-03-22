import React from 'react';
import ModalDropdown from 'react-native-modal-dropdown';
import { styles } from './styles';
import PropTypes from 'prop-types';
import {
  colors,
  typography
} from '../../config/styles';

const DropDown = ({
  options,
  defaultValue,
  selectFunction,
  currentValue
}) => {
  return (
    <ModalDropdown
      textStyle={styles.buttonText}
      dropdownTextStyle={{
        height: 130,
        alignSelf: 'center',
        fontSize: 26,
        fontFamily: typography.OS_REGULAR,
        paddingTop: 55,
        color: colors.MAIN
      }}
      dropdownStyle={{
        height: '100%',
        width: '100%'
      }}
      options={options}
      defaultValue={defaultValue}
      onSelect={selectFunction}
      currentValue={currentValue}
    />
  );
};

DropDown.propTypes = {
  options: PropTypes.array.isRequired,
  defaultValue: PropTypes.string.isRequired,
  selectFunction: PropTypes.func.isRequired,
  currentValue: PropTypes.string.isRequired
};

export default DropDown;
