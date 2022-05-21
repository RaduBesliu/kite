import React from "react";

function AddSpotFormInput({ className, labelText, handleChange }) {
  return (
    <div className={className}>
      <label>{labelText}</label>
      <input value={"a"} onChange={handleChange} placeholder="Any" />
    </div>
  );
}

export default AddSpotFormInput;
