// React
import React from "react";
import { useEffect, useState } from "react";

// Libraries
import { Navigate, Outlet } from "react-router-dom";
// import axios from "axios";

// Helpers
// import { validate_error } from "../helpers/validate_error";

function PrivateRoute() {
  const [auth, setAuth] = useState(true);

  const userToken = localStorage.getItem("token");

  // This will be used if there is proper authentication
  // If the user id isn't in the database, the user is logged out and local storage token is cleared
  // Prevents users from entering random tokens

  // const BASE_URL = process.env.REACT_APP_API_ENDPOINT;
  // useEffect(() => {
  //   const fetchData = async () => {
  //     axios
  //       .get(`${BASE_URL}/user/${userToken}`)
  //       .then(() => {
  //         setAuth(true);
  //       })
  //       .catch((err) => {
  //         setAuth(false);
  //         localStorage.removeItem("token");
  //         validate_error(err);
  //       });
  //   };

  //   fetchData();
  // }, []);

  // If there is no token present, logout
  useEffect(() => {
    if (!userToken) {
      localStorage.removeItem("token");
      setAuth(false);
    }
  }, []);

  return auth ? <Outlet /> : <Navigate to="./login" />;
}

export default PrivateRoute;
