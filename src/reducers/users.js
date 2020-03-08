import * as types from '../types/users';

const initialState = { isLoggedIn: false, loading: false, error: null };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.AUTHENTICATE:
      return {...state, loading: true, error: null};
    case types.AUTHENTICATE_SUCCESS: 
      return {...state, isLoggedIn: true, loading: false}
    case types.AUTHENTICATE_ERROR:
      return {...state, loading: false, error: action.payload};
    case types.SET_LOGGED_IN: 
      return {...state, isLoggedIn: action.payload}
    default:
      return state;
  }
}
