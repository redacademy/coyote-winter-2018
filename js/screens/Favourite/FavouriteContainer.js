import React, { Component } from "react";
import PropTypes from "prop-types";

import { View, Text, Button } from "react-native";

class FavouriteContainer extends Component {
  static navigationOptions = {
    title: "Favourites"
  };
  static propTypes = {
    params: PropTypes.object,
    navigation: PropTypes.object,
    navigate: PropTypes.func
  };

  render() {
    /* 2. Read the params from the navigation state */
    const { params } = this.props.navigation.state;
    const itemId = params ? params.itemId : null;
    const otherParam = params
      ? params.otherParam
      : null;
    const { navigate, goBack } = this.props.navigation;
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text>Faves</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>
          otherParam: {JSON.stringify(otherParam)}
        </Text>
        <Button
          title="Go to Details... again"
          onPress={() => navigate("Favourites")}
        />
        <Button
          title="Go back"
          onPress={() => goBack()}
        />
      </View>
    );
  }
}

export default FavouriteContainer;
