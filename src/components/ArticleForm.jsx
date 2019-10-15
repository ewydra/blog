import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Formik, Field, Form } from "formik";
import { format } from 'date-fns';
import { withRouter } from 'react-router-dom';
import TextField from "./utils/TextField";
import { addArticle } from "../actions/articles";
import { SnackbarContext } from "./Snackbar/SnackbarContext";

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
    const data = {
      ...values,
      date: format(new Date(), 'MMMM d, yyyy H:mm:ss'),
      id: Date.now()
    };
    this.props.addArticle(data);
    this.props.history.push(`/article/${data.id}`);
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
