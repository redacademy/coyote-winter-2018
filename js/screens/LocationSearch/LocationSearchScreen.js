import React, { Component } from 'react';
import LocationSearch from './LocationSearch';
import PropTypes from 'prop-types';
import { getCities } from '../../config/helpers';
import { connect } from 'react-redux';
import { updateLocation } from '../../redux/modules/filter';
import { updateSuggestions } from '../../redux//modules/autocomplete';

class LocationSearchScreen extends Component {
<<<<<<< HEAD
=======
  async componentWillMount() {
    const { dispatch } = this.props;

    const suggestions = new Set();
    // get autocomplete possibilities from the database
    await getCities().then(data =>
      data.forEach(d => suggestions.add(d.data().city))
    );

    dispatch(updateSuggestions(Array.from(suggestions)));
  }

  onSearch = () => {
    const newLocation = this.props.searchLocation;
    this.props.navigation.navigate('App', {
      location: newLocation
    });
  };
>>>>>>> e303849... added autocomplete and styling to location search screen; loader
  onLocationSearchChange = newLocation => {
    this.props.dispatch(updateLocation(newLocation));
  };

  render() {
    return (
      <LocationSearch
        onLocationSearchChange={this.onLocationSearchChange}
        onSearch={this.onSearch}
        navigation={this.props.navigation}
        searchLocation={this.props.searchLocation}
      />
    );
  }
}

LocationSearchScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  searchLocation: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  searchLocation: state.filter.location
});

export default connect(mapStateToProps)(LocationSearchScreen);
