import React, { Component } from 'react';
import Store from './redux/store';
import { Provider } from 'react-redux';
import ApplicationScreen from './screens/Application';

export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <ApplicationScreen />
      </Provider>
    );
  }
}
