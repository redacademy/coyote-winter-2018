import React, { Component } from "react";
import Profile from "./Profile";

class ProfileContainer extends Component {
  static route = {
    navigationBar: {
      title: "Profile"
    }
  };

  render() {
    return <Profile />;
  }
}

export default ProfileContainer;
