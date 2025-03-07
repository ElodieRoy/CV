import { DesktopNavBar } from "@/components/navbar/DesktopNavBar";
import { MobileNavBar } from "@/components/navbar/MobileNavBar";
import { Container } from "@/components/ui/Container";
import { useIsScrolled } from "@/hooks/useIsScrolled";
import { cn } from "@/lib/utils";
import { Home } from "@/sections/Home";

export function Header() {
  const { isScrolled } = useIsScrolled();
  return (
    // <header className="h-full 3xl:h-2/3">
    <header className="h-full">
      <div
        className={cn(
          "h-20 lg:h-18 fixed -top-full w-full z-1 bg-nav transition-[top] duration-500",
          {
            "top-0": isScrolled,
          },
        )}
      />
      <Container
        className={cn(
          "fixed left-0 right-0 text-light h-16 lg:h-14 px-4 z-1 flex items-center lg:max-w-6xl pt-0 lg:pt-0 gap-2 lg:transition-[color] lg:duration-500",
          {
            "text-foreground2": isScrolled,
          },
        )}
      >
        <DesktopNavBar />
        <MobileNavBar />
      </Container>
      <Home />
    </header>
  );
}
