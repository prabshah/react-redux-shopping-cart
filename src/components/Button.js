import React from "react";
import PropTypes from "prop-types";

export default function Button({ value, onClick }) {
  return (
    <button className="btn btn-info" onClick={onClick}>
      {value}
    </button>
  );
}

Button.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func
};
