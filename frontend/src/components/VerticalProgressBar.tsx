import { ComponentPropsWithoutRef } from "react";

export function VerticalProgressBar({
  className,
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div className={className}>
      <div
        id="vertical-progress-bar"
        className="relative w-full h-full bg-foreground2"
      >
        <span
          id="progress-bar-start"
          className="absolute -left-1 rounded-full bg-primary size-3 z-1"
        />
        <span className="absolute -left-1 bottom-0 rounded-full bg-foreground2 size-3 z-1" />
        <span
          id="progress-bar-end"
          className="absolute -left-1 bottom-0 rounded-full bg-primary size-3 z-2"
        />
        <div id="vertical-progress" className="h-full w-full bg-primary" />
      </div>
    </div>
  );
}
