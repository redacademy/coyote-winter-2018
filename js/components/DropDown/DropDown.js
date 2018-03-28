import React from 'react';
import ModalDropdown from 'react-native-modal-dropdown';
import { View, Text } from 'react-native';
import { styles } from './styles';
import PropTypes from 'prop-types';
import { SORT_OPTIONS } from '../../redux/modules/filter';

const DropDown = ({ label, options, selectFunction, sortOptions }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{label}</Text>
      <View>
        <ModalDropdown
          textStyle={{ fontSize: 14 }}
          dropdownStyle={{ height: 100 }}
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
