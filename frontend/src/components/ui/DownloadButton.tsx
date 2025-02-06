import { cn } from "@/lib/utils";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import { ComponentPropsWithoutRef } from "react";

export function DownloadButton({
  className,
  ...props
}: ComponentPropsWithoutRef<"button">) {
  return (
    <button {...props} className={cn("size-6 text-light", className)}>
      <ArrowDownTrayIcon className="size-full" />
    </button>
  );
}
