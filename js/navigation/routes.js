import { createRouter } from "@expo/ex-navigation";

import Nav from "./Nav";

import ApplicationContainer from "../screens/Application/";
import ConfirmationContainer from "../screens/Confirmation";
import FavouriteContainer from "../screens/Favourite";
import ListingContainer from "../screens/Listing";
import LocationSearchContainer from "../screens/Listing";
import LoginContainer from "../screens/Login";
import ProfileContainer from "../screens/Profile";
import SearchResultContainer from "../screens/SearchResult";
import SignUpContainer from "../screens/SignUp";

const Router = createRouter(() => ({
  layout: () => Nav,
  application: () => ApplicationContainer,
  confirmation: () => ConfirmationContainer,
  favourite: () => FavouriteContainer,
  listing: () => ListingContainer,
  locationsearch: () => LocationSearchContainer,
  login: () => LoginContainer,
  profile: () => ProfileContainer,
  searchresult: () => SearchResultContainer,
  signup: () => SignUpContainer
}));

export default Router;
