import React, {Component} from 'react';
import { connect } from 'react-redux';
import ArticleListItem from './ArticleListItem';
import { getArticles } from '../selectors/articles';

export class ArticleList extends Component {
  listArticles = () => 
    this.props.articles.map(article => {
      return <ArticleListItem key={article.id} article={article} />
    });

  render() {
    return (
      <ul className="Article-list">
        {this.listArticles()}
      </ul>
    )
  }
}

const mapStateToProps = (state) => ({
  articles: getArticles(state),
});

export default connect(mapStateToProps)(ArticleList);
