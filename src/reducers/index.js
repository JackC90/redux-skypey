import { combineReducers } from "redux";
import user from "./user";
import messages from "./messages";
import contacts from "./contacts";
import typing from "./typing";
import activeUserId from "./activeUserId";

export default combineReducers({
  user,
  messages,
  contacts,
  typing,
  activeUserId
});