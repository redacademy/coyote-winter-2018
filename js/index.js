import React, { Component } from 'react';
import Store from './redux/store';
import { Provider } from 'react-redux';

import SignUpName from './screens/SignUpName';

export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <SignUpName />
      </Provider>
    );
  }
}
