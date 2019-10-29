import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { isLoading, getArticlesSelector } from '../selectors/articles';
import { fetchArticles } from '../actions/articles';
import { ArticleList } from './ArticleList';

const ArticleListPage = ({ articles, isLoading, fetchArticles }) => {
  useEffect(() => {
    fetchArticles()
  }, [fetchArticles]);

  return (
    <ArticleList articles={articles} isLoading={isLoading} />
  )
}

const mapStateToProps = (state) => ({
  articles: getArticlesSelector(state),
  isLoading: isLoading(state),
});

const mapDispatchToProps = {
  fetchArticles
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleListPage);
