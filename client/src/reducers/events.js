import {
  FETCH_EVENTS
} from '../actions/types';

const DEFAULTS = {};
export default function (state=DEFAULTS, action) {
  switch(action.type) {
    case FETCH_EVENTS:
      return { ...state,
        events: action.payload};
    default:
      return state;
  }
}