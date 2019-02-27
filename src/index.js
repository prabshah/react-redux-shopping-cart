import React from "react";
import ReactDOM from "react-dom";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./css/main.css";
import App from "./components/App.js";
import Root from "./Root";

ReactDOM.render(
  <Root>
    <App />
  </Root>,

  document.querySelector("#root")
);
