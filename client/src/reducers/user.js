import {
  FETCH_USER
} from '../actions/types';

const DEFAULTS = {};
export default function (state=DEFAULTS, action) {
  switch(action.type) {
    case FETCH_USER:
      return { ...state, ...action.payload};
    default:
      return state;
  }
}