import React from 'react';
import { View, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { List } from 'react-native-elements';
import { styles } from './styles';

const renderSeparator = () => {
  return <View style={styles.separator} />;
};

const ListingList = ({ listings, renderFunction }) => {
  return (
    <View style={styles.container}>
      <List containerStyle={styles.listContainer}>
        <FlatList
          keyExtractor={item => item.listingId}
          data={listings}
          ItemSeparatorComponent={renderSeparator}
          renderItem={({ item }) => renderFunction(item)}
        />
      </List>
    </View>
  );
};

ListingList.propTypes = {
  listings: PropTypes.array.isRequired,
  renderFunction: PropTypes.func.isRequired
};

export default ListingList;
