import React from 'react';
import { Dimensions } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import { styles } from './styles';
import PropTypes from 'prop-types';
import { SORT_OPTIONS } from '../../redux/modules/filter';
import {
  colors,
  typography
} from '../../config/styles';
import { View, Text } from 'react-native';

const { width, height } = Dimensions.get('window');

const DropDown = ({
  options,
  selectFunction,
  sortOptions
}) => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.buttonText}>
        {defaultValue}
      </Text> */}
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
  // label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  selectFunction: PropTypes.func.isRequired,
  sortOptions: PropTypes.string.isRequired
};

export default DropDown;
