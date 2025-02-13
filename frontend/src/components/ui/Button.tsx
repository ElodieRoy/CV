import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

export function Button({
  className,
  isLoading = false,
  ...props
}: { isLoading?: boolean } & ComponentPropsWithoutRef<"button">) {
  return (
    <button
      className={cn(
        "border border-foreground py-2 px-4 rounded-full flex items-center justify-center",
        {
          "hover:bg-foreground2 transition-all hover:text-background":
            !isLoading,
        },
        { "opacity-50 cursor-not-allowed": isLoading },
        className,
      )}
      {...props}
    >
      <span>{props.children}</span>
      {isLoading && (
        <span
          className={
            "size-4 rounded-full inline-block ml-2 border border-foreground border-t-0 animate-spin"
          }
        />
      )}
    </button>
  );
}
