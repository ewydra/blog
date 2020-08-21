import * as types from '../types/articles';
import axios from '../utils/axios';

export const fetchArticles = () => async dispatch => {
  try {
    dispatch(getArticles());
    const response = await axios.get('/articles');
    dispatch(getArticlesSuccess(response.data));
  } catch (error) {
    dispatch(getArticlesError(error));
  }
}

export const createArticle = (payload, history) => async dispatch => {
  try {
    dispatch(addArticle());
    const response = await axios.post('/articles', payload);
    dispatch(addArticleSuccess(response.data));
    history.push(`/article/${response.data.id}`);
  } catch (error) {
    dispatch(addArticleError(error));
  }
}

// export const fetchArticleWithComments = (articleId, cancelToken) => async dispatch => {
//   try {
//     dispatch(getArticle());
//     const article = await axios.get(`/articles/${articleId}`, { cancelToken });
//     const comments = await axios.get(`/articles/${article.data.id}/comments`, { cancelToken });
//     const response = {...article.data, comments: comments.data}
//     dispatch(getArticleSuccess(response));
//   } catch (error) {
//     dispatch(getArticleError(error));
//   }
// }


export const fetchArticleWithComments = (articleId, cancelToken) => dispatch => {
  dispatch(getArticle());
  const fetchArticle = axios.get(`/articles/${articleId}`, { cancelToken });
  const fetchComments = axios.get(`/articles/${articleId}/comments`, { cancelToken });

  Promise.all([fetchArticle, fetchComments])
    .then(([article, comments]) => {
      const response = {...article.data, comments: comments.data}
      dispatch(getArticleSuccess(response));
    })
    .catch(error => {
      dispatch(getArticleError(error));
    })
}



export const getArticles = () => ({ type: types.GET_ARTICLES });
export const getArticlesSuccess = payload => ({ type: types.GET_ARTICLES_SUCCESS, payload });
export const getArticlesError = payload => ({ type: types.GET_ARTICLES_ERROR, payload });

export const addArticle = () => ({ type: types.ADD_ARTICLE });
export const addArticleSuccess = payload => ({ type: types.ADD_ARTICLE_SUCCESS, payload });
export const addArticleError = payload => ({ type: types.ADD_ARTICLE_ERROR, payload });

export const getArticle = () => ({ type: types.GET_ARTICLE });
export const getArticleSuccess = payload => ({ type: types.GET_ARTICLE_SUCCESS, payload });
export const getArticleError = payload => ({ type: types.GET_ARTICLE_ERROR, payload });
