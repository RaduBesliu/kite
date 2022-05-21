import React from "react";

function SpotInformation({ className, type, value }) {
  return (
    <div className={className}>
      <p className="type">{type}</p>
      <p className="value">{value}</p>
    </div>
  );
}

export default SpotInformation;
