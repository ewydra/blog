import * as types from '../types/articles';

const initialState = { data: [], loading: false, error: null };

export default function articles(state = initialState, action) {
  switch (action.type) {
    case types.GET_ARTICLES:
    case types.ADD_ARTICLE: 
      return {...state, loading: true};
    case types.GET_ARTICLES_SUCCESS: 
      return {...state, loading: false, data: action.payload};
    case types.ADD_ARTICLE_SUCCESS: 
      return {...state, loading: false, data: [...state.data, action.payload]};
    case types.GET_ARTICLES_ERROR:
    case types.ADD_ARTICLE_ERROR: 
      return {...state, loading: false, error: action.payload};
    default:
      return state;
  }
}
