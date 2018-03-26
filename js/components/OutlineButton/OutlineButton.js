import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { styles } from './styles';
import PropTypes from 'prop-types';

const button = (label, buttonStyle, textStyle, onPress, disabled) => {
  return (
    <View>
      <TouchableOpacity
        style={buttonStyle}
        onPress={onPress}
        disabled={disabled}
      >
        <Text
          style={textStyle}
          adjustsFontSizeToFit={true}
          minimumFontScale={0.75}
          numberOfLines={2}
        >
          {label}
        </Text>
      </TouchableOpacity>
    </View>
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
OutlineButton.defaultProps = {
  disabled: false
};
export default OutlineButton;
