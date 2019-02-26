import React from "react";
import PropTypes from "prop-types";

export default function DiscountLabel({ text }) {
  return (
    <label className="form-check-label" htmlFor="gridCheck">
      {text}
    </label>
  );
}

DiscountLabel.propTypes = {
  text: PropTypes.string
};
