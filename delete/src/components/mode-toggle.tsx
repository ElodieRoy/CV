"use client";

import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { ComponentPropsWithoutRef } from "react";

export function ModeToggle({ className }: ComponentPropsWithoutRef<"button">) {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={cn("right-4 top-4 [&_svg]:size-8", className)}
    >
      <Moon className="absolute scale-100 dark:scale-0" />
      <Sun className="absolute scale-0 dark:scale-100" />
    </Button>
  );
}
