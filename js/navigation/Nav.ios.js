import React, { Component } from "react";

import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem
} from "@expo/ex-navigation";

import {
  profileIcon
  // heartIcon,
  // searchIcon,
  // homeIcon
} from "../config/iconType";

import Router from "./Routes";

class Nav extends Component {
  render() {
    return (
      <TabNavigation
        id="main"
        navigatorUID="main"
        initialTab="profile"
      >
        <TabItem
          id="profile"
          title="Profile"
          renderTitle={this.renderTitle}
          renderIcon={isSelected =>
            this.renderIcon(isSelected, profileIcon)
          }
        >
          <StackNavigation
            id="schedule"
            navigatorUID="schedule"
            initialRoute={Router.getRoute("schedule")}
          />
        </TabItem>
        <TabItem>
          <StackNavigation
            id="schedule"
            navigatorUID="schedule"
            initialRoute={Router.getRoute("schedule")}
          />
        </TabItem>
        <TabItem>
          <StackNavigation />
        </TabItem>
        <TabItem>
          <StackNavigation />
        </TabItem>
      </TabNavigation>
    );
  }
}

export default Nav;
