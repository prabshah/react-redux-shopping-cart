import React from "react";

export default function DiscountLabel({ text }) {
  return (
    <label className="form-check-label" htmlFor="gridCheck">
      {text}
    </label>
  );
}
