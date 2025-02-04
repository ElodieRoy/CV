import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

export function Container(props: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      {...props}
      className={twMerge(
        "container mx-auto pt-16 lg:pt-14 px-3 lg:px-5 max-w-6xl",
        props.className,
      )}
    >
      {props.children}
    </div>
  );
}
