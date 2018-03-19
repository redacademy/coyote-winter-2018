import React, { Component } from "react";

import { View, Text, Button } from "react-native";

class ListingScreen extends Component {
  static navigationOptions = {
    headerMode: "none"
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text style={{ fontSize: 30 }}>
          This is a modal!
        </Text>
        <Button
          onPress={() =>
            this.props.navigation.goBack()
          }
          title="Dismiss"
        />
      </View>
    );
  }
}

export default ListingScreen;
