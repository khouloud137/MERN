import { createStore, applyMiddleware, compose } from "redux";

import { thunk } from "redux-thunk";
import { combineReducers } from "redux";
import authReducer from "./reducer/authReducer";
import getReducer from "./reducer/getReducer";
import postReducer from "./reducer/postsReducer";
const rootReducer = combineReducers({
  getposts: getReducer,
  postsActions: postReducer,
  users: authReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
