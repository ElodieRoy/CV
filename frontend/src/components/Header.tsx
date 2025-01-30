import { DesktopNavBar } from "@/components/navbar/DesktopNavBar";
import { MobileNavBar } from "@/components/navbar/MobileNavBar";

export function Header() {
  return (
    <header className="fixed left-0 right-0 text-light p-4 lg:container mx-auto flex justify-end">
      <DesktopNavBar />
      <MobileNavBar />
    </header>
  );
}
