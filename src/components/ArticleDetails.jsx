import React from "react";
import { connect } from 'react-redux';
import { getArticleById } from '../selectors/articles';

export const ArticleDetails = ({ article: { title, text, date } }) => (
  <article className="Article">
    <header className="Article__title">{title}</header>
    <section className="Article__content">{text}</section>
    <footer className="Article__footer">Created: {date}</footer>
  </article>
)

const mapStateToProps = (state, props) => ({
  article: getArticleById(state, props.match.params.id)
})

export default connect(mapStateToProps)(ArticleDetails);
