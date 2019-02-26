import React from "react";
import DiscountLabel from "./DiscountLabel";

export default function DiscountCard({ onChange, labelText }) {
  return (
    <div className="form-group border-top pt-3">
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="gridCheck"
          onChange={onChange}
        />
        <DiscountLabel text={labelText} />
      </div>
    </div>
  );
}
