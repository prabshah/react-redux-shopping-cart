import React, { Fragment } from "react";

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
