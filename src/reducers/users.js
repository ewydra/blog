import * as types from "../types/users";

const initialState = {
  isLoggedIn: false,
  loading: false,
  error: null,
  userProfile: {},
  users: {
    byId: {},
    allIds: [],
  },
};

const normalizeData = (data) =>
  data.reduce((previous, current) => {
    const result = addNormalizedData(previous, current);
    return { ...result };
  }, initialState.users);

const addNormalizedData = (result, data) => ({
  ...result,
  byId: { ...result.byId, [data.id]: data },
  allIds: [...result.allIds, data.id],
});

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.AUTHENTICATE:
    case types.GET_USER_LIST:
      return { ...state, loading: true, error: null };
    case types.AUTHENTICATE_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        loading: false,
        userProfile: { ...state.userProfile, ...action.payload },
      };
    case types.GET_USER_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        users: normalizeData(action.payload),
      };
    case types.AUTHENTICATE_ERROR:
    case types.GET_USER_LIST_ERROR:
      return { ...state, loading: false, error: action.payload };
    case types.GET_USER_PROFILE:
      return { ...state, error: null };
    case types.GET_USER_PROFILE_SUCCESS:
      return { ...state, userProfile: action.payload };
    case types.SET_LOGGED_IN:
      return { ...state, isLoggedIn: action.payload };
    case types.SET_USER_NAME:
      return {
        ...state,
        userProfile: { ...state.userProfile, username: action.payload },
      };
    default:
      return state;
  }
}
