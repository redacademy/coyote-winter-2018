import React, { Component } from 'react';
import { View } from 'react-native';

import SignUpName from './screens/SignUpName';
import { Provider } from 'react-redux';
import Store from './redux/store';

export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <View>
          <SignUpName />
        </View>
      </Provider>
    );
  }
}
