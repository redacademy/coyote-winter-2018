import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  View,
  Button,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Filtering from './Filtering';
import {
  updateNumBathrooms,
  updateNumBedrooms,
  updatePriceRange,
  updateSortOptions,
  queryBasedOnFilters
} from '../../redux/modules/filter';
import { colors } from '../../config/styles';
import { styles } from './styles';

class FilteringScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerLeft: (
      <Button
        onPress={() => navigation.goBack()}
        title="Cancel"
        color={colors.MAIN}
      />
    ),
    tabBarVisible: false
  });

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

  updateNumBathrooms = numBathrooms => {
    const { dispatch } = this.props;
    dispatch(updateNumBathrooms(numBathrooms));
  };

  updateNumBedrooms = numBedrooms => {
    const { dispatch } = this.props;
    dispatch(updateNumBedrooms(numBedrooms));
  };

  render() {
    const {
      laundryTags,
      location,
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
      <View>
        <ScrollView style={styles.scroll}>
          <View style={styles.locationContainer}>
            <View>
              <Text style={styles.locationText}>
                {location}
              </Text>
            </View>
            <View>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('LocationSearch')
                }
                style={styles.button}
              >
                <Text style={styles.buttonText}>
                  {location === '' ||
                  location.length == 0
                    ? 'Change Location'
                    : 'Change'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* <View>
              <DropDown
                options={SORT_OPTIONS}
                defaultValue={'Sort By'}
                selectFunction={this.sortListings}
                currentValue={SORT_OPTIONS[0]}
              />
            </View> */}
          <Filtering
            laundryTags={laundryTags}
            navigation={navigation}
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
            sortOptions={sortOptions}
            tagAction={this.tagAction}
            updateNumBathrooms={
              this.updateNumBathrooms
            }
            updateNumBedrooms={this.updateNumBedrooms}
          />
        </ScrollView>
        <TouchableOpacity
          style={styles.applyButton}
          onPress={() => {
            queryBasedOnFilters();
            navigation.goBack();
          }}
        >
          <Text style={styles.buttonText}>
            Apply Filters
          </Text>
        </TouchableOpacity>
      </View>
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

FilteringScreen.defaultProps = {
  onPress: {}
};

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
export default connect(mapStateToProps)(
  FilteringScreen
);
