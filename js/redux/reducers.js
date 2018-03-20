import { combineReducers } from "redux";
import authReducer from "./modules/auth";
import signupReducer from "./modules/signup";

const rootReducer = combineReducers({
  auth: authReducer,
  signup: signupReducer
});

export default rootReducer;
