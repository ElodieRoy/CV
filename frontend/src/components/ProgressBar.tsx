import { cn, getPercentFrom2006 } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

export function ProgressBar({ className }: ComponentPropsWithoutRef<"div">) {
  return (
    <div className={className}>
      <div id="progress-bar" className="relative h-1 bg-light2">
        <BulletPrimary id="progress-bar-start" year="2006" />
        {/* 2011 */}
        <BulletForeground style={{ left: `${getPercentFrom2006(2011)}%` }} />
        <BulletPrimary
          id="progress-bar-1"
          year="2011"
          style={{ left: `${getPercentFrom2006(2011)}%` }}
        />
        {/* 2020 */}
        <BulletForeground style={{ left: `${getPercentFrom2006(2020)}%` }} />
        <BulletPrimary
          id="progress-bar-2"
          year="2020"
          style={{ left: `${getPercentFrom2006(2020)}%` }}
        />
        {/* 2022 */}
        <BulletForeground style={{ left: `${getPercentFrom2006(2022)}%` }} />
        <BulletPrimary
          id="progress-bar-3"
          year="2022"
          style={{ left: `${getPercentFrom2006(2022)}%` }}
        />
        <BulletForeground className="right-0" />
        <BulletPrimary id="progress-bar-4" className="right-0" year="" />
        <div className="h-full w-full overflow-x-hidden">
          <div id="progress" className="h-full bg-primary" />
        </div>
      </div>
    </div>
  );

  function Bullet({
    className,
    children,
    ...props
  }: ComponentPropsWithoutRef<"span">) {
    return (
      <span
        {...props}
        className={cn("absolute -top-1 rounded-full size-3", className)}
      >
        {children}
      </span>
    );
  }

  function BulletForeground({
    className,
    ...props
  }: ComponentPropsWithoutRef<"span">) {
    return <Bullet {...props} className={cn("bg-light2 z-1", className)} />;
  }

  function BulletPrimary({
    year,
    className,
    ...props
  }: { year: string } & ComponentPropsWithoutRef<"span">) {
    return (
      <Bullet
        {...props}
        className={cn("bg-primary z-2 text-primary", className)}
      >
        <span className="absolute top-3 font-bold text-xs">{year}</span>
      </Bullet>
    );
  }
}
