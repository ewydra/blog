import { createSelector } from 'reselect'

export const getArticleById = (state, id) => state.articles.byId[id];

export const getArticleWithComments = state => state.article;

const getArticles = state => state.articles.byId;

const getArticleIds = state => state.articles.allIds;

export const isLoading = state => state.articles.loading;

export const getArticlesSelector = createSelector(
  getArticles,
  getArticleIds,
  (articles, articleIds) => articleIds.map(articleId => articles[articleId])
)
