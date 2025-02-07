import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentPropsWithoutRef, ElementType } from "react";

const typographyVariants = cva("selection:bg-red-500/70 selection:text-light", {
  variants: {
    type: {
      h1: "select-all scroll-m-20 font-mono text-3xl font-bold",
      h2: "select-all scroll-m-20 text-3xl font-light tracking-tighter transition-colors lg:text-4xl",
      h3: "pt-20 lg:pt-18 text-center text-4xl font-semibold bg-linear-to-r from-pink-500 to-amber-500 bg-clip-text text-transparent",
      h4: "text-primary text-3xl font-semibold",
      p: "text-lg leading-7 [&:not(:first-child)]:mt-6",
      default: "",
      quote: "mt-6 border-l-2 pl-6 italic",
      code: "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
      lead: "text-xl text-muted-foreground",
      large: "text-lg font-semibold",
      small: "text-md font-light leading-none",
      muted: "text-sm text-muted-foreground",
      link: "font-medium text-cyan-600 hover:underline dark:text-primary",
    },
  },
});

type TypographyVariants = VariantProps<typeof typographyVariants>;
type Type = TypographyVariants["type"];

const defaultElementMapping: Record<NonNullable<Type>, ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  p: "p",
  quote: "p",
  code: "code",
  lead: "p",
  large: "p",
  small: "p",
  muted: "p",
  link: "a",
  default: "p",
};

type TypographyProps<T extends ElementType> = {
  className?: string;
  as?: T;
  type: NonNullable<Type>;
} & ComponentPropsWithoutRef<T>;

export function Typography<T extends ElementType>({
  className,
  as,
  type = "default",
  ...props
}: TypographyProps<T>) {
  const Comp = as ?? defaultElementMapping[type];
  return (
    <Comp {...props} className={cn(typographyVariants({ type }), className)} />
  );
}
