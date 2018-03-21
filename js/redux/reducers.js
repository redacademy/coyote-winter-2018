import { combineReducers } from 'redux';
import authReducer from './modules/auth';
import listingsReducer from './modules/listings';
import favesReducer from './modules/faves';
import filterReducer from './modules/filter';
import signupReducer from './modules/signup';
import applicationReducer from './modules/application';
import loginReducer from './modules/login';

const rootReducer = combineReducers({
  auth: authReducer,
  listings: listingsReducer,
  faves: favesReducer,
  filter: filterReducer,
  signup: signupReducer,
  application: applicationReducer,
  login: loginReducer
});
export default rootReducer;
