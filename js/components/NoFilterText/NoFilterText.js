import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

const NoFilterText = ({ label }) => {
  return (
    <View>
      <Text>{label}</Text>
    </View>
  );
};

NoFilterText.propTypes = {
  label: PropTypes.string
};

NoFilterText.defaultPropTypes = {
  label: ''
};
export default NoFilterText;
