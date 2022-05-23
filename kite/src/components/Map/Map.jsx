// React
import React from "react";
import { useState } from "react";

// Images
import markerIconRedPng from "../../assets/images/marker-red.png";
import markerIconYellowPng from "../../assets/images/marker-yellow.png";

// Libraries
import { MapContainer, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import Leaflet from "leaflet";
import { useMapEvents } from "react-leaflet/hooks";
import { useSelector, useDispatch } from "react-redux";

// Components
import { StyledSpotMarker } from "../SpotMarker/SpotMarker.styles";

// Features
import { setNewSpot } from "../../features/addSpot/addSpotSlice";

function Map({
  className,
  filterSpots,
  favourites,
  setFavourites,
  // spots,
  // setSpots,
}) {
  const [renderCount, setRenderCount] = useState(1);

  const dispatch = useDispatch();

  const addSpot = useSelector((state) => state.addSpot.value);

  const corner1 = Leaflet.latLng(-90, -200);
  const corner2 = Leaflet.latLng(90, 200);
  const bounds = Leaflet.latLngBounds(corner1, corner2);

  function Map() {
    useMapEvents({
      dblclick: (e) => {
        if (!addSpot.isConfirmed) return;
        const lat = e.latlng.lat.toFixed(4);
        const long = e.latlng.lng.toFixed(4);
        dispatch(setNewSpot({ ...addSpot, isConfirmed: false, lat, long }));
      },
    });
    return null;
  }

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
          currentSpot={spot}
          setRenderCount={setRenderCount}
          renderCount={renderCount}
          favourites={favourites}
          setFavourites={setFavourites}
          icon={
            new Icon({
              iconUrl: spot.favourite ? markerIconYellowPng : markerIconRedPng,
              iconSize: [27, 41],
              iconAnchor: [13, 41],
              popupAnchor: [
                spot.long < -150 ? 175 : spot.long > 150 ? -175 : 0,
                spot.lat < -65 ? -50 : spot.lat > 65 ? 550 : -50,
              ],
            })
          }
        />
      ))}
      <Map />
    </MapContainer>
  );
}

export default Map;
