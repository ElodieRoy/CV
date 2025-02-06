import { createContext } from "react";

type ScrollContextType = { isScrolled: boolean };

export const ScrollContext = createContext<ScrollContextType | undefined>(
  undefined
);
