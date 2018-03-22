import React, { Component } from 'react';
import Store from './redux/store';
import { Provider } from 'react-redux';
import FilteringScreen from './screens/Filtering';
import LocationSearch from './screens/LocationSearch';

export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <LocationSearch />
      </Provider>
    );
  }
}
