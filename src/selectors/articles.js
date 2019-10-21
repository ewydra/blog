export const selectArticleById = (state, id) => {
  return state.articles.data.find(article => article.id === Number(id));
}

export const getArticles = state => state.articles.data;

export const isLoading = state => state.articles.loading;
