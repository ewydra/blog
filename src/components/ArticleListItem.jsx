import React from "react";
import { Link } from "react-router-dom";

const ArticleListItem = ({ article: { id, title, date, abstract } }) => (
  <li className="Article-list-item">
    <Link className="Article-list-item__link" to={`/article/${id}`}>
      <div className="Article-list-item__header">
        <div className="Article-list-item__title">{title}</div>
        <div className="Article-list-item__date">{date}</div>
      </div>
      <div className="Article-list-item__abstract">
        {abstract}
      </div>
    </Link>
  </li>
);

export default ArticleListItem;
