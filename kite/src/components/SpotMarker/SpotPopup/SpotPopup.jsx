import React from "react";

// Libraries
import { Popup } from "react-leaflet";

function SpotPopup({ className }) {
  return (
    <Popup className={className}>
      <div>Popup</div>
    </Popup>
  );
}

export default SpotPopup;
