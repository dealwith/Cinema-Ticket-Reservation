import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { store } from "./helpers/store";
import App from "./app/app";

// import { alertActions } from './actions/alertActions';
window.store = store;
// window.success = alertActions.success

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
