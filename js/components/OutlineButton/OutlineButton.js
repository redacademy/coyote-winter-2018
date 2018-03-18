import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';
import PropTypes from 'prop-types';

const button = (label, buttonStyle, textStyle, onPress, disabled) => {
  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress} disabled={disabled}>
      <Text style={textStyle}>{label}</Text>
    </TouchableOpacity>
  );
};

const OutlineButton = ({ label, isPressed, onPress, disabled }) => {
  return isPressed
    ? button(label, styles.pressedButton, styles.pressedText, onPress)
    : button(label, styles.button, styles.text, onPress, disabled);
};

OutlineButton.propTypes = {
  label: PropTypes.string.isRequired,
  isPressed: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

export default OutlineButton;
