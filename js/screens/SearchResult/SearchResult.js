import React from 'react';
import PropTypes from 'prop-types';
import ListingList from '../../components/ListingList/';
import { View } from 'react-native';
import ListItem from '../../components/ListItem/';
import NoListingText from '../../components/NoListingText/';

const renderFunction = item => {
  return (
    <View>
<<<<<<< HEAD
      <ListItem item={item} />
=======
      <TouchableOpacity>
        <ListItem item={item} />
      </TouchableOpacity>
>>>>>>> e303849... added autocomplete and styling to location search screen; loader
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
  listings: PropTypes.array.isRequired
};

export default SearchResult;
