import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

type DarkModeContextType = { isDarkMode: boolean; toggleDarkMode: () => void };

const DarkThemeContext = createContext<DarkModeContextType | undefined>(
  undefined,
);

export const DarkThemeProvider = ({ children }: PropsWithChildren) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    localStorage.currentTheme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches),
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

// eslint-disable-next-line react-refresh/only-export-components
export const useDarkTheme = () => {
  const context = useContext(DarkThemeContext);
  if (!context)
    throw new Error("useDarkTheme must be used within an AuthProvider");
  return context;
};
