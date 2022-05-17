import React from "react";
import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import axios from "axios";

import AccountInput from "../../components/AccountInput";
import Button from "../../components/Button";

import "./register.css";

function register() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [token, setToken] = useState(localStorage.getItem("token"));

  const [select, setSelect] = useState("");

  const navigate = useNavigate();
  const BASE_URL = process.env.REACT_APP_API_ENDPOINT;

  // Redirect home if there is an auth token
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  const submitForm = (e) => {
    e.preventDefault();
    console.log({ name: select + name, username, password });
    // axios.post(`${BASE_URL}/login`, { username, password }).then((response) => {
    //   localStorage.setItem("token", response.data.userId);
    //   setToken(response.data.userId);
    // });
  };

  return (
    <form className="form">
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
        </select>
        <AccountInput
          title="Name"
          type="text"
          value={name}
          setValue={setName}
        ></AccountInput>
      </div>
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
        title="Register"
        handleClick={submitForm}
      />
    </form>
  );
}

export default register;
