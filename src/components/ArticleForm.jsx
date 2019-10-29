import React, { Fragment, useContext } from "react";
import { connect } from "react-redux";
import { Formik, Field, Form } from "formik";
import { format } from 'date-fns';
import { withRouter } from 'react-router-dom';
import TextField from "./utils/TextField";
import SnackbarContext from "./Snackbar/SnackbarContext";
import { createArticle } from "../actions/articles";

const initialValues = {
  title: "",
  abstract: "",
  text: ""
};

const validate = values => {
  let errors = {};
  let required = ['title', 'abstract', 'text'];
  required.forEach(field => {
    if(!values[field]) errors[field] = 'Required';
  });
  return errors;
}

export const ArticleForm = ({ article, title, createArticle, history }) => {
  const context = useContext(SnackbarContext)

  const submit = (values, { resetForm }) => {
    values.date = format(new Date(), 'MMMM d, yyyy H:mm:ss');
    values.id = Date.now();
    createArticle(values, history);
    context.showSnackbar('The article was published successfully', 'success');
    resetForm();
  }

  return (
    <Fragment>
      <h1 className="Article-form__title">{title || ''}</h1>
        <Formik
          initialValues={article || initialValues}
          onSubmit={submit}
          validate={validate}
          render={({ isSubmitting }) => (
            <Form className="Article-form">
              <Field
                name="title"
                placeholder="Title"
                component={TextField}
              />
              <Field
                name="abstract"
                placeholder="Abstract"
                component={TextField}
              />
              <Field
                name="text"
                placeholder="Text"
                rows={15}
                component={TextField}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="Article-form__button"
              >
                Submit
              </button>
            </Form>
          )}
        />
    </Fragment>
  );
};

const mapDispatchToProps = {
  createArticle
};

export default connect(
  null,
  mapDispatchToProps
)(withRouter(ArticleForm));
