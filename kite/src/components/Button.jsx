import React from "react";

function Button({ title, handleClick, className }) {
  return (
    <button className={className} onClick={handleClick}>
      {title}
    </button>
  );
}

export default Button;
