import React, { Component } from "react";
import PropTypes from "prop-types";

import { View, Text } from "react-native";

export default class SearchResultContainer extends Component {
  static propTypes = {
    prop: PropTypes
  };
  static routes = {
    navigationBar: {
      title: "Search"
    }
  };

  render() {
    return (
      <View>
        <Text>Search</Text>
      </View>
    );
  }
}
