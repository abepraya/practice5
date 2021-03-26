import React from "react";
import ReactDOM from "react-dom";

import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';

import App from "../src/containers/App";
import authReducer from "./containers/store/reducers/auth";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const rootReducer = combineReducers({
  auth: authReducer,
});
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const app = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
ReactDOM.render(app, document.getElementById("root"));
