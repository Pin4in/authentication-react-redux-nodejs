import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR
} from '../actions/types';

const DEFAULTS = {
  authenticated: false,
  error: ''
}
export default function(state = DEFAULTS, action) {
  switch(action.type) {
    case AUTH_USER:
      return { ...state, error: '', authenticated: true };
    case UNAUTH_USER:
      return { ...state, error: '', authenticated: false};
    case AUTH_ERROR:
      return { ...state, error: action.payload}
    default:
      return state;
  }
}