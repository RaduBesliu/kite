import React from "react";
import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import axios from "axios";

import AccountInput from "../../components/AccountInput";
import Button from "../../components/Button";

import "./login.css";

function login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {});

  const navigate = useNavigate();
  const BASE_URL = process.env.REACT_APP_API_ENDPOINT;

  // Redirect home if there is no auth token
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);

  const submitForm = (e) => {
    e.preventDefault();
    axios.post(`${BASE_URL}`, {});
  };

  return (
    <form className="form">
      <h1 className="title">Kite</h1>
      <AccountInput
        title="Username"
        type="text"
        value={userName}
        setValue={setUserName}
      ></AccountInput>
      <AccountInput
        title="Password"
        type="password"
        value={password}
        setValue={setPassword}
      ></AccountInput>
      <Button className="form__submit" title="Login" handleClick={submitForm} />
    </form>
  );
}

export default login;
