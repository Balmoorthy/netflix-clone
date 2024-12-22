import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { DarkModeProvider } from "./context/DarkModeProvider.jsx";
import { LoadingProvider } from "./context/LoadingProvider.jsx";
// import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LoadingProvider>
      <DarkModeProvider>
        <App />
      </DarkModeProvider>
    </LoadingProvider>
  </StrictMode>
);
