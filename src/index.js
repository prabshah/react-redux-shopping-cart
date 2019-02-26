import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./css/main.css";

import App from "./components/App.js";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
