import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { removeItemFromCart, toggleDiscount } from "../actions";
import ShoppingCartItem from "./ShoppingCartItem";
import DiscountCard from "./DiscountCard";
import categories from "../utilities/categoryDict";
import {
  formatCurrency,
  findValueInArray,
  getCartTotal,
  handleNegativeNum
} from "../utilities/helperFunctions";

const ShoppingCart = props => {
  const { cartList, removeFromCart, applyDiscount, total = 0 } = props;
  const cartItemCount = cartList.length > 0;
  const cartTotal = getCartTotal(cartList);
  const isTotalOverFifty = cartItemCount && cartTotal > 50;
  const isFootwear = findValueInArray(
    cartList,
    categories.MEN_FOOTWEAR,
    categories.WOMEN_FOOTWEAR
  );

  const isFootwearAndOverSeventyFive =
    cartItemCount && isFootwear && cartTotal > 75;

  const cartItems = cartItemCount ? (
    cartList.map((cartItem, index) => {
      return (
        <tr key={index}>
          <ShoppingCartItem
            {...cartItem}
            removeItem={() => removeFromCart(index)}
          />
        </tr>
      );
    })
  ) : (
    <tr>
      <td>
        <p className="lead p-4 mt-3 text-left">
          Your shopping cart is empty! Get shopping....
        </p>
      </td>
    </tr>
  );

  return (
    <div className="p-5 m-4 shadow rounded">
      <p className="text-center lead">Shopping Cart</p>
      <table className="table text-center border shadow-sm rounded">
        <thead>
          <tr>
            <th scope="col">Product</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        <tbody>{cartItems}</tbody>
      </table>
      <div className="row text-center p-3 font-weight-bold lead">{`Total Amount: ${formatCurrency(
        handleNegativeNum(total)
      )}`}</div>

      {cartItemCount && (
        <DiscountCard
          toggleDiscount={event => applyDiscount(event, "default")}
          labelText="Apply £5 Discount"
        />
      )}

      {isTotalOverFifty && (
        <DiscountCard
          toggleDiscount={event => applyDiscount(event, "overFifty")}
          labelText=" Apply £10 Discount - Over Fifty Spend Reward"
        />
      )}
      {isFootwearAndOverSeventyFive && (
        <DiscountCard
          toggleDiscount={event => applyDiscount(event, "overSeventyFive")}
          labelText="Apply £15 Discount - Footwear and Over Seventy-Five Spend Reward"
          labelText={
            "Apply £15 Discount - Footwear and Over Seventy-Five Spend Reward"
          }
        />
      )}
    </div>
  );
};

export default connect(
  state => ({
    cartList: state.cartList,
    total: state.total
  }),
  dispatch => ({
    removeFromCart: item => dispatch(removeItemFromCart(item)),
    applyDiscount: (event, type) => dispatch(toggleDiscount(event, type))
  })
)(ShoppingCart);

ShoppingCart.propTypes = {
  cartList: PropTypes.array,
  total: PropTypes.number,
  removeFromCart: PropTypes.func,
  applyDiscount: PropTypes.func
};
