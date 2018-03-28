import React from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import FavouriteItem from '../../components/FavouriteItem';
import PropTypes from 'prop-types';
import { styles } from './styles';

const renderSeparator = () => {
  return <View style={styles.separator} />;
};

const Favourite = ({ faves, navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.faveText}>
        {faves.length === 0 && "You haven't added any favourites yet!"}
      </Text>

      {faves.length === 0 && (
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Search')}
        >
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      )}

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
  faves: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired
};

export default Favourite;
