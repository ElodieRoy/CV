import { DesktopNavBar } from "@/components/navbar/DesktopNavBar";
import { MobileNavBar } from "@/components/navbar/MobileNavBar";
import { Container } from "@/components/ui/Container";
import { useIsScrolled } from "@/hooks/useIsScrolled";
import { cn } from "@/lib/utils";
import { Home } from "@/sections/Home";

export function Header() {
  const { isScrolled } = useIsScrolled();
  return (
    <header className="h-full 3xl:h-2/3">
      <div
        className={cn(
          "h-0 fixed top-0 w-full z-2 transition-all duration-500",
          {
            "bg-linear-to-r from-pink-500 to-amber-500 h-16 lg:h-14 shadow-2xl":
              isScrolled,
          },
        )}
      >
        <Container className="fixed left-0 right-0 text-light h-16 lg:h-14 px-4 z-1 flex items-center lg:max-w-6xl pt-0 lg:pt-0 gap-2">
          <DesktopNavBar />
          <MobileNavBar />
        </Container>
      </div>
      <Home />
    </header>
  );
}
