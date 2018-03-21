import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  Button
} from 'react-native';
import { connect } from 'react-redux';
import Filtering from './Filtering';
import Card from '../../components/Card';
import PropTypes from 'prop-types';
import {
  updateNumBathrooms,
  updateNumBedrooms,
  updatePriceRange
} from '../../redux/modules/filter';
import {
  filterByAnd,
  filterByBoolean,
  filterByPriceRange,
  filterBySingleValue,
  filterByTags
} from '../../lib/filterHelpers';
import {
  updateListings,
  updateLoading,
  updateLocation
} from '../../redux/modules/filter';
import {
  getListingsByLocation,
  sortListingsByDateDesc,
  unMarshallResult
} from '../../config/helpers';
import { colors } from '../../config/styles';

class FilteringScreen extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    headerLeft: (
      <Button
        onPress={this.queryBasedOnFilters}
        title="Filter"
        color={colors.MAIN}
      />
    )
  };

  componentDidMount() {
    // TODO: remove this - only a test function to simulate
    // getting data from searchResults
    const location =
      'Vancouver'; /*hard-coded value to remove upon routing*/
    // TODO: reset filters upon load
    // REMOVE WHEN SEARCH RESULTS IS CONNECTED
    // CURRENTLY WE RE-QUERY TO TEST BUT ONCE NAV
    // IS IN PLACE WE WILL USE THE LISTINGS IN REDUX :-)
    this.props.dispatch(updateLocation(location));
    getListingsByLocation(location).then(doc => {
      const listingArray = [];
      doc.docs.forEach(querySnap => {
        listingArray.push(unMarshallResult(querySnap));
      });
      const listingsSorted = listingArray.sort(
        sortListingsByDateDesc
      );
      this.props.dispatch(
        updateListings(listingsSorted)
      );
      this.props.dispatch(updateLoading(false));
    });
  }
  onPriceRangeChange = values => {
    const { dispatch } = this.props;
    dispatch(updatePriceRange(values));
  };
  queryBasedOnFilters = () => {
    // get all the listings based on location
    const {
      dispatch,
      laundryTags,
      listings,
      numBathrooms,
      numBedrooms,
      occupantTags,
      otherTags,
      parkingTags,
      priceRange,
      propertyTags
    } = this.props;
    let results = listings;
    results = filterByPriceRange(listings, priceRange);
    results = filterByTags(
      listings,
      propertyTags,
      'propertyType'
    );
    results = filterByBoolean(results, laundryTags);
    results = filterByBoolean(results, occupantTags);
    results = filterByTags(
      results,
      parkingTags,
      'parking'
    );
    results = filterByAnd(results, otherTags);
    results = filterBySingleValue(
      results,
      'numBathrooms',
      numBathrooms
    );
    results = filterBySingleValue(
      results,
      'numBedrooms',
      numBedrooms
    );
    dispatch(updateListings(results));
    this.props.navigation.goBack();
  };
  tagAction = (tags, property, updateAction) => {
    const { dispatch } = this.props;
    tags[property] = !tags[property];
    dispatch(updateAction({ ...tags }));
  };

  updateNumBathrooms = isDecrement => {
    const { numBathrooms, dispatch } = this.props;
    if (isDecrement) {
      numBathrooms > 1
        ? dispatch(
            updateNumBathrooms(numBathrooms - 1)
          )
        : dispatch(updateNumBathrooms(numBathrooms));
    } else {
      numBathrooms < 10
        ? dispatch(
            updateNumBathrooms(numBathrooms + 1)
          )
        : dispatch(updateNumBathrooms(numBathrooms));
    }
  };

  updateNumBedrooms = isDecrement => {
    const { numBedrooms, dispatch } = this.props;
    if (isDecrement) {
      numBedrooms > 0
        ? dispatch(updateNumBedrooms(numBedrooms - 1))
        : dispatch(updateNumBedrooms(numBedrooms));
    } else {
      numBedrooms < 10
        ? dispatch(updateNumBedrooms(numBedrooms + 1))
        : dispatch(updateNumBedrooms(numBedrooms));
    }
  };

  render() {
    const {
      laundryTags,
      numBathrooms,
      numBedrooms,
      occupantTags,
      otherTags,
      parkingTags,
      priceRange,
      propertyTags
    } = this.props;
    return (
      <ScrollView style={{ marginTop: 25 }}>
        <Card
          header={<Text />}
          content={
            <Filtering
              laundryTags={laundryTags}
              numBathrooms={numBathrooms}
              numBedrooms={numBedrooms}
              occupantTags={occupantTags}
              onPriceRangeChange={
                this.onPriceRangeChange
              }
              otherTags={otherTags}
              parkingTags={parkingTags}
              priceRange={priceRange}
              propertyTags={propertyTags}
              query={this.queryBasedOnFilters}
              tagAction={this.tagAction}
              updateNumBathrooms={
                this.updateNumBathrooms
              }
              updateNumBedrooms={
                this.updateNumBedrooms
              }
            />
          }
          separator={false}
        />
      </ScrollView>
    );
  }
}
const mapStateToProps = state => ({
  laundryTags: state.filter.laundryTags,
  listings: state.filter.listings,
  numBathrooms: state.filter.numBathrooms,
  numBedrooms: state.filter.numBedrooms,
  occupantTags: state.filter.occupantTags,
  otherTags: state.filter.otherTags,
  parkingTags: state.filter.parkingTags,
  priceRange: state.filter.priceRange,
  propertyTags: state.filter.propertyTags
});

FilteringScreen.propTypes = {
  dispatch: PropTypes.func.isRequired,
  laundryTags: PropTypes.object.isRequired,
  listings: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired,
  numBathrooms: PropTypes.number.isRequired,
  numBedrooms: PropTypes.number.isRequired,
  occupantTags: PropTypes.object.isRequired,
  otherTags: PropTypes.object.isRequired,
  parkingTags: PropTypes.object.isRequired,
  priceRange: PropTypes.array.isRequired,
  propertyTags: PropTypes.object.isRequired
};
export default connect(mapStateToProps)(
  FilteringScreen
);
