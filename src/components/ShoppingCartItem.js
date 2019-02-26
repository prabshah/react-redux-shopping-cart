import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { formatCurrency } from "../utilities/helperFunctions";

export default function ShoppingCartItem({
  name,
  category,
  price,
  removeItem
}) {
  return (
    <Fragment>
      <td className="border-right">
        {<b>{name}</b>}
        {<br />}
        {<small>{category}</small>}
      </td>
      <td>{1}</td>
      <td className="border-left">{formatCurrency(price)}</td>
      <td role="button" className="border" onClick={removeItem}>{`X`}</td>
    </Fragment>
  );
}

ShoppingCartItem.propTypes = {
  name: PropTypes.string,
  category: PropTypes.string,
  price: PropTypes.number,
  removeItem: PropTypes.func
};
