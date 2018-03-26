import React, { Component } from 'react';
import { Text, ScrollView, Button } from 'react-native';
import { connect } from 'react-redux';
import SearchResult from './SearchResult';
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
import NoListingText from '../../components/NoListingText/';
import { getTrueParams, setParamToFalse } from '../../lib/filterHelpers';
import Card from '../../components/Card/';
import ChipGrid from '../../components/ChipGrid';
import { colors } from '../../config/styles';
import { styles } from './styles';

class SearchResultScreen extends Component {
  constructor(props) {
    super(props);

    this.closeChip = this.closeChip.bind(this);
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

  getChipLabels() {
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
  }

  closeChip(tagName) {
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
  }

  componentDidMount() {
    const { dispatch } = this.props;
    queryBasedOnFilters();
    dispatch(updateLoading(false));
  }

  render() {
    const { listings, loading } = this.props;
    const chips = this.getChipLabels();
    return loading ? (
      <Text>Loading</Text>
    ) : (
      <ScrollView style={styles.scroll}>
        <Card
          header={
            chips.length < 1 ? (
              <Text>No Filters Applied</Text>
            ) : (
              <ChipGrid tags={chips} action={chip => this.closeChip(chip)} />
            )
          }
          content={
            listings.length < 1 ? (
              <NoListingText text={'No Results Found - Adjust Your Search'} />
            ) : (
              <SearchResult
                listings={listings}
                navigation={this.props.navigation}
              />
            )
          }
          separator={true}
        />
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
  propertyTags: state.filter.propertyTags
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
export default connect(mapStateToProps)(SearchResultScreen);

{
  /* <View>{chips.map(chip => <Chip key={chip} label={chip} />)}</View> */
}
