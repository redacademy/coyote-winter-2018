import React, { Component } from 'react';
import store from './redux/store';
import { Provider } from 'react-redux';

import RootNavigation from './navigation/Tabs/TabNav';

import Listing from './screens/Listing';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootNavigation />
      </Provider>
    );
  }
}
