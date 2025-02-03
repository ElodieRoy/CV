import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

export function Container(props: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      {...props}
      className={twMerge("container mx-auto py-10", props.className)}
    >
      {props.children}
    </div>
  );
}
