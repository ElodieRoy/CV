/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

import React, {
  ComponentPropsWithRef,
  ElementType,
  ForwardedRef,
  forwardRef,
} from "react";

type FixedForwardRef = <T, P = {}>(
  render: (props: P, ref: React.Ref<T>) => React.ReactNode,
) => (props: P & React.RefAttributes<T>) => React.ReactNode;

const fixedForwardRef = forwardRef as FixedForwardRef;

type DistributiveOmit<T, TOmitted extends PropertyKey> = T extends any
  ? Omit<T, TOmitted>
  : never;

export const typographyVariants = cva("selection:bg-primary/50", {
  variants: {
    variant: {
      h1: "select-all scroll-m-20 font-mono text-xl font-bold tracking-tight lg:text-3xl",
      h2: "select-all scroll-m-20 text-lg font-normal tracking-tight text-primary transition-colors  lg:text-xl",
      p: "leading-7 [&:not(:first-child)]:mt-6",
      default: "",
      quote: "mt-6 border-l-2 pl-6 italic",
      code: "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
      lead: "text-xl text-muted-foreground",
      large: "text-lg font-semibold",
      small: "text-sm font-medium leading-none",
      muted: "text-sm text-muted-foreground",
      link: "font-medium text-cyan-600 hover:underline dark:text-primary",
    },
  },
});

type TypographyCvaProps = VariantProps<typeof typographyVariants>;
type TypographyVariant = TypographyCvaProps["variant"];

const defaultElementMapping = {
  h1: "h1",
  h2: "h2",
  p: "p",
  quote: "p",
  code: "code",
  lead: "p",
  large: "p",
  small: "p",
  muted: "p",
  link: "a",
  default: "p",
} satisfies Record<NonNullable<TypographyVariant>, ElementType>;

type ElementMapping = typeof defaultElementMapping;
type ElementTypeForVariant<TVariant extends keyof ElementMapping> =
  ElementMapping[TVariant];

const InnerTypography = <
  TAs extends ElementType,
  TVariant extends TypographyVariant = "default",
>(
  {
    className,
    variant = "default",
    as,
    ...props
  }: {
    as?: TAs;
    variant?: TVariant;
  } & DistributiveOmit<
    ComponentPropsWithRef<
      ElementType extends TAs
        ? ElementTypeForVariant<NonNullable<TVariant>>
        : TAs
    >,
    "as"
  >,
  ref: ForwardedRef<any>,
) => {
  const Comp = as ?? defaultElementMapping[variant ?? "default"];
  return (
    <Comp
      {...props}
      className={cn(
        typographyVariants({
          className,
          variant,
        }),
      )}
      ref={ref}
    ></Comp>
  );
};

// Can be passed 'as' prop but defaults to 'a'
export const Typography = fixedForwardRef(InnerTypography);
