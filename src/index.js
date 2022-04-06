import React from "react";
import ReactDOM from "react-dom";
// Componentes
import App from "./App";
// `Bootstrap
import * as bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// Internal CSS
import "./assets/css/styles.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
