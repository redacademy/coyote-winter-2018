import React, { Component } from 'react';
import Store from './redux/store';
import { Provider } from 'react-redux';
import FilteringScreen from './screens/Filtering';

export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <FilteringScreen />
      </Provider>
    );
  }
}
