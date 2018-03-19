import React, { Component } from "react";
import LocationSearch from "./LocationSearch";
import PropTypes from "prop-types";

class LocationSearchScreen extends Component {
  constructor() {
    super();
    this.state = {
      searchLocation: ""
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
  static route = {
    navigationBar: {
      title: "Location",
      tintColor: "black"
    }
  };
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

export default LocationSearchScreen;
