import { cn } from "@/lib/utils";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

export function MobileNavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      {isMenuOpen && (
        <div
          className="lg:hidden h-screen w-screen absolute z-1 top-0"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
      <button
        className="lg:hidden z-3 relative"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <XMarkIcon
          className={cn(
            "absolute right-0 size-9 scale-0 transition-all duration-500 rotate-0",
            {
              "scale-100 rotate-90": isMenuOpen,
            }
          )}
        />
        <Bars3Icon
          className={cn(
            "absolute right-0 size-9 scale-100 transition-all duration-500",
            {
              "scale-0": isMenuOpen,
            }
          )}
        />
      </button>
      <div
        className={cn(
          "lg:hidden fixed z-2 top-0 right-0 sm:w-3/5 w-4/5 bg-primary h-screen translate-x-full transition-all duration-500",
          { "translate-x-0": isMenuOpen }
        )}
      ></div>
    </>
  );
}
