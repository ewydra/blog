import React, { useCallback } from "react";
import WizardForm, { WizardPage } from "./utils/WizardForm";
import TextField from "./utils/TextField";
import { Field } from "formik";
import { useDispatch } from "react-redux";
import { registerUser } from "../actions/users";

const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  }
  if (!values.password) {
    errors.password = "Required";
  }
  if (values.email) {
    const emailRegex = new RegExp("[\\w-]+@([\\w-]+\\.)+[\\w-]+");
    if (!emailRegex.test(values.email)) {
      errors.email = "Invalid email";
    }
  }
  return errors;
};

const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = useCallback(values => {
    dispatch(registerUser(values))
  }, [dispatch])

  return (
    <>
      <h1 className="title">Register</h1>
      <WizardForm
        initialValues={{
          email: "",
          password: "",
          username: "",
          about: ""
        }}
        onSubmit={handleSubmit}
      >
        <WizardPage validate={validate}>
          <Field name="email" placeholder="Email" component={TextField} />
          <Field
            name="password"
            placeholder="Password"
            type="password"
            component={TextField}
          />
        </WizardPage>
        <WizardPage validate={validate}>
          <Field
            name="username"
            placeholder="Your username"
            component={TextField}
          />
          <Field
            name="about"
            placeholder="Write something about yourself"
            component={TextField}
            rows={10}
          />
        </WizardPage>
      </WizardForm>
    </>
  );
};

export default RegisterPage;
