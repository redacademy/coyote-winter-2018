import React from 'react';
import ModalDropdown from 'react-native-modal-dropdown';
import { styles } from './styles';
import PropTypes from 'prop-types';
import { SORT_OPTIONS } from '../../redux/modules/filter';
import { colors, typography } from '../../config/styles';
import { View, Text } from 'react-native';

const DropDown = ({ label, options, selectFunction, sortOptions }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.buttonText}>{label}</Text>
      <View>
        <ModalDropdown
          textStyle={styles.text}
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
          defaultValue={SORT_OPTIONS[sortOptions]}
          onSelect={selectFunction}
        />
      </View>
    </View>
  );
};

DropDown.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  selectFunction: PropTypes.func.isRequired,
  sortOptions: PropTypes.string.isRequired
};

export default DropDown;
