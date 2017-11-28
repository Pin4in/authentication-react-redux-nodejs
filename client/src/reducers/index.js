import { combineReducers } from 'redux';
import authReducer from './auth_reducer';
import userReducer from './user';

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer
});

export default rootReducer;