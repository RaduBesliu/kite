import React from "react";

// Libraries
import { Marker } from "react-leaflet";

// Components
import { StyledSpotPopup } from "./SpotPopup/SpotPopup.styles";

function SpotMarker({ className, position, icon }) {
  return (
    <Marker className={className} position={position} icon={icon}>
      <StyledSpotPopup />
    </Marker>
  );
}

export default SpotMarker;
