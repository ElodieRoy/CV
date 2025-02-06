import { createContext } from "react";

type DarkModeContextType = { isDarkMode: boolean; toggleDarkMode: () => void };

export const DarkThemeContext = createContext<DarkModeContextType | undefined>(
  undefined,
);
