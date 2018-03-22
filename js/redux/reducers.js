import { combineReducers } from 'redux';
import authReducer from './modules/auth';
import signupReducer from './modules/signup';
import listingReducer from './modules/listing';
import favesReducer from './modules/faves';
import filterReducer from './modules/filter';
import applicationReducer from './modules/application';
import loginReducer from './modules/login';
import listingsReducer from './modules/listings';
import userReducer from './modules/user';
import landlordReducer from './modules/landlord';

const rootReducer = combineReducers({
  auth: authReducer,
  listing: listingReducer,
  signup: signupReducer,
  listings: listingsReducer,
  faves: favesReducer,
  filter: filterReducer,
  application: applicationReducer,
  login: loginReducer,
  user: userReducer,
  landlord: landlordReducer
});
export default rootReducer;
