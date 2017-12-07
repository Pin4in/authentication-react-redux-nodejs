import axios from 'axios';
import config from '../config.js';
import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  FETCH_USER,
  FETCH_EVENTS
} from './types';

export function signin({email, password}) {
  return function(dispatch) {
    axios.post(`${config.api}/login`, { email, password })
      .then(({data}) => {
        console.log('user', data);
        if (data.authenticated) {
          localStorage.setItem('token', data.token);
          dispatch({type: AUTH_USER});
        } else {
          dispatch(authError(data.message));
        }
      })
      .catch(err => {
        dispatch(authError(err));
      });
  }
}

export function signOut() {
  return function(dispatch) {
    axios.get(`${config.api}/logout`)
      .then(({data}) => {
        if(data.authenticated) {
          return dispatch(authError('unable to signout'));
        }
        localStorage.removeItem('token');
        dispatch({type: UNAUTH_USER});
      })
      .catch(err => {
        dispatch(authError(err));
      })
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

export function fetchUser({id}) {
  return function(dispatch) {
    axios.get(`${config.api}/users/${id}`)
      .then(({data}) => {
        dispatch({
          type: FETCH_USER,
          payload: data
        });
      })
      .catch(err => {
        console.log('err', err)
      });

  }
}

export function fetchEvents({id}) {
  return function(dispatch) {
    axios.get(`${config.api}/events`,{
        headers: { Authorization: localStorage.getItem('token') }
      })
      .then(({data}) => {
        dispatch({
          type: FETCH_EVENTS,
          payload: data
        });
      })
      .catch(err => {
        console.log('err', err);
      })
  }
}