import React, { Component } from 'react';
import LocationSearch from './LocationSearch';
import PropTypes from 'prop-types';

class LocationSearchScreen extends Component {
  constructor() {
    super();
    this.state = {
      searchLocation: ''
    };
  }

  onSearch = () => {
    const newLocation = this.state.searchLocation;
    this.props.navigation.navigate('App', {
      location: newLocation
    });
  };
  onLocationSearchChange = newLocation => {
    this.setState({ searchLocation: newLocation });
  };

  render() {
    return (
      <LocationSearch
        onLocationSearchChange={
          this.onLocationSearchChange
        }
        onSearch={this.onSearch}
        navigation={this.props.navigation}
        searchLocation={this.state.searchLocation}
      />
    );
  }
}

LocationSearchScreen.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default LocationSearchScreen;
