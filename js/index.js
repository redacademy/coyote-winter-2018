/**
 * Coyote React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
// import Login from './screens/Login';
import { Provider } from 'react-redux';
import Store from './redux/store';

import RootNavigation from './navigation/Tabs/TabNav';

export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <RootNavigation />
      </Provider>
    );
  }
}
