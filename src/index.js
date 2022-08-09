import React from "react";
import ReactDOM from "react-dom/client";
import ModalPlugin from "./components/ModalPlugin";

// Rendering the whole app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ModalPlugin />
  </React.StrictMode>
);
