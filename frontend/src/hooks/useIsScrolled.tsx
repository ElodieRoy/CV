import { ScrollContext } from "@/contexts/ScrollContext";
import { useContext } from "react";

export const useIsScrolled = () => {
  const context = useContext(ScrollContext);
  if (!context)
    throw new Error("useIsScrolled must be used within an ScrollProvider");
  return context;
};
