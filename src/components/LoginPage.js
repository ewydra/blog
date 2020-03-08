import React, { useCallback } from "react";
import { Formik, Form, Field } from "formik";
import TextField from "./utils/TextField";
import { useDispatch } from "react-redux";
import { loginUser } from "../actions/users";

const initialValues = {
  email: "",
  password: ""
};

export default function LoginPage() {
  const dispatch = useDispatch();

  const handleSubmit = useCallback(values => {
    dispatch(loginUser(values));
  }, [dispatch]);

  return (
    <>
    <h1 className="title">Login</h1>
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      render={({ isSubmitting }) => (
        <Form className="form">
          <Field name="email" placeholder="Email" component={TextField} />
          <Field
            name="password"
            placeholder="Password"
            type="password"
            component={TextField}
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="button --primary"
          >
            Login
          </button>
        </Form>
      )}
    />
  </>
  )
}
