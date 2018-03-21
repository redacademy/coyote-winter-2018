import { combineReducers } from 'redux';
import authReducer from './modules/auth';
import listingsReducer from './modules/listings';
import favesReducer from './modules/faves';
import filterReducer from './modules/filter';
import signUpReducer from './modules/signup';

const rootReducer = combineReducers({
  auth: authReducer,
  listings: listingsReducer,
  faves: favesReducer,
  filter: filterReducer,
  signup: signUpReducer
});
export default rootReducer;
