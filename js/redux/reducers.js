import { combineReducers } from 'redux';
import authReducer from './modules/auth';
import listingsReducer from './modules/listings';
import favesReducer from './modules/faves';
import filterReducer from './modules/filter';

const rootReducer = combineReducers({
  auth: authReducer,
  listings: listingsReducer,
  faves: favesReducer,
  filter: filterReducer
});
export default rootReducer;
