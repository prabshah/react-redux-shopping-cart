import React from "react";
import { connect } from "react-redux";

import { removeItemFromCart } from "../actions";
import categories from "../utilities/categoryDict";
import ShoppingCartItem from "./ShoppingCartItem";
import {
  calculateTotal,
  formatCurrency,
  checkValue
} from "../utilities/helperFunctions";
import DiscountCard from "./DiscountCard";

const ShoppingCart = props => {
  const {
    cartList,
    removeFromCart,
    discount,
    discountType,
    applyDiscount
  } = props;

  let total = calculateTotal(cartList);

  if (discount && discountType === "default") {
    total = total - 5;
  }

  if (discount && discountType === "overFifty") {
    total = total - 10;
  }

  //Calculate the total according to the discount applied
  const cartItemCount = cartList.length > 0;
  const isTotalOverFifty = cartItemCount && total > 50;
  const isFootwear = checkValue(
    cartList,
    categories.MEN_FOOTWEAR,
    categories.WOMEN_FOOTWEAR
  );

  const isFootwearAndOverSeventyFive =
    cartItemCount && isFootwear && total > 75;

  const cartItems = cartItemCount ? (
    cartList.map((listItem, index) => {
      return (
        <tr key={index}>
          <ShoppingCartItem
            {...listItem}
            removeItem={() => removeFromCart(index)}
          />
        </tr>
      );
    })
  ) : (
    <p className="lead p-4 mt-3 text-left">
      Your shopping cart is empty! Get shopping....
    </p>
  );

  return (
    <div className="p-5 m-4 shadow rounded">
      <p className="text-center lead">Shopping Cart</p>
      <table className="table text-center border shadow-sm rounded">
        <thead>
          <tr>
            <th scope="col">Product</th>
            <th scope="col">ID</th>
            <th scope="col">Price</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        <tbody>{cartItems}</tbody>
      </table>
      <div className="row text-center p-3 font-weight-bold lead">{`Total Amount: ${formatCurrency(
        total
      )}`}</div>

      {cartItemCount && (
        <DiscountCard
          onChange={() => applyDiscount()}
          labelText="Apply £5 Discount"
        />
      )}

      {isTotalOverFifty && (
        <DiscountCard
          onChange={() => applyDiscount("overFifty")}
          labelText=" Apply £10 Discount - Over Fifty Spend Reward"
        />
      )}
      {isFootwearAndOverSeventyFive && (
        <DiscountCard
          onChange={() => applyDiscount("overSeventyFive")}
          labelText="Apply £15 Discount - Footwear and Over Seventy-Five Spend Reward"
          labelText={`labelText="Apply £15 Discount - Footwear and Over Seventy-Five Spend Reward"`}
        />
      )}
    </div>
  );
};

export default connect(
  state => ({
    inventory: state.inventory,
    cartList: state.cartList
  }),
  dispatch => ({
    removeFromCart: item => dispatch(removeItemFromCart(item))
  })
)(ShoppingCart);
