import React from "react";

function Button({ className, buttonLabel, handleClick, disabled }) {
  return disabled === true ? (
    <button
      className={className}
      onClick={handleClick}
      disabled
      style={{ backgroundColor: "var(--clr-gray-6)" }}
    >
      {buttonLabel}
    </button>
  ) : (
    <button className={className} onClick={handleClick}>
      {buttonLabel}
    </button>
  );
}

export default Button;
