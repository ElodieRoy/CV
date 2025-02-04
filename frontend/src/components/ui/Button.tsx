import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

export function Button(props: ComponentPropsWithoutRef<"button">) {
  return (
    <button
      {...props}
      className={twMerge(
        "border border-background py-2 px-4 rounded-full hover:bg-background transition-all hover:text-foreground/70",
        props.className
      )}
    >
      {props.children}
    </button>
  );
}
