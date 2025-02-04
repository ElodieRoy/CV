import { DesktopNavBar } from "@/components/navbar/DesktopNavBar";
import { MobileNavBar } from "@/components/navbar/MobileNavBar";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export function Header() {
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

  return (
    <header
      className={cn("h-0 fixed top-0 w-full z-2 transition-all duration-500", {
        "bg-linear-to-r from-pink-500 to-amber-500 h-16 lg:h-14 shadow-2xl":
          isScrolled,
      })}
    >
      <Container className="fixed left-0 right-0 text-background h-16 lg:h-14 px-4 z-1 flex items-center lg:max-w-6xl pt-0 lg:pt-0 gap-2">
        <DesktopNavBar />
        <MobileNavBar isScrolled={isScrolled} />
      </Container>
    </header>
  );
}
