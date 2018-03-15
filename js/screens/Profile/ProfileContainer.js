import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { StackNavigator } from "react-navigation";
import PropTypes from "prop-types";

class ProfileContainer extends Component {
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
          onPress={() => navigate("Favourites")}
        />
      </View>
    );
  }
}

export default ProfileContainer;

// export default StackNavigator({
//   Profile: {
//     screen: ProfileContainer
//   }
// });
