import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Card } from 'react-native-elements';
import { styles } from './styles';

const CardList = ({ header, content, separator }) => {
  return (
    <Card containerStyle={styles.card}>
      {header}
      {separator && <View style={styles.separator} />}
      <View>{content}</View>
    </Card>
  );
};

CardList.propTypes = {
  header: PropTypes.object.isRequired,
  content: PropTypes.object.isRequired,
  separator: PropTypes.bool.isRequired
};

export default CardList;
