import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";

export function Social({ className }: ComponentPropsWithoutRef<"div">) {
  return (
    <div className={cn("flex gap-4", className)}>
      <a href="https://linkedin.com/in/eroy" target="_blank" rel="noreferrer">
        <SiLinkedin className="size-6 rounded transition-all hover:text-primary" />
      </a>
      <a href="https://github.com/ElodieRoy" target="_blank" rel="noreferrer">
        <SiGithub className="size-6 rounded transition-all hover:text-primary" />
      </a>
    </div>
  );
}
