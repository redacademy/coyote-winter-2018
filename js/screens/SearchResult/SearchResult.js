import React from 'react';
import { View, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import ListItem from '../../components/ListItem/';
import { List } from 'react-native-elements';
import { styles } from './styles';

const renderSeparator = () => {
  return <View style={styles.separator} />;
};

const SearchResult = ({ listings }) => {
  return (
    <View style={styles.container}>
      <List containerStyle={styles.listContainer}>
        <FlatList
          keyExtractor={item => item.listingId}
          data={listings}
          ItemSeparatorComponent={renderSeparator}
          renderItem={({ item }) => (
            <View>
              <ListItem item={item} />
            </View>
          )}
        />
      </List>
    </View>
  );
};

SearchResult.propTypes = {
  listings: PropTypes.array.isRequired
};

export default SearchResult;
