import React, { Component } from 'react';
import {
  ScrollView,
  Button,
  Text
} from 'react-native';
import { connect } from 'react-redux';
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
import SearchResult from './SearchResult';
import { colors } from '../../config/styles';

class SearchResultScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: `${navigation.state.params.location}`,
      headerLeft: (
        <Button
          onPress={() => navigation.navigate('Filter')}
          title="Filter"
          color={colors.MAIN}
        />
      )
    };
  };

  componentDidMount() {
    // perform query based on location passed via route
    // TODO: get value from route
    const location =
      'Vancouver'; /*hard-coded value to remove upon routing*/
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

  render() {
    const { listings, loading } = this.props;
    return loading ? (
      <Text>loadings</Text>
    ) : (
      <ScrollView>
        <SearchResult
          listings={listings}
          navigation={this.props.navigation}
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

SearchResultScreen.propTypes = {
  listings: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  location: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired
};
export default connect(mapStateToProps)(
  SearchResultScreen
);
