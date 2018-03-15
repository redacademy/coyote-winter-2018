import {
  StackNavigator,
  TabNavigator
} from "react-navigation";

import ApplicationContainer from "../screens/Application/ApplicationContainer";
import ConfirmationContainer from "../screens/Application/ApplicationContainer";
import FavouriteContainer from "../screens/Favourite/FavouriteContainer";

export const RootStack = StackNavigator(
  {
    Application: {
      screen: ApplicationContainer
    },
    Confirmation: {
      screen: ConfirmationContainer
    },
    Favourites: {
      screen: FavouriteContainer
    }
  },
  {
    initialRouteName: "Application"
  }
);
