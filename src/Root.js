import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";

import reducer from "./reducers";

export default props => {
  return <Provider store={createStore(reducer)}>{props.children}</Provider>;
};
