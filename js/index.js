import React, { Component } from 'react';
import store from './redux/store';
import { Provider } from 'react-redux';
import Listing from './screens/Listing';
import RootNavigation from './navigation/Tabs/TabNav';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootNavigation />
      </Provider>
    );
  }
}
