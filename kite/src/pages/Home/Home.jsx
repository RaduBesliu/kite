// React
import React from "react";
import { useState, useEffect } from "react";

// Helpers
import { validate_error } from "../../helpers/validate_error";

// Libraries
import { Helmet } from "react-helmet";
import axios from "axios";
import { BiFilter } from "react-icons/bi";
import { useSelector } from "react-redux";

// Components
import { StyledMap } from "../../components/Map/Map.styles";
import { StyledNavbar } from "../../components/Navbar/Navbar.styles";
import { StyledLocations } from "../../components/Locations/Locations.styles";
import { StyledFilterForm } from "../../components/FilterForm/FilterForm.styles";
import { StyledButton } from "../../components/Button/Button.styles";

function home() {
  const [spots, setSpots] = useState([]);
  const [filterSpots, setFilterSpots] = useState([]);
  const [showFilterForm, setShowFilterForm] = useState(false);

  const BASE_URL = process.env.REACT_APP_API_ENDPOINT;

  const filter = useSelector((state) => state.filter.value);

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios
        .get(`${BASE_URL}/spot`)
        .then((response) => response.data)
        .catch((err) => validate_error(err));
      setFilterSpots(data);
      setSpots(data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    setFilterSpots(
      spots.filter(
        (spot) =>
          (!filter.country ||
            spot.country.toLowerCase().includes(filter.country)) &&
          (!filter.windProbability ||
            spot.probability === parseInt(filter.windProbability))
      )
    );
  }, [filter, spots]);

  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.8.0/dist/leaflet.css"
          integrity="sha512-hoalWLoI8r4UszCkZ5kL8vayOGVae1oxXe/2A4AO6J9+580uKHDO3JdHb7NzwwzK5xr/Fs0W40kiNHxM9vyTtQ=="
          crossOrigin=""
        />
        <script
          src="https://unpkg.com/leaflet@1.8.0/dist/leaflet.js"
          integrity="sha512-BB3hKbKWOc9Ez/TAwyWxNXeoV9c1v6FIeYiBieIWkpLjauysF18NzgR1MBNBXf8/KABdlkX68nAhlwcDFLGPCQ=="
          crossOrigin=""
        ></script>
        <title>Kite | Locations</title>
      </Helmet>
      <StyledNavbar />
      <StyledMap filterSpots={filterSpots} />
      <StyledButton
        width="150px"
        height="44px"
        backgroundColor="white"
        position="absolute"
        zIndex="400"
        color="var(--clr-font-primary)"
        top={"135px"}
        right={"18px"}
        filter={"drop-shadow(0px 2px 4px rgba(0, 0, 0,  0.5))"}
        handleClick={() => setShowFilterForm(true)}
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
      {showFilterForm && (
        <StyledFilterForm
          boxShadow="0px 0px 8px rgba(0, 0, 0, 0.12), 0px 8px 8px rgba(0, 0, 0, 0.24)"
          borderRadius="2px"
          setShowFilterForm={setShowFilterForm}
        />
      )}
      {!filterSpots.length ? (
        <h1>Loading spots...</h1>
      ) : (
        <StyledLocations filterSpots={filterSpots} />
      )}
    </>
  );
}

export default home;
