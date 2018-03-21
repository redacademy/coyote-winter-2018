import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Text, Button } from 'react-native';

import SearchResult from './SearchResult';

import {
  getListingsByLocation,
  unMarshallResult,
  sortListingsByDateDesc
} from '../../config/helpers';

import { colors } from '../../config/styles';

export default class SearchResultScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { listings: [], loading: true };
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: (
        <Button
          onPress={() => navigation.navigate('Filter')}
          title="Filter"
          color={colors.MAIN}
        />
      ),
      title: 'Search',
      tabBarLabel: 'Search Result'
    };
  };

  componentDidMount() {
    // perform query based on location passed via route
    // TODO: get value from route
    const location =
      'Vancouver'; /*hard-coded value to remove upon routing*/
    getListingsByLocation(location).then(doc => {
      const listingArray = [];
      doc.docs.forEach(querySnap => {
        listingArray.push(unMarshallResult(querySnap));
      });
      const listingsSorted = listingArray.sort(
        sortListingsByDateDesc
      );
      this.setState({
        listings: listingsSorted,
        loading: false
      });
    });
  }

  render() {
    const { loading, listings } = this.state;
    return loading ? (
      <Text>Loading</Text>
    ) : (
      <SearchResult
        listings={listings}
        navigation={this.props.navigation}
      />
    );
  }
}

SearchResultScreen.propTypes = {
  navigation: PropTypes.object.isRequired
};
