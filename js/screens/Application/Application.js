import React from 'react';
import PropTypes from 'prop-types';
import ListingList from '../../components/ListingList/';
import { View } from 'react-native';
import ApplicationItem from '../../components/ApplicationItem';

const renderFunction = item => {
  return (
    <View>
      <ApplicationItem item={item} />
    </View>
  );
};

const Application = ({ listings }) => {
  return <ListingList listings={listings} renderFunction={renderFunction} />;
};

Application.propTypes = {
  listings: PropTypes.array.isRequired
};

export default Application;
