import { ScrollContext } from "@/contexts/ScrollContext";
import { use } from "react";

export const useIsScrolled = () => {
  const context = use(ScrollContext);
  if (!context)
    throw new Error("useIsScrolled must be used within an ScrollProvider");
  return context;
};
