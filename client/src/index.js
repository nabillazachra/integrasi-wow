import React from "react";
import ReactDOM from "react-dom";
import "./assets/styles/index.css";

import { UserContextProvider } from "./context/userContext";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
