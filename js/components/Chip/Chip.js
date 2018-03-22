import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

const Chip = ({ label, close }) => {
  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <TouchableOpacity style={styles.chip} onPress={close}>
        <View style={styles.textView}>
          <View style={styles.labelView}>
            <Text style={styles.text}>{label}</Text>
          </View>
          <View style={styles.iconView}>
            <Text style={styles.closeIcon}>x</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Chip;

Chip.propTypes = {
  label: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired
};
