import { DarkThemeProvider } from "@/contexts/DarkThemeProvider";
import { ScrollProvider } from "@/contexts/ScrollProvider";
import "@/i18n/config.ts";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DarkThemeProvider>
      <ScrollProvider>
        <App />
      </ScrollProvider>
    </DarkThemeProvider>
  </StrictMode>
);
