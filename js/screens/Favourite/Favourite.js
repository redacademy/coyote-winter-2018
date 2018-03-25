import React from 'react';
import { View, FlatList, Text, List } from 'react-native';
import FavouriteItem from '../../components/FavouriteItem';
import PropTypes from 'prop-types';
import { styles } from '../SearchResult/styles';

const renderSeparator = () => {
  return <View style={styles.separator} />;
};

const Favourite = ({ faves }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.faveText}>
        {faves.length === 0 ? "You haven't added any favourites yet!" : null}
      </Text>
      <List containerStyle={styles.listContainer}>
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
      </List>
    </View>
  );
};

Favourite.propTypes = {
  faves: PropTypes.array.isRequired
};

export default Favourite;
