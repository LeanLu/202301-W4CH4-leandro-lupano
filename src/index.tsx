import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./core/components/app/App";
import { AppContextProvider } from "./core/context/app.context.provider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>
);
