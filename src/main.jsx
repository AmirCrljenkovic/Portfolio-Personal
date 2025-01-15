import React from "react";
import ReactDOM from "react-dom/client";

// Belangrijk: importeer i18n vóórdat je App laadt
import "../src/i18n/i18n.js";

import App from "./App";
import "./index.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
