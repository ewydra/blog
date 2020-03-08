import * as types from '../types/articles';

const initialState = {article: null, isLoading: false, error: null};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_ARTICLE:
      return {...state, isLoading: true, error: null};
    case types.GET_ARTICLE_SUCCESS: 
      return {...state, article: action.payload, isLoading: false};
    case types.GET_ARTICLE_ERROR:
      return {...state, isLoading: false, error: action.payload};
    default:
      return state;
  }
}
