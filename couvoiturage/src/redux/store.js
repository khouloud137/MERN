import { createStore ,applyMiddleware,compose } from "redux";
import authReducer from "./reducer/authReducer";
import {thunk } from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  authReducer,
  composeEnhancers(applyMiddleware(thunk)) 
)
  
export default store;
