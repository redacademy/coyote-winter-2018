import React, { Component } from 'react';
import Store from './redux/store';
import { Provider } from 'react-redux';
import Favourite from './screens/Favourite';

export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <Favourite />
      </Provider>
    );
  }
}
