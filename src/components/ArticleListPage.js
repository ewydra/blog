import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isLoading, getArticlesSelector } from '../selectors/articles';
import { fetchArticles } from '../actions/articles';
import { ArticleList } from './ArticleList';
import ErrorBoundary from './utils/ErrorBoundary';
import Clock from './Clock';

class ArticleListPage extends Component {
  componentDidMount() {
    this.props.fetchArticles();
  }

  render() {
    const { articles, isLoading } = this.props;
    return (
      <ErrorBoundary>
        <ArticleList articles={articles} isLoading={isLoading} />
        <Clock />
      </ErrorBoundary>
    )
  }
}

const mapStateToProps = (state) => ({
  articles: getArticlesSelector(state),
  isLoading: isLoading(state),
});

const mapDispatchToProps = {
  fetchArticles
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleListPage);
