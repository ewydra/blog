import * as types from '../types/users';
import axios from '../utils/axios';
import history from "../utils/history";

export const registerUser = (payload) => async dispatch => {
  try {
    dispatch(authenticate());
    const response = await axios.post('/register', payload);
    localStorage.setItem("token", response.data?.accessToken);
    history.push("/");
    dispatch(authenticateSuccess());
  } catch (error) {
    dispatch(authenticateError(error));
  }
}

export const loginUser = (payload) => async dispatch => {
  try {
    dispatch(authenticate());
    const response = await axios.post('/login', payload);
    localStorage.setItem("token", response.data?.accessToken);
    history.push("/");
    dispatch(authenticateSuccess());
  } catch (error) {
    dispatch(authenticateError(error));
  }
}

export const authenticate = () => ({ type: types.AUTHENTICATE });
export const authenticateSuccess = () => ({ type: types.AUTHENTICATE_SUCCESS });
export const authenticateError = payload => ({ type: types.AUTHENTICATE_ERROR, payload });

export const setLoggedIn = isLoggedIn => ({ type: types.SET_LOGGED_IN, payload: isLoggedIn})
