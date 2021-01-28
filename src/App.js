import React from "react";
import { Router, Switch, Route } from "react-router";
import ArticleListPage from "./components/ArticleListPage";
import ArticleDetails from "./components/ArticleDetails";
import Navbar from "./components/Navbar";
import AddArticlePage from "./components/AddArticlePage";
import EditArticlePage from "./components/EditArticlePage";
import SnackbarProvider from "./components/Snackbar/SnackbarProvider";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";
import UserListPage from "./components/UserListPage";
import AuthenticatedRoute from "./utils/AuthenticatedRoute";
import UnauthenticatedRoute from "./utils/UnauthenticatedRoute";
import history from "./utils/history";
import { NetworkConnectionProvider } from "./contexts/NetworkConnectionContext";
import { roles } from "./constans";

function App() {
  const { ADMIN, USER } = roles;

  return (
    <SnackbarProvider>
      <NetworkConnectionProvider>
        <Router history={history}>
          <Navbar />
          <Switch>
            <Route exact path="/" component={ArticleListPage} />
            <AuthenticatedRoute
              path="/users"
              component={UserListPage}
              roles={[ADMIN]}
            />
            <AuthenticatedRoute
              path="/article/new"
              component={AddArticlePage}
              roles={[ADMIN, USER]}
            />
            <AuthenticatedRoute
              path="/article/edit/:id"
              component={EditArticlePage}
              roles={[ADMIN, USER]}
            />
            <Route path="/article/:id" component={ArticleDetails} />
            <UnauthenticatedRoute path="/register" component={RegisterPage} />
            <UnauthenticatedRoute path="/login" component={LoginPage} />
          </Switch>
        </Router>
      </NetworkConnectionProvider>
    </SnackbarProvider>
  );
}

export default App;
