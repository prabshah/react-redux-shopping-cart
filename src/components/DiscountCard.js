import React from "react";
import PropTypes from "prop-types";

import DiscountLabel from "./DiscountLabel";

export default function DiscountCard({ toggleDiscount, labelText }) {
  return (
    <div className="form-group border-top pt-3">
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="gridCheck"
          onChange={toggleDiscount}
        />
        <DiscountLabel text={labelText} />
      </div>
    </div>
  );
}

DiscountCard.propTypes = {
  onChange: PropTypes.func,
  labelText: PropTypes.string
};
