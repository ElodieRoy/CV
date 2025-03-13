import { cn, getPercentFrom2006 } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

export function VerticalProgressBar({
  className,
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div className={className}>
      <div
        id="vertical-progress-bar"
        className="relative w-full h-full bg-light2"
      >
        <BulletPrimary id="progress-bar-start" year="2006" />
        {/* 2011 */}
        <BulletForeground style={{ top: `${getPercentFrom2006(2011)}%` }} />
        <BulletPrimary
          id="progress-bar-1"
          year="2011"
          style={{ top: `${getPercentFrom2006(2011)}%` }}
        />
        {/* 2020 */}
        <BulletForeground style={{ top: `${getPercentFrom2006(2020)}%` }} />
        <BulletPrimary
          id="progress-bar-2"
          year="2020"
          style={{ top: `${getPercentFrom2006(2020)}%` }}
        />
        {/* 2022 */}
        <BulletForeground style={{ top: `${getPercentFrom2006(2022)}%` }} />
        <BulletPrimary
          id="progress-bar-3"
          year="2022"
          style={{ top: `${getPercentFrom2006(2022)}%` }}
        />
        <BulletForeground className="bottom-0" />
        <BulletPrimary id="progress-bar-4" year="" className="bottom-0" />
        <div className="h-full overflow-y-hidden">
          <div id="vertical-progress" className="h-full w-full bg-primary" />
        </div>
      </div>
    </div>
  );
}

function Bullet({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"span">) {
  return (
    <span
      {...props}
      className={cn("absolute -left-1 rounded-full size-3", className)}
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
    <Bullet {...props} className={cn("bg-primary z-2 text-primary", className)}>
      <span className="absolute -left-10 font-bold text-sm">{year}</span>
    </Bullet>
  );
}
