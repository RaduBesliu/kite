import React from "react";
import { useEffect, useState } from "react";

import { Navigate, Outlet } from "react-router-dom";

import axios from "axios";

function PrivateRoute() {
  const [auth, setAuth] = useState(true);

  const BASE_URL = process.env.REACT_APP_API_ENDPOINT;
  const userToken = localStorage.getItem("token");

  // If the user doesn't exist in the database, then logout
  useEffect(() => {
    const fetchData = async () => {
      axios
        .get(`${BASE_URL}/user/${userToken}`)
        .then(() => {
          setAuth(true);
        })
        .catch(() => {
          setAuth(false);
          localStorage.removeItem("token");
        });
    };

    fetchData();
  }, []);

  return auth ? <Outlet /> : <Navigate to="./login" />;
}

export default PrivateRoute;
