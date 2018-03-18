import React, { Component } from "react";
import PropTypes from "prop-types";

import { View, Text, Button } from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";
import { heartIcon } from "../../config/iconType";

class FavouriteScreen extends Component {
  static propTypes = {
    params: PropTypes.object,
    navigation: PropTypes.object,
    navigate: PropTypes.func
  };

  static navigationOptions = {
    title: "Favourites",
    tabBarLabel: "Faves",
    tabBarIcon: ({ tintColor, focused }) => (
      <Ionicons
        name={
          focused ? heartIcon : `${heartIcon}-outline`
        }
        size={26}
        style={{ color: tintColor }}
      />
    )
  };

  render() {
    /* 2. Read the params from the navigation state */
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

        <Button
          title="Go to Details... again"
          onPress={() => navigate("Profile")}
        />
        <Button
          title="Go back"
          onPress={() => goBack()}
        />
      </View>
    );
  }
}

export default FavouriteScreen;
