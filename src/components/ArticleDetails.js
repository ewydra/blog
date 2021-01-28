import React, { useCallback, useEffect, useMemo } from "react";
import axios from "axios";
import ErrorBoundary from "./utils/ErrorBoundary";
import CommentList from "./CommentList";
import Spinner from "./utils/Spinner";
import { fetchArticleWithComments } from "../actions/articles";
import { useDispatch, useSelector } from "react-redux";
import { getArticleWithComments } from "../selectors/articles";
import { getUserProfile } from "../selectors/users";
import { roles } from "../constans";
import MouseTracker from "./MouseTracker";

export const ArticleDetails = (props) => {
  const dispatch = useDispatch();
  const articleWithComments = useSelector(getArticleWithComments);
  const userProfile = useSelector(getUserProfile);
  const { isLoading, article } = articleWithComments;
  const articleId = props.match.params.id;

  const canEditArticle =
    userProfile.id === article?.userId || userProfile.role === roles.ADMIN;

  const axiosCancelSource = useMemo(() => axios.CancelToken.source(), []);

  useEffect(() => {
    dispatch(fetchArticleWithComments(articleId, axiosCancelSource.token));
    return () => {
      axiosCancelSource.cancel();
    };
  }, [dispatch, articleId, axiosCancelSource]);

  const handleEditArticle = useCallback(() => {
    props.history.push(`/article/edit/${articleId}`);
  }, [articleId, props.history]);

  if (isLoading || !article) {
    return <Spinner />;
  }

  return (
    <ErrorBoundary>
      <MouseTracker
        render={({ x, y }) => (
          <article className="article">
            <div className="article__buttons">
              {canEditArticle && (
                <button
                  className="button --primary"
                  onClick={handleEditArticle}
                >
                  Edit article
                </button>
              )}
            </div>
            <header className="article__title">{article.title}</header>
            <section className="article__content">{article.text}</section>
            <footer className="article__footer">Created: {article.date}</footer>
            <CommentList commentList={article.comments} />
            <div>
              Mouse position: {x}, {y}
            </div>
          </article>
        )}
      />
    </ErrorBoundary>
  );
};

export default ArticleDetails;
