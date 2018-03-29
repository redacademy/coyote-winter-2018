import React from 'react';
import ModalDropdown from 'react-native-modal-dropdown';
import { styles } from './styles';
import PropTypes from 'prop-types';
import {
  colors,
  typography
} from '../../config/styles';
import { View } from 'react-native';

const DropDown = ({ options, selectFunction }) => {
  return (
    <View style={styles.container}>
      <ModalDropdown
        style={{
          zIndex: 3,
          flexDirection: 'row',
          alignSelf: 'flex-end'
        }}
        textStyle={{
          paddingRight: 10,
          fontFamily: typography.OS_REGULAR,
          color: colors.MAIN,
          fontSize: 18
        }}
        dropdownTextStyle={{
          height: 130,
          fontSize: 26,
          fontFamily: typography.OS_REGULAR,
          paddingTop: 55,
          color: colors.MAIN,
          textAlign: 'center'
        }}
        dropdownTextHighlightStyle={{
          backgroundColor: colors.MAIN,
          color: colors.WHITE
        }}
        dropdownStyle={{
          height: '100%',
          width: '100%'
        }}
        options={options}
        defaultValue={'Sort'}
        onSelect={selectFunction}
      />
    </View>
  );
};

DropDown.propTypes = {
  options: PropTypes.array.isRequired,
  selectFunction: PropTypes.func.isRequired,
  sortOptions: PropTypes.string.isRequired
};

export default DropDown;
