import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

type CardProps = { title: string };

export function Card({
  title,
  className,
  children,
  ...props
}: CardProps & ComponentPropsWithoutRef<"div">) {
  return (
    <div
      {...props}
      className={cn("rounded-lg bg-background2 p-6 shadow", className)}
    >
      <h3 className="text-xl font-semibold text-foreground mb-4">{title}</h3>
      {children}
    </div>
  );
}
