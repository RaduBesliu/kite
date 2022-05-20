// React
import React from "react";

// Images
import markerIconPng from "../../assets/images/marker-red.png";

// Libraries
import { MapContainer, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import Leaflet from "leaflet";

// Components
import { StyledSpotMarker } from "../SpotMarker/SpotMarker.styles";

function Map({ className, filterSpots }) {
  const corner1 = Leaflet.latLng(-90, -200);
  const corner2 = Leaflet.latLng(90, 200);
  const bounds = Leaflet.latLngBounds(corner1, corner2);

  return (
    <MapContainer
      className={className}
      maxBoundsViscosity={1.0}
      maxBounds={bounds}
      center={[45.505, 15]}
      zoom={5}
      scrollWheelZoom={true}
      doubleClickZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        minZoom={3}
      />
      {filterSpots.map((spot) => (
        <StyledSpotMarker
          key={spot.id}
          position={[spot.lat, spot.long]}
          icon={
            new Icon({
              iconUrl: markerIconPng,
              iconSize: [27, 41],
              iconAnchor: [13, 41],
              popupAnchor: [
                spot.long < -150 ? 175 : spot.long > 150 ? -175 : 0,
                spot.lat < -70 ? -50 : spot.lat > 70 ? 450 : -50,
              ],
            })
          }
        />
      ))}
    </MapContainer>
  );
}

export default Map;
