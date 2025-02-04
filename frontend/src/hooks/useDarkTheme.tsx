import { DarkThemeContext } from "@/contexts/DarkThemeContext";
import { useContext } from "react";

export const useDarkTheme = () => {
  const context = useContext(DarkThemeContext);
  if (!context)
    throw new Error("useDarkTheme must be used within an AuthProvider");
  return context;
};
