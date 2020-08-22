import React, { useEffect, useMemo } from "react";
import axios from "axios";
import ErrorBoundary from "./utils/ErrorBoundary";
import CommentList from "./CommentList";
import Spinner from "./utils/Spinner";
import { fetchArticleWithComments } from "../actions/articles";
import { useDispatch, useSelector } from "react-redux";
import { getArticleWithComments } from "../selectors/articles";
import MouseTracker from "./MouseTracker";

export const ArticleDetails = props => {
  const dispatch = useDispatch();
  const articleWithComments = useSelector(getArticleWithComments);
  const { isLoading, article } = articleWithComments;
  const articleId = props.match.params.id;

  const axiosCancelSource = useMemo(() => axios.CancelToken.source(), []);

  useEffect(() => {
    dispatch(fetchArticleWithComments(articleId, axiosCancelSource.token));
    return () => {
      axiosCancelSource.cancel();
    }
  }, [dispatch, articleId, axiosCancelSource])

  if (isLoading || !article) {
    return <Spinner />
  }

  return (
    <ErrorBoundary>
      <MouseTracker
        render={({ x, y }) => (
          <article className="article">
            <header className="article__title">{article.title}</header>
            <section className="article__content">{article.text}</section>
            <footer className="article__footer">Created: {article.date}</footer>
            <CommentList commentList={article.comments} />
            <div>Mouse position: {x}, {y}</div>
          </article>
        )}
      />
    </ErrorBoundary>
  )
}

export default ArticleDetails;
