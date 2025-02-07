import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";
import { useFormStatus } from "react-dom";

export function Button({
  className,
  ...props
}: { isLoading?: boolean } & ComponentPropsWithoutRef<"button">) {
  const { pending } = useFormStatus();
  return (
    <button
      className={cn(
        "border border-light py-2 px-4 rounded-full flex items-center justify-center",
        { "hover:bg-light transition-all hover:text-dark/70": !pending },
        { "opacity-50 cursor-not-allowed": pending },
        className
      )}
      {...props}
    >
      <span>{props.children}</span>
      {pending && (
        <span
          className={
            "size-4 rounded-full inline-block ml-2 border border-foreground border-t-0 animate-spin"
          }
        />
      )}
    </button>
  );
}
