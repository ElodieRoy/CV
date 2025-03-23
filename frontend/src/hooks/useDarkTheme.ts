import { DarkThemeContext } from "@/contexts/DarkThemeContext";
import { use } from "react";

export const useDarkTheme = () => {
  const context = use(DarkThemeContext);
  if (!context)
    throw new Error("useDarkTheme must be used within an DarkThemeProvider");
  return context;
};
