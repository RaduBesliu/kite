import React from "react";

function AccountInput({ type, title, value, setValue }) {
  return (
    <div className="input--flex">
      <label className="input__label">{title}</label>
      <input
        className="input__data"
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
    </div>
  );
}

export default AccountInput;
