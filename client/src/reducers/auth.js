import {
  AUTH_USER,
  AUTH_ERROR
} from '../actions/types';

const DEFAULTS = {
  authenticated: false,
  error: ''
}
export default function(state = DEFAULTS, action) {
  switch(action.type) {
    case AUTH_USER:
      console.log('user authenticated!');
      return { ...state, error: '', authenticated: true };
    case AUTH_ERROR:
      return { ...state, error: action.payload}
    default:
      return state;
  }
}