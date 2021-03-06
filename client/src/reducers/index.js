import { combineReducers } from 'redux';
import auth from './auth';
import user from './user';
import events from './events';

const rootReducer = combineReducers({
  auth,
  user,
  events
});

export default rootReducer;