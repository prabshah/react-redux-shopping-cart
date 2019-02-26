import React from "react";

export default function Button({ value, onClick }) {
  return (
    <button className="btn btn-info" onClick={onClick}>
      {value}
    </button>
  );
}
