import React, { Component } from "react";
import PropTypes from "prop-types";

import { View, Text } from "react-native";

export default class ApplicationContainer extends Component {
  static propTypes = {
    prop: PropTypes
  };
  static routes = {
    navigationBar: {
      title: "About"
    }
  };

  render() {
    return (
      <View>
        <Text>profile</Text>
      </View>
    );
  }
}
