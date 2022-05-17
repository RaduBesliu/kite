import React from "react";

function AccountInput({ type, title, value, setValue, isValid }) {
  return (
    <div className="input--flex">
      <label className="input__label">{title}</label>
      <input
        className={`input__data ${
          isValid === false ? "input__data--error" : ""
        }`}
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
    </div>
  );
}

export default AccountInput;
