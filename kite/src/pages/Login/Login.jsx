// React
import React from "react";
import { useState, useEffect } from "react";

// Libraries
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";

// Componets
import AccountInput from "../../components/AccountInput";
import Button from "../../components/Button";

// Helpers
import { validate_error } from "../../helpers/validate_error";

// Styles
import "./login.css";

function login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [submitDisabled, setSubmitDisabled] = useState(false);

  const navigate = useNavigate();
  const BASE_URL = process.env.REACT_APP_API_ENDPOINT;

  // Redirect home if there is an auth token
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  const submitForm = async (e) => {
    e.preventDefault();
    setSubmitDisabled(true);
    await axios
      .post(`${BASE_URL}/login`, { username, password })
      .then((response) => {
        localStorage.setItem("token", response.data.userId);
        setToken(response.data.userId);
      })
      .catch((err) => validate_error(err));

    setSubmitDisabled(false);
  };

  return (
    <form className="form">
      <Helmet>
        <title>Kite | Login</title>
      </Helmet>
      <h1 className="title">Kite</h1>
      <AccountInput
        title="Email"
        type="text"
        value={username}
        setValue={setUsername}
      ></AccountInput>
      <AccountInput
        title="Password"
        type="password"
        value={password}
        setValue={setPassword}
      ></AccountInput>
      <Button
        className="form__submit"
        title="Login"
        handleClick={submitForm}
        disabled={submitDisabled}
      />
      <p
        className="form__change-page"
        style={{
          display: "block",
          textAlign: "center",
          marginTop: 16,
          letterSpacing: 1.15,
        }}
      >
        Don&apos;t have an account?
        <br />
        <Link
          to="../register"
          style={{
            textDecoration: "none",
            color: "var(--clr-blue-1)",
            fontWeight: "bold",
          }}
        >
          Register
        </Link>
      </p>
    </form>
  );
}

export default login;
