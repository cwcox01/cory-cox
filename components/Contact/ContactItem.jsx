import React from "react";

export default function ContactItem({ labelText, labelType, labelName }) {
  return (
    <p>
      <label className="d-flex align-items-start">
        {labelText}
        <input type={labelType} name={labelName} />
      </label>
    </p>
  );
}
