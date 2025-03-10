import { NavBarContent } from "@/components/navbar/NavBarContent";

export function DesktopNavBar() {
  return (
    <nav className="max-lg:hidden ml-auto">
      <NavBarContent format="desktop" />
    </nav>
  );
}
