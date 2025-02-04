import { DarkThemeProvider } from "@/contexts/DarkThemeProvider";
import "@/i18n/config.ts";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DarkThemeProvider>
      <App />
    </DarkThemeProvider>
  </StrictMode>
);
