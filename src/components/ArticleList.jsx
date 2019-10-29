import React from 'react';
import ArticleListItem from './ArticleListItem';
import withLoading from './utils/withLoading';

export const ArticleList = ({ articles }) => {
  const listArticles = () => 
    Object.entries(articles).map(([key, val]) => {
      return <ArticleListItem key={key} article={val} />
    })

    return (
      <ul className="Article-list">
        {listArticles()}
      </ul>
    )
}

export default withLoading(ArticleList);
