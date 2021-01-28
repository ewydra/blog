import React, { useMemo } from "react";
import { Route, Redirect } from "react-router";
import { useSelector } from "react-redux";
import { getUserProfile, isLoggedIn } from "../selectors/users";

export default function AuthenticatedRoute({ children, roles, ...rest }) {
  const userProfile = useSelector(getUserProfile);
  const isAuthenticated = useSelector(isLoggedIn);
  const isAuthorized = useMemo(() => {
    if (roles) {
      return isAuthenticated && roles.includes(userProfile.role);
    }
    return isAuthenticated;
  }, [isAuthenticated, roles, userProfile]);

  const redirectionRoute = isAuthenticated ? "/login" : "/";
  return (
    <Route {...rest}>
      {isAuthorized ? children : <Redirect to={redirectionRoute} />}
    </Route>
  );
}
