import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from './styles';

const IncrementalInput = ({ label, value, incrementValue, decrementValue }) => {
  return (
    <View style={styles.container}>
      <View style={styles.label}>
        <Text>{label}</Text>
      </View>
      <View style={styles.incrementContainer}>
        <TouchableOpacity onPress={() => decrementValue(true)}>
          <Text style={styles.icon}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.value}>{value}</Text>
        <TouchableOpacity onPress={() => incrementValue(false)}>
          <Text style={styles.icon}>{'>'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

IncrementalInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  incrementValue: PropTypes.func.isRequired,
  decrementValue: PropTypes.func.isRequired
};

export default IncrementalInput;
