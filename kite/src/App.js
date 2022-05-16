import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import PrivateRoute from "./auth/PrivateRoute";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Error from "./pages/Error/Error";

import "./app.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<PrivateRoute />}>
          <Route exact path="/" element={<Home />} />
        </Route>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
