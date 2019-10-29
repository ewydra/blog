import React, {Component} from 'react';
import ArticleListItem from './ArticleListItem';
import withLoading from './utils/withLoading';

export class ArticleList extends Component {
  listArticles = () => (
    Object.entries(this.props.articles).map(([key, val]) => {
      return <ArticleListItem key={key} article={val} />
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

ArticleList = withLoading(ArticleList)

export default ArticleList;
