// React
import React from "react";
import { useState, useEffect } from "react";

// Helpers
import { validate_error } from "../../helpers/validate_error";

// Libraries
import { Helmet } from "react-helmet";
import axios from "axios";

// Components
import { StyledMap } from "../../components/Map/Map.styles";
import { StyledNavbar } from "../../components/Navbar/Navbar.styles";
import { StyledLocations } from "../../components/Locations/Locations.styles";

function home() {
  const [spots, setSpots] = useState([]);

  const BASE_URL = process.env.REACT_APP_API_ENDPOINT;

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios
        .get(`${BASE_URL}/spot`)
        .then((response) => response.data)
        .catch((err) => validate_error(err));
      setSpots(data);
    };

    fetchData();
  }, []);

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
      <StyledMap spots={spots} />
      <StyledLocations />
    </>
  );
}

export default home;
