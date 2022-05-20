import React from "react";

// Libraries
import { Popup } from "react-leaflet";

function SpotPopup({ className }) {
  return (
    // TODO Fix filter button going over popup
    <Popup className={className}>
      <div></div>
    </Popup>
  );
}

export default SpotPopup;
