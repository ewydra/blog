import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getArticles, isLoading } from '../selectors/articles';
import { fetchArticles } from '../actions/articles';
import ArticleListItem from './ArticleListItem';
import Spinner from './utils/Spinner';

export class ArticleList extends Component {
  componentDidMount() {
    this.props.fetchArticles();
  }

  listArticles = () => 
    this.props.articles.map(article => {
      return <ArticleListItem key={article.id} article={article} />
    });

  render() {
    if (this.props.isLoading) return <Spinner />
    return ( 
      <ul className="Article-list">
        {this.listArticles()}
      </ul>
    )
  }
}

const mapStateToProps = (state) => ({
  articles: getArticles(state),
  isLoading: isLoading(state),
});

const mapDispatchToProps = {
  fetchArticles
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);
