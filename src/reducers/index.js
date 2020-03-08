import { combineReducers } from 'redux';
import articles from './articles';
import users from "./users";
import article from "./article";

export default combineReducers({
  articles,
  users,
  article
});
