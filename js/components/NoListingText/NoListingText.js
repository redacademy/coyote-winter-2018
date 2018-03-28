import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import PropTypes from 'prop-types';

const NoListingText = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

NoListingText.propTypes = {
  text: PropTypes.string.isRequired
};
export default NoListingText;
