import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

import { RoomProvider } from "./context";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RoomProvider>
      <App />
    </RoomProvider>
  </React.StrictMode>
);
