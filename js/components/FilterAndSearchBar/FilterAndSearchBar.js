import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';
import PropTypes from 'prop-types';

const FilterAndSearchBar = ({ filterFunction, searchFunction }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => filterFunction()}>
        <Text style={styles.text}> Filter </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => searchFunction()}>
        <Text style={styles.text}> New Location </Text>
      </TouchableOpacity>
    </View>
  );
};

FilterAndSearchBar.propTypes = {
  filterFunction: PropTypes.func.isRequired,
  searchFunction: PropTypes.func.isRequired
};

export default FilterAndSearchBar;
