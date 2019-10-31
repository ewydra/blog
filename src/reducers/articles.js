import * as types from '../types/articles';

const initialState = { byId: {}, allIds: [], loading: false, error: null };

const normalizeData = data => data.reduce((previous, current) => {
  const result = addNormalizedData(previous, current);
  return {...result, loading: false, error: null};
}, initialState);

const addNormalizedData = (result, data) => ({
  ...result, 
    byId: {...result.byId, [data.id]: data},
    allIds: [...result.allIds, data.id]
})

export default function getArticles(state = initialState, action) {
  switch (action.type) {
    case types.GET_ARTICLES:
    case types.ADD_ARTICLE: 
      return {...state, loading: true};
    case types.GET_ARTICLES_SUCCESS: 
      return normalizeData(action.payload);
    case types.ADD_ARTICLE_SUCCESS: 
      const data = addNormalizedData(state, action.payload);
      return {...data, loading: false, error: null};
    case types.GET_ARTICLES_ERROR:
    case types.ADD_ARTICLE_ERROR: 
      return {...state, loading: false, error: action.payload};
    default:
      return state;
  }
}
