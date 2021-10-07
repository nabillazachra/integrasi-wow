import React from "react";
import ReactDOM from "react-dom";
import "./assets/styles/index.css";
import { BrowserRouter as Router } from "react-router-dom";

import { UserContextProvider } from "./context/userContext";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <Router>
        <App />
      </Router>
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
