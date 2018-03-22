import React from 'react';
import {
  View,
  FlatList,
  TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import ListItem from '../../components/ListItem/';
import { List } from 'react-native-elements';
import { styles } from './styles';

const renderSeparator = () => {
  return <View style={styles.separator} />;
};

const SearchResult = ({ listings, navigation }) => {
  return (
    <View style={styles.container}>
      <List containerStyle={styles.listContainer}>
        <FlatList
          keyExtractor={item => item.listingId}
          data={listings}
          ItemSeparatorComponent={renderSeparator}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Listing')
              }
            >
              <View>
                <ListItem item={item} />
              </View>
            </TouchableOpacity>
          )}
        />
      </List>
    </View>
  );
};

SearchResult.propTypes = {
  listings: PropTypes.array.isRequired,
  navigation: PropTypes.object
};

export default SearchResult;
