import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import SearchResult from './SearchResult';
import PropTypes from 'prop-types';
import {
  updateListings,
  updateLoading,
  updateLocation
} from '../../redux/modules/filter';
import {
  getListingsByLocation,
  unMarshallResult,
  sortListingsByDateDesc
} from '../../config/helpers';
import Card from '../../components/Card/';
import FilterAndSearchBar from '../../components/FilterAndSearchBar/';

class SearchResultContainer extends Component {
  constructor() {
    super();
    this.state = { loading: true };
  }
  componentDidMount() {
    // perform query based on location passed via route
    // TODO: get value from route
    const location = 'Vancouver'; /*hard-coded value to remove upon routing*/
    this.props.dispatch(updateLocation(location));
    getListingsByLocation(location).then(doc => {
      const listingArray = [];
      doc.docs.forEach(querySnap => {
        listingArray.push(unMarshallResult(querySnap));
      });
      const listingsSorted = listingArray.sort(sortListingsByDateDesc);
      this.props.dispatch(updateListings(listingsSorted));
      this.props.dispatch(updateLoading(false));
    });
  }

  render() {
    const { listings, loading } = this.props;
    return loading ? (
      <Text>Loading</Text>
    ) : (
      <ScrollView style={{ marginTop: 25 }}>
        <Card
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
          separator={true}
        />
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  listings: state.filter.listings,
  loading: state.filter.loading,
  location: state.filter.location
});

SearchResultContainer.propTypes = {
  listings: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  location: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
};
export default connect(mapStateToProps)(SearchResultContainer);
