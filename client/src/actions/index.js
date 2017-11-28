import axios from 'axios';
import {
  AUTH_USER,
  AUTH_ERROR,
  FETCH_USER
} from './types';

const ROOT_URL = 'http://127.0.01:3030'

export function signin({email, password}) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/login`, { email, password })
      .then(({data}) => {
        console.log(data);
        if (data.authenticated) {
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

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

export function fetchUser({id}) {
  return function(dispatch) {
    axios.get(`${ROOT_URL}/users/${id}`)
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