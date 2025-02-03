import { DesktopNavBar } from "@/components/navbar/DesktopNavBar";
import { MobileNavBar } from "@/components/navbar/MobileNavBar";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

window.onscroll = function () {
  const navbar = document.getElementById("navbar");
  if (navbar) {
    if (window.scrollY > 500) {
      // Si le scroll dépasse 50px
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }
};

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
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
          scrolled,
      })}
    >
      <Container className="fixed left-0 right-0 text-light p-4 flex justify-end z-1 lg:max-w-6xl pt-4 lg:pt-4">
        <DesktopNavBar />
        <MobileNavBar />
      </Container>
    </header>
  );
}
