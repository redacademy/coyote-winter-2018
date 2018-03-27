import React from 'react';
import PropTypes from 'prop-types';
import ListingList from '../../components/ListingList/';
import { View, TouchableOpacity } from 'react-native';
import ListItem from '../../components/ListItem/';
import NoListingText from '../../components/NoListingText/';

const renderFunction = item => {
  return (
    <View>
      <TouchableOpacity>
        <ListItem item={item} />
      </TouchableOpacity>
    </View>
  );
};
const SearchResult = ({ listings }) => {
  return listings.length < 1 ? (
    <NoListingText text={'No Results Found - Adjust Your Search'} />
  ) : (
    <ListingList listings={listings} renderFunction={renderFunction} />
  );
};

SearchResult.propTypes = {
  listings: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired
};

export default SearchResult;
