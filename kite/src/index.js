// React
import React from "react";
import ReactDOM from "react-dom/client";

// Libraries
import { Provider } from "react-redux";

// Store
import { store } from "./store";

// Components
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
