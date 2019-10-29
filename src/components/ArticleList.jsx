import React, {Component} from 'react';
import ArticleListItem from './ArticleListItem';
import withLoading from './utils/withLoading';

export class ArticleList extends Component {
  listArticles = () => (
    this.props.articles.map((article) => {
      return <ArticleListItem key={article.id} article={article} />
    })
  )

  render() {
    return (
      <ul className="Article-list">
        {this.listArticles()}
      </ul>
    )
  }
}

export default withLoading(ArticleList);
