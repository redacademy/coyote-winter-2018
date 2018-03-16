import { NavigationActions } from "@expo/ex-navigation";
import Store from "../redux/store";
import Router from "./routes";

export const goToSignUp = () => {
  Store.dispatch(NavigationActions.push(Router.getRoute("signUp")));
};
