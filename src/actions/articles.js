import * as types from '../types/articles';

export const addArticle = payload => ({
  type: types.ADD_ARTICLE,
  payload: payload
});
