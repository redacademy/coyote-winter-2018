import { Platform } from "react-native";

export const addIcon = Platform.select({
  ios: "ios-add",
  android: "md-add"
});

export const closeIcon = Platform.select({
  ios: "ios-close",
  android: "md-close"
});

export const profileIcon = Platform.select({
  ios: "ios-profile-outline",
  android: "md-profile"
});

export const searchIcon = Platform.select({
  ios: "ios-search-outline",
  android: "md-search"
});

export const subtractIcon = Platform.select({
  ios: "ios-subtract",
  android: "md-subtract"
});

export const homeIcon = Platform.select({
  ios: "ios-home-outline",
  android: "md-home"
});

export const heartIcon = Platform.select({
  ios: "ios-heart-outline",
  android: "md-heart"
});

export const chatIcon = Platform.select({
  ios: "ios-chatbubbles-outline",
  android: "md-chatbubbles"
});
