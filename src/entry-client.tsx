import "./index.css";
import { StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import App from "./app";
import { RouterProvider } from "./router";

hydrateRoot(
  document.getElementById("root") as HTMLElement,
  <StrictMode>
    <RouterProvider>
      <App />
    </RouterProvider>
  </StrictMode>,
);
