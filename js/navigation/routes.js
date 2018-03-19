import { createRouter } from "@expo/ex-navigation";

import Nav from "./Nav";

import ApplicationScreen from "../screens/Application/";
import ConfirmationScreen from "../screens/Confirmation";
import FavouriteScreen from "../screens/Favourite";
import ListingScreen from "../screens/Listing";
import LocationSearchScreen from "../screens/Listing";
import LoginScreen from "../screens/Login";
import ProfileScreen from "../screens/Profile";
import SearchResultScreen from "../screens/SearchResult";
import SignUpScreen from "../screens/SignUp";

const Router = createRouter(() => ({
  layout: () => Nav,
  // application: () => ApplicationScreen,
  // confirmation: () => ConfirmationScreen,
  favourites: () => FavouriteScreen,
  // listing: () => ListingScreen,
  // locationsearch: () => LocationSearchScreen,
  // login: () => LoginScreen,
  // messages: () => MessagesScreen
  profile: () => ProfileScreen,
  searchresult: () => SearchResultScreen
  // signup: () => SignUpScreen
}));

export default Router;
