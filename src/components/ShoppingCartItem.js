import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { formatCurrency } from "../utilities/helperFunctions";

export default function ShoppingCartItem({
  id,
  name,
  category,
  price,
  removeItem
}) {
  return (
    <Fragment>
      <td>
        {<b>{name}</b>}
        {<br />}
        {<small>{category}</small>}
      </td>
      <td>{id}</td>
      <td>{formatCurrency(price)}</td>
      <td role="button" className="border" onClick={removeItem}>{`X`}</td>
    </Fragment>
  );
}

ShoppingCartItem.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.number,
  removeItem: PropTypes.func
};
