import React, { Component } from 'react';
import Store from './redux/store';
import { Provider } from 'react-redux';

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
