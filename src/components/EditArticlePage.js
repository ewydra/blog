import React from "react";
import { useSelector } from "react-redux";
import { getArticleWithComments } from "../selectors/articles";
import ArticleForm from "./ArticleForm";
import ErrorBoundary from "./utils/ErrorBoundary";
import Spinner from "./utils/Spinner";

const EditArticlePage = () => {
  const articleWithComments = useSelector(getArticleWithComments);
  const { isLoading, article } = articleWithComments;

  if (isLoading || !article) {
    return <Spinner />;
  }

  return (
    <ErrorBoundary>
      <ArticleForm title="Edit article" article={article} />
    </ErrorBoundary>
  );
};

export default EditArticlePage;
