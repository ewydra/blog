import React from "react";
import { Router, Switch, Route } from "react-router";
import ArticleListPage from "./components/ArticleListPage";
import ArticleDetails from "./components/ArticleDetails";
import Navbar from "./components/Navbar";
import AddArticlePage from "./components/AddArticlePage";
import SnackbarProvider from "./components/Snackbar/SnackbarProvider";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";
import AuthenticatedRoute from "./utils/AuthenticatedRoute";
import UnauthenticatedRoute from "./utils/UnauthenticatedRoute";
import history from "./utils/history"

function App() {
  return (
    <SnackbarProvider>
      <Router history={history}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ArticleListPage} />
          <AuthenticatedRoute path="/article/new" component={AddArticlePage} />
          <Route path="/article/:id" component={ArticleDetails} />
          <UnauthenticatedRoute path="/register" component={RegisterPage} />
          <UnauthenticatedRoute path="/login" component={LoginPage} />
        </Switch>
      </Router>
    </SnackbarProvider>
  );
}

export default App;
