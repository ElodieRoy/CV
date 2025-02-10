import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef, ElementType } from "react";
import { useFormStatus } from "react-dom";

export function Input<T extends ElementType>({
  as,
  ...props
}: {
  as?: T;
} & ComponentPropsWithoutRef<T>) {
  const Comp = as ?? "input";
  const { pending } = useFormStatus();
  return (
    <Comp
      disabled={pending}
      type="text"
      {...props}
      className={cn(
        "bg-background2 shadow-md rounded-lg py-2 px-4 hover:ring-1 ring-primary ring-offset-background hover:ring-offset-3 focus:outline-0 focus:ring-2 transition-all",
        props.className
      )}
    />
  );
}
