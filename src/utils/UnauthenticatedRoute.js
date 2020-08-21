import React from "react";
import { Route, Redirect } from "react-router";
import { useSelector } from "react-redux";
import { isLoggedIn } from "../selectors/users";

export default function UnauthenticatedRoute({ children, ...rest }) {
  const isAuthenticated = useSelector(isLoggedIn);
  
  return (
    <Route {...rest}>
      {!isAuthenticated ? (
        children
      ) : (
        <Redirect to="/" />
      )}
    </Route>
  );
}
