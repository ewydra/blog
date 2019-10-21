import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Formik, Field, Form } from "formik";
import { format } from 'date-fns';
import { withRouter } from 'react-router-dom';
import TextField from "./utils/TextField";
import SnackbarContext from "./Snackbar/SnackbarContext";
import { addArticle } from "../actions/articles";

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

export class ArticleForm extends Component {
  static contextType = SnackbarContext;

  submit = (values, { resetForm }) => {
    values.date = format(new Date(), 'MMMM d, yyyy H:mm:ss');
    values.id = Date.now();
    this.props.addArticle(values, this.props.history);
    this.context.showSnackbar('The article was published successfully', 'success');
    resetForm();
  }

  render() {
    return (
      <Fragment>
        <h1 className="Article-form__title">{this.props.title}</h1>
          <Formik
            initialValues={this.props.article || initialValues}
            onSubmit={this.submit}
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
  }
}

const mapDispatchToProps = {
  addArticle
};

export default connect(
  null,
  mapDispatchToProps
)(withRouter(ArticleForm));
