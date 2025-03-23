import { ScrollContext } from "@/contexts/ScrollContext";
import { PropsWithChildren, useEffect, useState } from "react";

export const ScrollProvider = ({ children }: PropsWithChildren) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <ScrollContext value={{ isScrolled }}>{children}</ScrollContext>;
};
