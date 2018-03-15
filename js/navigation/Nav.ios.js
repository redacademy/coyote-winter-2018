import React, { Component } from "react";

import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem
} from "@expo/ex-navigation";

import { Text } from "react-native";

import Icon from "react-native-vector-icons/Ionicons";

import {
  profileIcon,
  heartIcon,
  searchIcon
  // chatIcon
} from "../config/iconType";

import { colors } from "../config/styles";

import Router from "./routes";

class Nav extends Component {
  renderTitle(isSelected, title) {
    // selectively set title style (color) to be white if selected, otherwise grey
    return (
      <Text
        style={{
          color: isSelected
            ? colors.BACKGROUND
            : colors.GREY
        }}
      >
        {title}
      </Text>
    );
  }
  renderIcon(isSelected, iconName) {
    const iconSize = 30;

    return (
      <Icon
        name={iconName}
        size={iconSize}
        style={{
          color: isSelected
            ? colors.BACKGROUND
            : colors.GREY
        }}
      />
    );
  }
  static route = {
    navigationBar: {
      visible: false
    }
  };
  render() {
    return (
      <TabNavigation
        id="main"
        navigatorUID="main"
        initialTab="search"
      >
        {/* This is the search tab in navigation bar */}

        <TabItem
          id="search"
          title="Search"
          renderTitle={this.renderTitle}
          renderIcon={isSelected =>
            this.renderIcon(isSelected, searchIcon)
          }
        >
          <StackNavigation
            id="search"
            navigatorUID="search"
            initialRoute={Router.getRoute("search")}
          />
        </TabItem>

        {/* This is the favourite tab in navigation bar */}

        <TabItem
          id="favourites"
          title="Favourites"
          renderTitle={this.renderTitle}
          renderIcon={isSelected =>
            this.renderIcon(isSelected, heartIcon)
          }
        >
          <StackNavigation
            id="favourites"
            navigatorUID="favourites"
            initialRoute={Router.getRoute(
              "favourites"
            )}
          />
        </TabItem>

        {/* This is the chat tab in navigation bar */}

        {/* <TabItem
          id="chat"
          title="Messages"
          renderTitle={this.renderTitle}
          renderIcon={isSelected =>
            this.renderIcon(isSelected, chatIcon)
          }
        >
          <StackNavigation
            id="chat"
            navigatorUID="chat"
            initialRoute={Router.getRoute("chat")}
          />
        </TabItem> */}

        {/* This is the profile tab in navigation bar */}

        <TabItem
          id="profile"
          title="Profile"
          renderTitle={this.renderTitle}
          renderIcon={isSelected =>
            this.renderIcon(isSelected, profileIcon)
          }
        >
          <StackNavigation
            id="profile"
            navigatorUID="profile"
            initialRoute={Router.getRoute("profile")}
          />
        </TabItem>
      </TabNavigation>
    );
  }
}

export default Nav;
