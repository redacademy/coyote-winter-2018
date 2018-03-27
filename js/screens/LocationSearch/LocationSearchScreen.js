import React, { Component } from 'react';
import LocationSearch from './LocationSearch';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateLocation } from '../../redux/modules/filter';

class LocationSearchScreen extends Component {
  onLocationSearchChange = newLocation => {
    this.props.dispatch(updateLocation(newLocation));
  };

  render() {
    return (
      <LocationSearch
        onLocationSearchChange={
          this.onLocationSearchChange
        }
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

export default connect(mapStateToProps)(
  LocationSearchScreen
);
