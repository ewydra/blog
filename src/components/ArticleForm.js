import React, { Component, Fragment } from "react";
import { compose } from 'redux';
import { connect } from "react-redux";
import { Formik, Field } from "formik";
import { format } from 'date-fns';
import { withRouter } from 'react-router';
import TextField from "./utils/TextField";
import SnackbarContext from "./Snackbar/SnackbarContext";
import { createArticle, updateArticle } from "../actions/articles";
import { Button } from "./Button";

const initialValues = {
  title: "",
  abstract: "",
  text: ""
};

const validate = values => {
  let required = ['title', 'abstract', 'text'];
  return required.reduce((errors, field) => {
    if(!values[field]) errors[field] = 'Required';
    return errors;
  }, {})
}

export class ArticleForm extends Component {
  static contextType = SnackbarContext;

  submit = (values, { resetForm }) => {
    const isEditMode = !!this.props.article
    const data = {
      ...values,
      id: isEditMode ? this.props.article.id : Date.now()
      (...!isEditMode && {date: format(new Date(), 'MMMM d, yyyy H:mm:ss')}),
    };

    if (isEditMode) {
      this.props.updateArticle(data, this.props.history);
      this.context.showSnackbar('The article was updated successfully', 'success');
    } else {
      this.props.createArticle(data, this.props.history);
      this.context.showSnackbar('The article was published successfully', 'success');
    }
    resetForm();
  }

  render() {
    return (
      <Fragment>
        <h1 className="form__title">{this.props.title || ''}</h1>
          <Formik
            initialValues={this.props.article || initialValues}
            onSubmit={this.submit}
            validate={validate}
            render={({ isSubmitting, handleSubmit }) => (
              <div className="form">
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
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </div>
            )}
          />
      </Fragment>
    );
  }
}

const mapDispatchToProps = {
  createArticle,
  updateArticle,
};

export default compose(
  connect(null, mapDispatchToProps),
  withRouter,
)(ArticleForm);
