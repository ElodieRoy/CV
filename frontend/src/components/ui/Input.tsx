import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef, ElementType } from "react";

export function Input<T extends ElementType>({
  as,
  ...props
}: {
  as?: T;
} & ComponentPropsWithoutRef<T>) {
  const Comp = as ?? "input";
  return (
    <Comp
      {...props}
      className={cn(
        "bg-background2 rounded-xl py-2 px-4 hover:ring-1 ring-primary ring-offset-background ring-offset-3 focus:outline-0 focus:ring-2 transition-all",
        props.className
      )}
    />
  );
}
