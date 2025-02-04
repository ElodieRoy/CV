import { useDarkTheme } from "@/hooks/useDarkTheme";
import { cn } from "@/lib/utils";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { ComponentPropsWithoutRef } from "react";

export function ThemeButton(props: ComponentPropsWithoutRef<"button">) {
  const { toggleDarkMode } = useDarkTheme();
  return (
    <button
      {...props}
      className={cn("size-6 z-50 text-light relative", props.className)}
      onClick={toggleDarkMode}
    >
      <MoonIcon
        className="absolute top-0 scale-100 rotate-0 dark:scale-0 dark:rotate-180 transition-all size-full"
        onClick={() => (localStorage.currentTheme = "dark")}
        title="dark mode"
      />
      <SunIcon
        className="absolute top-0 scale-0 rotate-0 dark:scale-100 dark:rotate-180 transition-all size-full"
        onClick={() => (localStorage.currentTheme = "light")}
        title="light mode"
      />
    </button>
  );
}
