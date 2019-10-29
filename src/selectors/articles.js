import { createSelector } from 'reselect'

export const getArticleById = (state, id) => state.articles.byId[id];

const getArticles = state => state.articles.byId;

export const isLoading = state => state.articles.loading;

export const getArticlesSelector = createSelector(
  getArticles,
  (articles) => articles
)

export const getArticleByIdSelector = () => createSelector(
  getArticleById,
  (article) => article
)
