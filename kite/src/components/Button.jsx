import React from "react";

function Button({ title, handleClick, className, disabled }) {
  return disabled === true ? (
    <button
      className={className}
      onClick={handleClick}
      disabled
      style={{ backgroundColor: "var(--clr-gray-6)" }}
    >
      {title}
    </button>
  ) : (
    <button className={className} onClick={handleClick}>
      {title}
    </button>
  );
}

export default Button;
