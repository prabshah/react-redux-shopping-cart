import React from "react";

import ProductCards from "./ProductCards";
import ShoppingCart from "./ShoppingCart";

export default function App() {
  return (
    <div className="container">
      <ShoppingCart />
      <ProductCards />
    </div>
  );
}
