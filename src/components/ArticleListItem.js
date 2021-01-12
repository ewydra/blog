import React from "react";
import { Link } from "react-router-dom";

const ArticleListItem = ({ article: { id, title, date, abstract } }) => (
  <li className="article-list-item">
    <Link className="article-list-item__link" to={{ pathname: `/article/${id}` }}>
      <div className="article-list-item__header">
        <div className="article-list-item__title">{title}</div>
        <div className="article-list-item__date">{date}</div>
      </div>
      <div className="article-list-item__abstract">
        {abstract}
      </div>
    </Link>
  </li>
);

export default ArticleListItem;
