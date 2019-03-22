import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { addItemToCart } from "../actions";
import { formatCurrency } from "../utilities/helperFunctions";
import Button from "./Button";

const ProductCards = ({ inventory, addToCart }) => {
  const renderCards = data => {
    return data.map((item, index) => {
      return (
        <div className="col-sm-6 text-center mb-3 card-item" key={index}>
          <div className="card shadow">
            <div className="card-body">
              <h5 className="card-title font-weight-bold">{item.name}</h5>
              <p className="card-text">{`Category: ${item.category}`}</p>
              <p className="card-text">{`Price: ${formatCurrency(
                item.price
              )}`}</p>
              <p className="card-text">{`Stock: ${item.stock}`}</p>
            </div>
            <Button
              value={`Add to the cart +`}
              onClick={() => addToCart(item)}
            />
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <p className="text-center lead pt-5">
        <em>Available Products</em>
      </p>
      <div className="row m-3 cards">{renderCards(inventory)}</div>
    </div>
  );
};

export default connect(
  ({ inventory }) => ({
    inventory
  }),
  { addToCart: addItemToCart }
)(ProductCards);

ProductCards.propTypes = {
  inventory: PropTypes.array.isRequired,
  addToCart: PropTypes.func
};
