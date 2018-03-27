import React, { Component } from 'react';
import { ScrollView, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import Filtering from './Filtering';
import PropTypes from 'prop-types';
import {
  SORT_OPTIONS,
  queryBasedOnFilters,
  updateNumBathrooms,
  updateNumBedrooms,
  updatePriceRange,
  updateSortOptions
} from '../../redux/modules/filter';
import { colors } from '../../config/styles';
import DropDown from '../../components/DropDown/';
import { styles } from './styles';

class FilteringScreen extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    headerLeft: (
      <Button
        onPress={queryBasedOnFilters}
        title="Filter"
        color={colors.MAIN}
      />
    )
  };

  onPriceRangeChange = values => {
    const { dispatch } = this.props;
    dispatch(updatePriceRange(values));
  };

  sortListings = sortOrder => {
    const { dispatch } = this.props;
    dispatch(updateSortOptions(sortOrder));
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
        ? dispatch(updateNumBathrooms(numBathrooms - 1))
        : dispatch(updateNumBathrooms(numBathrooms));
    } else {
      numBathrooms < 10
        ? dispatch(updateNumBathrooms(numBathrooms + 1))
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
      navigation,
      numBathrooms,
      numBedrooms,
      occupantTags,
      otherTags,
      parkingTags,
      priceRange,
      propertyTags,
      sortOptions
    } = this.props;
    return (
      <ScrollView style={styles.scroll}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}
        >
          <View style={{ flexDirection: 'column' }}>
            <Text style={styles.locationLabel}>Location: </Text>
            <Text style={styles.text}>{this.props.location}</Text>
          </View>
          <DropDown
            label={'Sort By'}
            options={SORT_OPTIONS}
            defaultValue={SORT_OPTIONS[0]}
            selectFunction={this.sortListings}
          />
        </View>
        <Filtering
          laundryTags={laundryTags}
          navigation={navigation}
          numBathrooms={numBathrooms}
          numBedrooms={numBedrooms}
          occupantTags={occupantTags}
          onPriceRangeChange={this.onPriceRangeChange}
          otherTags={otherTags}
          parkingTags={parkingTags}
          priceRange={priceRange}
          propertyTags={propertyTags}
          query={queryBasedOnFilters}
          sortOptions={sortOptions}
          tagAction={this.tagAction}
          updateNumBathrooms={this.updateNumBathrooms}
          updateNumBedrooms={this.updateNumBedrooms}
        />
      </ScrollView>
    );
  }
}
const mapStateToProps = state => ({
  laundryTags: state.filter.laundryTags,
  listings: state.filter.listings,
  location: state.filter.location,
  numBathrooms: state.filter.numBathrooms,
  numBedrooms: state.filter.numBedrooms,
  occupantTags: state.filter.occupantTags,
  originalListings: state.listings.listings,
  otherTags: state.filter.otherTags,
  parkingTags: state.filter.parkingTags,
  priceRange: state.filter.priceRange,
  propertyTags: state.filter.propertyTags,
  sortOptions: state.filter.sortOptions
});

FilteringScreen.propTypes = {
  dispatch: PropTypes.func.isRequired,
  laundryTags: PropTypes.object.isRequired,
  listings: PropTypes.array.isRequired,
  location: PropTypes.string.isRequired,
  navigation: PropTypes.object.isRequired,
  numBathrooms: PropTypes.number.isRequired,
  numBedrooms: PropTypes.number.isRequired,
  occupantTags: PropTypes.object.isRequired,
  originalListings: PropTypes.array.isRequired,
  otherTags: PropTypes.object.isRequired,
  parkingTags: PropTypes.object.isRequired,
  priceRange: PropTypes.array.isRequired,
  propertyTags: PropTypes.object.isRequired,
  sortOptions: PropTypes.string.isRequired
};
export default connect(mapStateToProps)(FilteringScreen);
