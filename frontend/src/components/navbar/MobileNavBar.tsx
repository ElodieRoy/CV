import { NavBarContent } from "@/components/navbar/NavBarContent";
import { Socials } from "@/components/Socials";
import {
  DownloadButton,
  LanguageButton,
  ThemeButton,
} from "@/components/ui/IconButtons";
import { Typography } from "@/components/ui/Typography";
import { CURRENT_YEAR } from "@/constants";
import { useIsScrolled } from "@/hooks/useIsScrolled";
import { cn } from "@/lib/utils";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export function MobileNavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isScrolled } = useIsScrolled();

  return (
    <>
      {isMenuOpen && (
        <div
          className="lg:hidden h-screen w-screen absolute z-1 top-0"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
      <span
        className={cn("lg:hidden font-bold text-2xl opacity-0 transition-all", {
          "opacity-100 delay-400": isScrolled,
        })}
      >
        Elodie ROY
      </span>
      <div className="lg:hidden ml-auto flex gap-4 items-center">
        <ThemeButton
          className={cn("size-0 lg:hidden", {
            "size-6 delay-300": isScrolled,
          })}
        />
        <LanguageButton
          className={cn("lg:hidden size-0", {
            "size-6 delay-300": isScrolled,
          })}
        />
        <DownloadButton
          className={cn("lg:hidden size-0", {
            "size-6 delay-300": isScrolled,
          })}
        />
        <button
          className="relative size-9 z-3"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <XMarkIcon
            className={cn(
              "absolute right-0 top-0 size-full scale-0 transition-all duration-500 rotate-0",
              {
                "scale-100 rotate-90": isMenuOpen,
              },
            )}
          />
          <Bars3Icon
            className={cn(
              "absolute right-0 top-0 size-full scale-100 transition-all duration-500",
              {
                "scale-0": isMenuOpen,
              },
            )}
          />
        </button>
      </div>
      <div
        className={cn(
          "lg:hidden fixed z-2 top-0 right-0 w-4/5 md:w-2/5 sm:w-3/5 bg-primary h-screen translate-x-full transition-all duration-500 py-22 flex flex-col justify-between pl-20 text-[0px] font-normal",
          { "translate-x-0 text-2xl": isMenuOpen },
        )}
      >
        <NavBarContent onItemClick={() => setIsMenuOpen(false)} />
        <div>
          <Socials />
          <Typography type="muted">@{CURRENT_YEAR} - By Elodie ROY</Typography>
        </div>
      </div>
    </>
  );
}
