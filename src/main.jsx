import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles/index.css";
import App from "./App.jsx";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // chỉ cần import 1 lần
config.autoAddCss = false; // tránh double-inject

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
