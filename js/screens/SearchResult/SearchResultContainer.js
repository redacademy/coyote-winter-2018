import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import SearchResult from './SearchResult';
import {
  getListingsByLocation,
  unMarshallResult,
  sortListingsByDateDesc
} from '../../config/helpers';
import ListingList from '../../components/ListingList/';
import FilterAndSearchBar from '../../components/FilterAndSearchBar/';

class SearchResultContainer extends Component {
  constructor() {
    super();
    this.state = { listings: [], loading: true };
  }
  componentDidMount() {
    // perform query based on location passed via route
    // TODO: get value from route
    const location = 'Vancouver'; /*hard-coded value to remove upon routing*/
    getListingsByLocation(location).then(doc => {
      const listingArray = [];
      doc.docs.forEach(querySnap => {
        listingArray.push(unMarshallResult(querySnap));
      });
      const listingsSorted = listingArray.sort(sortListingsByDateDesc);
      this.setState({ listings: listingsSorted, loading: false });
    });
  }

  render() {
    const { listings, loading } = this.state;
    return loading ? (
      <Text>Loading</Text>
    ) : (
      <ScrollView style={{ marginTop: 25 }}>
        <ListingList
          header={
            <FilterAndSearchBar
              searchFunction={() => {
                /*TODO: route to search modal*/
              }}
              filterFunction={() => {
                /*TODO: route to filter screen*/
              }}
            />
          }
          content={<SearchResult listings={listings} />}
        />
      </ScrollView>
    );
  }
}

export default SearchResultContainer;
