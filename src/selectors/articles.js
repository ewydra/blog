export const selectArticleById = (state, id) => {
  return state.articles.find(article => article.id === Number(id));
}

export const getArticles = state => state.articles;
