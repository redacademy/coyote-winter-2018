import { combineReducers } from 'redux';
import authReducer from './modules/auth';
import listingsReducer from './modules/listings';
import favesReducer from './modules/faves';

const rootReducer = combineReducers({
  auth: authReducer,
  listings: listingsReducer,
  faves: favesReducer
});

export default rootReducer;
