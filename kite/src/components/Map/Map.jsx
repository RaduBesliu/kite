// React
import React from "react";

// Images
import markerIconPng from "../../assets/images/marker-red.png";

// Libraries
import { MapContainer, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import { BiFilter } from "react-icons/bi";

// Components
import { StyledButton } from "../Button/Button.styles";
import { StyledSpotMarker } from "../SpotMarker/SpotMarker.styles";

function Map({ className, spots }) {
  spots.length && console.log(spots);

  return (
    <MapContainer
      center={[45.505, 15]}
      zoom={5}
      scrollWheelZoom={false}
      doubleClickZoom={false}
      className={className}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {spots.map((spot) => (
        <StyledSpotMarker
          key={spot.id}
          position={[spot.lat, spot.long]}
          icon={
            new Icon({
              iconUrl: markerIconPng,
              iconSize: [27, 41],
              iconAnchor: [13, 41],
              popupAnchor: [-100, 0],
            })
          }
        />
      ))}

      <StyledButton
        width="150px"
        height="44px"
        backgroundColor="white"
        position="absolute"
        zIndex="1000"
        color="var(--clr-font-primary)"
        top={"67px"}
        right={"18px"}
        filter={"drop-shadow(0px 2px 4px rgba(0, 0, 0,  0.5))"}
        buttonLabel={
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "7px",
            }}
          >
            <BiFilter size={22} />
            {"FILTERS"}
          </div>
        }
      />
    </MapContainer>
  );
}

export default Map;
