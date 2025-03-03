import { Error } from "@/components/Error";
import { ComponentPropsWithoutRef } from "react";
import { ErrorBoundary } from "react-error-boundary";

export function Section({
  children,
  ...props
}: ComponentPropsWithoutRef<"section">) {
  return (
    <section {...props}>
      <ErrorBoundary fallback={<Error />}>{children}</ErrorBoundary>
    </section>
  );
}
