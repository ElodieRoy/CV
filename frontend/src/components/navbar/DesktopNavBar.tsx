import { NavBarContent } from "@/components/navbar/NavBarContent";

export function DesktopNavBar() {
  return (
    <nav className="max-lg:hidden mr-10 2xl:mr-32">
      <NavBarContent />
    </nav>
  );
}
