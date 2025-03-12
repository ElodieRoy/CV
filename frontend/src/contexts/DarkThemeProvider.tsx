import { DarkThemeContext } from "@/contexts/DarkThemeContext";
import { PropsWithChildren, useEffect, useState } from "react";

export const DarkThemeProvider = ({ children }: PropsWithChildren) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    localStorage.currentTheme === "dark" || !("theme" in localStorage)
  );

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <DarkThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkThemeContext.Provider>
  );
};
