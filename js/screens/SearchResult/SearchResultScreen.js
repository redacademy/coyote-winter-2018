import React, { Component } from 'react';
import {
  Button,
  ScrollView,
  Text
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  queryBasedOnFilters,
  updateLaundryTags,
  updateLoading,
  updateOccupantTags,
  updateOtherTags,
  updateParkingTags,
  updatePropertyTags
} from '../../redux/modules/filter';
import SearchResult from './SearchResult';
import NoListingText from '../../components/NoListingText/';
import NoFilterText from '../../components/NoFilterText/';
import {
  getTrueParams,
  setParamToFalse
} from '../../lib/filterHelpers';
import ChipGrid from '../../components/ChipGrid';
import { colors } from '../../config/styles';
import { styles } from './styles';

class SearchResultScreen extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({ navigation }) => ({
    headerLeft: (
      <Button
        onPress={() =>
          navigation.navigate('Filter', {
            title: `asdf`
          })
        }
        title="Filter"
        color={colors.MAIN}
      />
    )
  });

  getChipLabels = () => {
    const {
      laundryTags,
      occupantTags,
      otherTags,
      parkingTags,
      propertyTags
    } = this.props;

    // get all the tags and merge them
    const allTags = Object.assign(
      JSON.parse(JSON.stringify(laundryTags)),
      JSON.parse(JSON.stringify(occupantTags)),
      JSON.parse(JSON.stringify(otherTags)),
      JSON.parse(JSON.stringify(parkingTags)),
      JSON.parse(JSON.stringify(propertyTags))
    );

    const trueTags = getTrueParams(allTags);
    return trueTags;
  };

  closeChip = tagName => {
    const {
      dispatch,
      laundryTags,
      occupantTags,
      otherTags,
      parkingTags,
      propertyTags
    } = this.props;

    const tagSet = setParamToFalse(tagName, [
      { updateLaundryTags: laundryTags },
      { updateOccupantTags: occupantTags },
      { updateOtherTags: otherTags },
      { updateParkingTags: parkingTags },
      { updatePropertyTags: propertyTags }
    ]);

    // set the tagSet to false in redux
    const functionName = Object.keys(tagSet)[0];
    const tags = Object.values(tagSet)[0];

    switch (functionName) {
      case 'updateLaundryTags':
        dispatch(updateLaundryTags({ ...tags }));
        break;
      case 'updateOccupantTags':
        dispatch(updateOccupantTags({ ...tags }));
        break;
      case 'updateOtherTags':
        dispatch(updateOtherTags({ ...tags }));
        break;
      case 'updateParkingTags':
        dispatch(updateParkingTags({ ...tags }));
        break;
      case 'updatePropertyTags':
        dispatch(updatePropertyTags({ ...tags }));
        break;
    }
    queryBasedOnFilters();
  };

  componentDidMount() {
    const { dispatch } = this.props;
    queryBasedOnFilters();
    dispatch(updateLoading(false));
  }

  render() {
    const { listings, loading } = this.props;
    const chips = this.getChipLabels();
    return loading ? (
      <Text>loadings</Text>
    ) : (
      <ScrollView style={styles.scroll}>
        {chips.length < 1 ? (
          <NoFilterText text={'No Filters Applied'} />
        ) : (
          <ChipGrid
            tags={chips}
            action={chip => this.closeChip(chip)}
          />
        )}
        {listings.length < 1 ? (
          <NoListingText
            text={
              'No Results Found - Adjust Your Search'
            }
          />
        ) : (
          <SearchResult
            listings={listings}
            navigation={this.props.navigation}
          />
        )}
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  laundryTags: state.filter.laundryTags,
  listings: state.filter.listings,
  loading: state.filter.loading,
  location: state.filter.location,
  numBathrooms: state.filter.numBathrooms,
  numBedrooms: state.filter.numBedrooms,
  occupantTags: state.filter.occupantTags,
  otherTags: state.filter.otherTags,
  parkingTags: state.filter.parkingTags,
  propertyTags: state.filter.propertyTags,
  listingId: state.listing.listingId
});

SearchResultScreen.propTypes = {
  dispatch: PropTypes.func.isRequired,
  laundryTags: PropTypes.object,
  listings: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  location: PropTypes.string.isRequired,
  navigation: PropTypes.object.isRequired,
  numBathrooms: PropTypes.number,
  numBedrooms: PropTypes.number,
  occupantTags: PropTypes.object,
  otherTags: PropTypes.object,
  parkingTags: PropTypes.object,
  propertyTags: PropTypes.object
};

SearchResultScreen.defaultPropTypes = {
  laundryTags: {},
  numBathrooms: 0,
  numBedrooms: 0,
  occupantTags: {},
  otherTags: {},
  parkingTags: {},
  propertyTags: {}
};
export default connect(mapStateToProps)(
  SearchResultScreen
);
