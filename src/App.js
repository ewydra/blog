import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ArticleList from './components/ArticleList';
import ArticleDetails from './components/ArticleDetails';
import Navbar from './components/Navbar';
import AddArticlePage from './components/AddArticlePage';
import { SnackbarProvider } from './components/Snackbar/SnackbarContext';

function App() {
  return (
    <SnackbarProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ArticleList} />
          <Route path="/article/new" component={AddArticlePage} />
          <Route path="/article/:id" component={ArticleDetails} />
        </Switch>
      </Router>
    </SnackbarProvider>
  );
} 

export default App;
