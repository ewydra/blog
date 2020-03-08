import React, { useState } from "react";
import { Formik, Form } from "formik";

export const WizardPage = ({ children }) => children;

const WizardForm = ({ children, initialValues = {}, onSubmit }) => {
  const [page, setPage] = useState(0);
  const [values, setValues] = useState(initialValues);

  const goNext = values => {
    setPage(Math.min(page + 1, children.length - 1));
    setValues(values);
  };

  const goPrevious = () => setPage(Math.max(page - 1, 0));

  const validate = values => {
    const activePage = React.Children.toArray(children)[page];
    return activePage.props.validate ? activePage.props.validate(values) : {};
  };

  const handleSubmit = (values, bag) => {
    const isLastPage = page === React.Children.count(children) - 1;
    if (isLastPage) {
      return onSubmit(values, bag);
    } else {
      bag.setTouched({});
      bag.setSubmitting(false);
      goNext(values);
    }
  };

  const activePage = React.Children.toArray(children)[page];
  const isLastPage = page === React.Children.count(children) - 1;
  return (
    <Formik
      initialValues={values}
      enableReinitialize={false}
      validate={validate}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="form">
          {activePage}
          <div className="form__buttons">
            {page > 0 && (
              <button
                type="button"
                className="button --secondary"
                onClick={goPrevious}
              >
                Previous
              </button>
            )}

            {!isLastPage && (
              <button type="submit" className="button --primary">
                Next
              </button>
            )}
            {isLastPage && (
              <button
                type="submit"
                disabled={isSubmitting}
                className="button --primary"
              >
                Submit
              </button>
            )}
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default WizardForm;
