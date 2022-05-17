// React
import React from "react";

// Libraries
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Components
import PrivateRoute from "./auth/PrivateRoute";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Error from "./pages/Error/Error";

// Styles
import { GlobalStyles } from "./GlobalStyles.styles";

function App() {
  return (
    <Router>
      <GlobalStyles />
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
