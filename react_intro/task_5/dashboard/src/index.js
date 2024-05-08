import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import Notifications from "./Notifications/Notifications";

// Root App
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Root Notifications
const rootNotif = ReactDOM.createRoot(
  document.getElementById("root-notifications")
);
rootNotif.render(
  <React.StrictMode>
    <Notifications />
  </React.StrictMode>
);