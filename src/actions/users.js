import jwt from "jsonwebtoken";
import * as types from "../types/users";
import axios from "../utils/axios";
import history from "../utils/history";

export const registerUser = (payload) => async (dispatch) => {
  try {
    dispatch(authenticate());
    const response = await axios.post("/register", payload);
    localStorage.setItem("token", response.data?.accessToken);
    localStorage.setItem("auth_method", "local");
    history.push("/");
    dispatch(authenticateSuccess(payload));
  } catch (error) {
    dispatch(authenticateError(error));
  }
};

export const loginUser = (payload) => async (dispatch) => {
  try {
    dispatch(authenticate());
    const loginResponse = await axios.post("/login", payload);
    const accessToken = loginResponse.data?.accessToken;
    const { sub } = jwt.decode(accessToken);
    localStorage.setItem("token", accessToken);
    localStorage.setItem("auth_method", "local");
    const userResponse = await axios.get(`/users/${sub}`);
    history.push("/");
    dispatch(authenticateSuccess(userResponse.data));
  } catch (error) {
    console.log(error);
    dispatch(authenticateError(error));
  }
};

export const fetchUserProfile = (token, authMethod) => async (dispatch) => {
  try {
    dispatch(getUserProfile());
    let userProfile = {};
    if (authMethod === "google") {
      const { name } = jwt.decode(token);
      userProfile = { username: name };
    } else {
      const { sub } = jwt.decode(token);
      const userResponse = await axios.get(`/users/${sub}`);
      userProfile = userResponse.data;
    }
    dispatch(getUserProfileSuccess(userProfile));
  } catch (error) {
    console.log(error);
  }
};

export const fetchUserList = () => async (dispatch) => {
  try {
    dispatch(getUserList());
    const response = await axios.get("/users");
    dispatch(getUserListSuccess(response.data));
  } catch (error) {
    dispatch(getUserListError(error));
  }
};

export const authenticate = () => ({ type: types.AUTHENTICATE });
export const authenticateSuccess = (payload) => ({
  type: types.AUTHENTICATE_SUCCESS,
  payload,
});
export const authenticateError = (payload) => ({
  type: types.AUTHENTICATE_ERROR,
  payload,
});

export const getUserProfile = () => ({ type: types.GET_USER_PROFILE });
export const getUserProfileSuccess = (payload) => ({
  type: types.GET_USER_PROFILE_SUCCESS,
  payload,
});

export const setLoggedIn = (isLoggedIn) => ({
  type: types.SET_LOGGED_IN,
  payload: isLoggedIn,
});
export const setUserName = (userName) => ({
  type: types.SET_USER_NAME,
  payload: userName,
});

export const getUserList = () => ({ type: types.GET_USER_LIST });
export const getUserListSuccess = (payload) => ({
  type: types.GET_USER_LIST_SUCCESS,
  payload,
});
export const getUserListError = (payload) => ({
  type: types.GET_USER_LIST_ERROR,
  payload,
});
