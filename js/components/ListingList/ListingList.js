import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Card } from 'react-native-elements';
import { styles } from './styles';

const ListingList = ({ header, content }) => {
  return (
    <Card containerStyle={styles.card}>
      {header}
      <View style={styles.separator} />
      {content}
    </Card>
  );
};

ListingList.propTypes = {
  header: PropTypes.object.isRequired,
  content: PropTypes.object.isRequired
};

export default ListingList;
