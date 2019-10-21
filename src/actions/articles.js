import * as types from '../types/articles';
import axios from '../utils/axios';

export const fetchArticles = () => {
  return (dispatch) => {
    dispatch({type: types.GET_ARTICLES});
    axios.get('/articles')
      .then(response => {
        dispatch({ type: types.GET_ARTICLES_SUCCESS, payload: response.data });
      })
      .catch(error => {
        dispatch({ type: types.GET_ARTICLES_ERROR, payload: error });
      });
  }
}

export const addArticle = (payload, history) => {
  return (dispatch) => {
    dispatch({type: types.ADD_ARTICLE});
    axios.post('/articles', payload)
      .then(response => {
        dispatch({ type: types.ADD_ARTICLE_SUCCESS, payload: response.data });
        history.push(`/article/${response.data.id}`);
      })
      .catch(error => {
        dispatch({ type: types.ADD_ARTICLE_ERROR, payload: error });
      });
  }
}
