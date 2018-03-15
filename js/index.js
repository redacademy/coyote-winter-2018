/**
 * Coyote React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
// import { Text, View } from "react-native";
import Login from "./screens/Login";
import { Provider } from "react-redux";
import Store from "./redux/store";

export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <Login />
      </Provider>
    );
  }
}
