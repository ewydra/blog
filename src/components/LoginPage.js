import React, { useCallback, useContext } from "react";
import { Formik, Form, Field } from "formik";
import TextField from "./utils/TextField";
import { useDispatch } from "react-redux";
import { loginUser, setLoggedIn, setUserName } from "../actions/users";
import GoogleLogin from "react-google-login";
import SnackbarContext from "./Snackbar/SnackbarContext";

const initialValues = {
  email: "",
  password: ""
};

export default function LoginPage() {
  const dispatch = useDispatch();
  const { showSnackbar } = useContext(SnackbarContext)

  const handleSubmit = useCallback(values => {
    dispatch(loginUser(values));
  }, [dispatch]);

  const handleGoogleLogin = useCallback((response) => {
    localStorage.setItem('token', response.tokenId)
    localStorage.setItem('auth_method', 'google')
    dispatch(setLoggedIn(true))
    dispatch(setUserName(response.profileObj.name))
  }, [dispatch])

  const handleLoginFailure = useCallback(() => {
    showSnackbar('Login with Google failed', 'error')
  }, [showSnackbar])

  return (
    <div className="login-page">
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
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            render={(props) => <button className="button --secondary" {...props}>Login with Google</button>}
            buttonText="Login with Google"
            onSuccess={handleGoogleLogin}
            onFailure={handleLoginFailure}
            cookiePolicy={'single_host_origin'}
            scope="profile"
        />
        </Form>
      )}
    />
  </div>
  )
}
