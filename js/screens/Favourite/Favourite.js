import React from 'react';
import { View, FlatList } from 'react-native';
import FavouriteItem from '../../components/FavouriteItem';
import PropTypes from 'prop-types';
import { styles } from '../SearchResult/styles';

const renderSeparator = () => {
  return <View style={styles.separator} />;
};

const Favourite = ({ faves }) => {
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={item => item.listingId}
        data={faves}
        ItemSeparatorComponent={renderSeparator}
        renderItem={({ item }) => (
          <View>
            <FavouriteItem item={item} />
          </View>
        )}
      />
    </View>
  );
};

Favourite.propTypes = {
  faves: PropTypes.array.isRequired
};

export default Favourite;
