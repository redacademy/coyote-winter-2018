import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { StackNavigator } from "react-navigation";
import PropTypes from "prop-types";

class ApplicationContainer extends Component {
  static navigationOptions = {
    title: "Application"
  };
  static propTypes = {
    navigation: PropTypes.object,
    navigate: PropTypes.func
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text>profile</Text>
        <Button
          title="Go to details"
          onPress={() =>
            navigate("Favourites", {
              itemId: 86,
              otherParam: "anything you want here"
            })
          }
        />
      </View>
    );
  }
}

export default ApplicationContainer;
