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
  static propTypes = {
    navigation: PropTypes.object
  };
  onSearch = () => {
    const newLocation = this.state.searchLocation;
    console.log(newLocation);
    this.props.navigation.navigate('App', {
      location: this.state.searchLocation
    });
    console.log(this.props.navigation.state);
  };
  onLocationSearchChange = newLocation => {
    this.setState({ searchLocation: newLocation });
    console.log(this.state.searchLocation);
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

export default LocationSearchScreen;
