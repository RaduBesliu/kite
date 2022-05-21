import React from "react";

// Libraries
import { Marker } from "react-leaflet";
import { useDispatch } from "react-redux";

// Components
import { StyledSpotPopup } from "./SpotPopup/SpotPopup.styles";

// Features
import { setPopupState } from "../../features/popup/popupSlice";

function SpotMarker({
  className,
  position,
  currentSpot,
  setRenderCount,
  renderCount,
  favourites,
  setFavourites,
  icon,
}) {
  const dispatch = useDispatch();

  const eventHandlers = {
    popupopen: () => {
      dispatch(setPopupState(true));
    },
    popupclose: () => {
      dispatch(setPopupState(false));
    },
  };

  return (
    <Marker
      className={className}
      position={position}
      icon={icon}
      eventHandlers={eventHandlers}
    >
      <StyledSpotPopup
        favourites={favourites}
        setFavourites={setFavourites}
        currentSpot={currentSpot}
        setRenderCount={setRenderCount}
        renderCount={renderCount}
      />
    </Marker>
  );
}

export default SpotMarker;
