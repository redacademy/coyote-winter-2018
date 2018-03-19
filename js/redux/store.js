import { createNavigationEnabledStore } from "@expo/ex-navigation";
import {
  compose,
  createStore,
  applyMiddleware
} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
  compose;

const createStoreWithNavigation = createNavigationEnabledStore(
  {
    createStore,
    navigationStateKey: "navigation"
  }
); // as per the ExNavigation docs...
const store = createStoreWithNavigation(
  rootReducer,
  {}, // initial state
  composeEnhancers(applyMiddleware(thunk)) // enhancers
);
export default store;
