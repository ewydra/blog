import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ArticleList from './components/ArticleList';
import ArticleDetails from './components/ArticleDetails';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ArticleList} />
        <Route path="/article/:id" component={ArticleDetails} />
      </Switch>
    </Router>
  );
} 

export default App;
