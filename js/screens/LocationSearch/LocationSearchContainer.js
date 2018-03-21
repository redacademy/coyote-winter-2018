import React, { Component } from 'react';
import LocationSearch from './LocationSearch';
import PropTypes from 'prop-types';

class LocationSearchContainer extends Component {
  constructor() {
    super();
    this.state = {
      searchLocation: ''
    };
    this.onLocationSearchChange = this.onLocationSearchChange.bind(
      this
    );
    this.onSearch = this.onSearch.bind(this);
  }
  onSearch() {
    // TODO: route location in state to the next screen
  }
  onLocationSearchChange(newLocation) {
    this.setState({ searchLocation: newLocation });
  }

  render() {
    return (
      <LocationSearch
        onLocationSearchChange={
          this.onLocationSearchChange
        }
        onSearch={this.onSearch}
      />
    );
  }
}

export default LocationSearchContainer;
