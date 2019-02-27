import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";

import Root from "../../Root";
import App from "../../components/App";
import ShoppingCart from "../../components/ShoppingCart";
import ProductCards from "../../components/ProductCards";

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <Root>
      <App />
    </Root>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
});

it("shows a ShoppingCart component", () => {
  expect(wrapped.find(ShoppingCart).length).toEqual(1);
});

it("shows a ProductCards component", () => {
  expect(wrapped.find(ProductCards).length).toEqual(1);
});
