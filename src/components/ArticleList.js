import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { getUserName, isLoggedIn } from "../selectors/users";
import ArticleListItem from "./ArticleListItem";
import withLoading from "./utils/withLoading";

export class ArticleList extends PureComponent {
  listArticles = () =>
    this.props.articles.map((article) => {
      return <ArticleListItem key={article.id} article={article} />;
    });

  render() {
    const { userName, isLoggedIn } = this.props;
    return (
      <>
        {isLoggedIn && (
          <h1 className="title">{`Hello ${userName || "User"}!`}</h1>
        )}
        <ul className="article-list">{this.listArticles()}</ul>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  userName: getUserName(state),
  isLoggedIn: isLoggedIn(state),
});

export default compose(withLoading, connect(mapStateToProps))(ArticleList);
