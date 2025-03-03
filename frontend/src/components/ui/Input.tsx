import { FormData } from "@/components/form/types";
import { Typography } from "@/components/ui/Typography";
import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef, ElementType } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

type InputProps<T extends ElementType> = {
  as?: T;
  name: keyof FormData;
  register: UseFormRegister<FormData>;
  error: FieldError | undefined;
  valueAsNumber?: boolean;
};

export function Input<T extends ElementType>({
  as,
  name,
  register,
  error,
  valueAsNumber,
  ...props
}: InputProps<T> & ComponentPropsWithoutRef<T>) {
  const Comp = as ?? "input";

  return (
    <div className={props.className}>
      <Comp
        area-label={name}
        type="text"
        {...props}
        className={cn(
          "w-full bg-background2 shadow-md rounded-lg py-2 px-4 hover:ring-1 ring-primary ring-offset-background hover:ring-offset-3 focus:outline-0 focus:ring-2",
          { "ring-1 ring-red-400": error },
        )}
        {...register(name, { valueAsNumber })}
      />
      {error && (
        <Typography type="error" className="pt-1">
          {error.message}
        </Typography>
      )}
    </div>
  );
}
