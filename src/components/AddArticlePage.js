import React from "react";
import ArticleForm from "./ArticleForm";
import ErrorBoundary from "./utils/ErrorBoundary";

const AddArticlePage = () => (
  <ErrorBoundary><ArticleForm title="New article" /></ErrorBoundary>
);

export default AddArticlePage;
