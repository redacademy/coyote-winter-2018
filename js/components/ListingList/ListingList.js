import React from 'react';
import { View, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from './styles';

const ListingList = ({ listings, renderFunction }) => {
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={item => item.listingId}
        data={listings}
        renderItem={({ item }) => renderFunction(item)}
      />
    </View>
  );
};

ListingList.propTypes = {
  listings: PropTypes.array.isRequired,
  renderFunction: PropTypes.func.isRequired
};

export default ListingList;
