import React from 'react';
import PropTypes from 'prop-types';
import ListingList from '../../components/ListingList/';
import { View, TouchableOpacity } from 'react-native';
import ListItem from '../../components/ListItem/';

const renderFunction = (item, navigation) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => console.log(navigation.state)}
      >
        <ListItem item={item} />
      </TouchableOpacity>
    </View>
  );
};
const SearchResult = ({ listings }) => {
  return (
    <ListingList
      listings={listings}
      renderFunction={renderFunction}
    />
  );
};

SearchResult.propTypes = {
  listings: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired
};

export default SearchResult;
