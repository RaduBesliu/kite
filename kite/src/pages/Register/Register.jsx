// React
import React from "react";
import { useState, useEffect } from "react";

// Libraries
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";

// Components
import AccountInput from "../../components/AccountInput";
import Button from "../../components/Button";

// Helpers
import { validate_error } from "../../helpers/validate_error";

// Styles
import "./register.css";

function register() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [select, setSelect] = useState("");
  const [submitDisabled, setSubmitDisabled] = useState(false);

  const [token, setToken] = useState(localStorage.getItem("token"));

  const [isValidName, setIsValidName] = useState(null);
  const [isValidUsername, setIsValidUsername] = useState(null);
  const [isValidPassword, setIsValidPassword] = useState(null);

  const navigate = useNavigate();
  const BASE_URL = process.env.REACT_APP_API_ENDPOINT;

  const emailRegex = RegExp(
    "^[a-z0-9-_](?:[a-z0-9-_.]*)?[a-z0-9-_]?@[a-z0-9](?:[a-z0-9-.]*)?[a-z0-9]?$",
    "gi"
  );

  // Redirect home if there is an auth token
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  const submitForm = async (e) => {
    e.preventDefault();
    setSubmitDisabled(true);
    // Check all inputs first for error, then return if invalid
    let validForm = true;

    if (!name) {
      setIsValidName(false);
      validForm = false;
    } else setIsValidName(true);

    if (!(username && emailRegex.test(username))) {
      setIsValidUsername(false);
      validForm = false;
    } else setIsValidUsername(true);

    if (!password) {
      setIsValidPassword(false);
      validForm = false;
    } else setIsValidPassword(true);

    if (!validForm) {
      setSubmitDisabled(false);
      return;
    }

    // After registration, login user automatically
    await axios
      .post(`${BASE_URL}/user`, { name: select + name, email: username })
      .then(() => {
        axios
          .post(`${BASE_URL}/login`, { username, password })
          .then((response) => {
            localStorage.setItem("token", response.data.userId);
            setToken(response.data.userId);
          })
          .catch((err) => validate_error(err));
      })
      .catch((err) => validate_error(err));
  };

  return (
    <form className="form">
      <Helmet>
        <title>Kite | Register</title>
      </Helmet>
      <h1 className="title">Kite</h1>
      <div className="input--flex--row">
        <select
          className="form__select"
          value={select}
          onChange={(e) => setSelect(e.target.value)}
        >
          <option value="">-</option>
          <option value="Mr. ">Mr.</option>
          <option value="Mrs. ">Mrs.</option>
          <option value="Ms. ">Ms.</option>
          <option value="Miss ">Miss</option>
        </select>
        <AccountInput
          title="Name"
          type="text"
          value={name}
          setValue={setName}
          isValid={isValidName}
        ></AccountInput>
      </div>
      <AccountInput
        title="Email"
        type="text"
        value={username}
        setValue={setUsername}
        isValid={isValidUsername}
      ></AccountInput>
      <AccountInput
        title="Password"
        type="password"
        value={password}
        setValue={setPassword}
        isValid={isValidPassword}
      ></AccountInput>
      <Button
        className="form__submit"
        title="Register"
        handleClick={submitForm}
        disabled={submitDisabled}
      />
      <p
        className="form__change-page "
        style={{
          display: "block",
          textAlign: "center",
          marginTop: 16,
          letterSpacing: 1.15,
        }}
      >
        Already have an account?
        <br />
        <Link
          to="../login"
          style={{
            textDecoration: "none",
            color: "var(--clr-blue-1)",
            fontWeight: "bold",
          }}
        >
          Login
        </Link>
      </p>
    </form>
  );
}

export default register;
