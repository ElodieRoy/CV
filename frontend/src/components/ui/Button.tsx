import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

export function Button(props: ComponentPropsWithoutRef<"button">) {
  return (
    <button
      {...props}
      className={twMerge(
        "border border-light py-2 px-4 rounded-full hover:bg-light transition-all hover:text-dark/70",
        props.className
      )}
    >
      {props.children}
    </button>
  );
}
