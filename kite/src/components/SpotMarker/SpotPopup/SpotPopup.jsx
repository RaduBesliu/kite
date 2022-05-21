// React
import React from "react";
import { useState } from "react";

// Libraries
import { Popup } from "react-leaflet";
import { BsPlusLg } from "react-icons/bs";
import { FaMinus } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import axios from "axios";

// Components
import { StyledButton } from "../../Button/Button.styles";
import { StyledSpotInformation } from "./SpotInformation/SpotInformation.styles";

// Helpers
import { validate_error } from "../../../helpers/validate_error";

function SpotPopup({
  className,
  currentSpot,
  setRenderCount,
  renderCount,
  favourites,
  setFavourites,
}) {
  const [isFavourite, setIsFavourite] = useState(currentSpot.favourite);

  const BASE_URL = process.env.REACT_APP_API_ENDPOINT;

  const handlePopupSubmit = async () => {
    currentSpot.favourite = !isFavourite;
    setIsFavourite((state) => !state);
    setRenderCount(renderCount + 1);

    if (currentSpot.favourite) {
      await axios
        .post(`${BASE_URL}/favourites`, { spot: parseInt(currentSpot.id) })
        .then((response) => {
          const newFavourite = response.data;
          setFavourites([...favourites, newFavourite]);
          return response;
        })
        .catch((err) => validate_error(err));
    } else {
      const idToDelete = favourites.filter(
        (favourite) => favourite.spot === parseInt(currentSpot.id)
      )[0].id;
      await axios
        .delete(`${BASE_URL}/favourites/${idToDelete}`)
        .then(() => {
          setFavourites(
            favourites.filter((favourite) => favourite.id !== idToDelete)
          );
        })
        .catch((err) => validate_error(err));
    }
  };

  return (
    <Popup className={className}>
      <div className="container">
        <div className="information">
          <h2>
            {currentSpot.name}{" "}
            {currentSpot.favourite && (
              <span
                style={{
                  position: "absolute",
                  transform: "translate(5px, 3px)",
                }}
              >
                <AiFillStar color="var(--clr-yellow)" />
              </span>
            )}
          </h2>
          <h4>{currentSpot.country}</h4>
          <StyledSpotInformation
            type={"WIND PROBABILITY"}
            value={currentSpot.probability + "%"}
          />
          <StyledSpotInformation
            type={"LATITUDE"}
            value={currentSpot.lat + "° N"}
          />
          <StyledSpotInformation
            type={"LONGITUDE"}
            value={currentSpot.long + "° W"}
          />
          <StyledSpotInformation
            type={"WHEN TO GO"}
            value={currentSpot.month}
          />
        </div>
        <StyledButton
          position="absolute"
          bottom="0"
          left="0"
          right="0"
          height="44px"
          fontWeight="700"
          handleClick={handlePopupSubmit}
          backgroundColor={
            currentSpot.favourite ? "var(--clr-red)" : "var(--clr-yellow)"
          }
          buttonLabel={
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              {currentSpot.favourite ? <FaMinus /> : <BsPlusLg size={14} />}{" "}
              <span style={{ letterSpacing: "1px" }}>
                {currentSpot.favourite
                  ? "REMOVE FROM FAVORITES"
                  : "ADD TO FAVORITES"}
              </span>
            </div>
          }
        />
      </div>
    </Popup>
  );
}

export default SpotPopup;
