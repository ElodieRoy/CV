import App from "@/App";
import { Loading } from "@/components/Loading";
import { DarkThemeProvider } from "@/contexts/DarkThemeProvider";
import { ScrollProvider } from "@/contexts/ScrollProvider";
import "@/i18n.ts";
import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DarkThemeProvider>
      <ScrollProvider>
        <Suspense fallback={<Loading />}>
          <App />
        </Suspense>
      </ScrollProvider>
    </DarkThemeProvider>
  </StrictMode>,
);
