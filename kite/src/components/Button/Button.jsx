import React from "react";

function Button({ className, buttonLabel, handleClick }) {
  return (
    <button className={className} onClick={handleClick}>
      {buttonLabel}
    </button>
  );
}

export default Button;
