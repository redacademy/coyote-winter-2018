import React from 'react';
import PropTypes from 'prop-types';
import ListingList from '../../components/ListingList/';
import { View } from 'react-native';
import ListItem from '../../components/ListItem/';

const renderFunction = item => {
  return (
    <View>
      <ListItem item={item} />
    </View>
  );
};
const SearchResult = ({ listings }) => {
  return <ListingList listings={listings} renderFunction={renderFunction} />;
};

SearchResult.propTypes = {
  listings: PropTypes.array.isRequired
};

export default SearchResult;
