import React from "react";
import { Router, Switch, Route } from "react-router";
import Navbar from "./components/Navbar";
import SnackbarProvider from "./components/Snackbar/SnackbarProvider";
import AuthenticatedRoute from "./utils/AuthenticatedRoute";
import UnauthenticatedRoute from "./utils/UnauthenticatedRoute";
import history from "./utils/history"
import { NetworkConnectionProvider } from "./contexts/NetworkConnectionContext";
import Spinner from "./components/utils/Spinner";

const ArticleListPage = React.lazy(() => import('./components/ArticleListPage'))
const ArticleDetails = React.lazy(() => import('./components/ArticleDetails'))
const AddArticlePage = React.lazy(() => import('./components/AddArticlePage'))
const RegisterPage = React.lazy(() => import('./components/RegisterPage'))
const LoginPage = React.lazy(() => import('./components/LoginPage'))

function App() {
  return (
    <SnackbarProvider>
      <NetworkConnectionProvider>
        <Router history={history}>
          <Navbar />
          <React.Suspense fallback={<Spinner />}>
            <Switch>
              <Route exact path="/" component={ArticleListPage} />
              <AuthenticatedRoute path="/article/new" component={AddArticlePage} />
              <Route path="/article/:id" component={ArticleDetails} />
              <UnauthenticatedRoute path="/register" component={RegisterPage} />
              <UnauthenticatedRoute path="/login" component={LoginPage} />
            </Switch>
          </React.Suspense>
        </Router>
      </NetworkConnectionProvider>
    </SnackbarProvider>
  );
}

export default App;
