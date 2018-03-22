import React from 'react';
import ModalDropdown from 'react-native-modal-dropdown';
import { View, Text } from 'react-native';
import { styles } from './styles';
import PropTypes from 'prop-types';

const DropDown = ({ label, options, defaultValue, selectFunction }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{label}</Text>
      <View>
        <ModalDropdown
          textStyle={{ fontSize: 14 }}
          dropdownStyle={{ height: 100 }}
          options={options}
          defaultValue={defaultValue}
          onSelect={selectFunction}
        />
      </View>
    </View>
  );
};

DropDown.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  defaultValue: PropTypes.string.isRequired,
  selectFunction: PropTypes.func.isRequired
};

export default DropDown;
