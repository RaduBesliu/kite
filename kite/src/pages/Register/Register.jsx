import React from "react";
import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

function register() {
  let navigate = useNavigate();

  // Redirect home if there is no auth token
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);

  return <div>register</div>;
}

export default register;
