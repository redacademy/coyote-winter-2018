import React from 'react';
import { ActivityIndicator } from 'react-native';
import { colors } from '../../config/styles';
import { styles } from './styles';

const Loader = () => {
  return (
    <ActivityIndicator
      animating={true}
      color={colors.MAIN}
      size="large"
      style={styles.loader}
    />
  );
};

export default Loader;
