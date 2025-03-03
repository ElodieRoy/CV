import { cn, getPercentFrom2006 } from "@/lib/utils";
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
        <BulletPrimary id="progress-bar-start" />
        {/* 2011 */}
        <BulletForeground style={{ top: `${getPercentFrom2006(2011)}%` }} />
        <BulletPrimary
          id="progress-bar-1"
          style={{ top: `${getPercentFrom2006(2011)}%` }}
        />
        {/* 2020 */}
        <BulletForeground style={{ top: `${getPercentFrom2006(2020)}%` }} />
        <BulletPrimary
          id="progress-bar-2"
          style={{ top: `${getPercentFrom2006(2020)}%` }}
        />
        {/* 2022 */}
        <BulletForeground style={{ top: `${getPercentFrom2006(2022)}%` }} />
        <BulletPrimary
          id="progress-bar-3"
          style={{ top: `${getPercentFrom2006(2022)}%` }}
        />
        <BulletForeground className="bottom-0" />
        <BulletPrimary id="progress-bar-4" className="bottom-0" />
        <div id="vertical-progress" className="h-full w-full bg-primary" />
      </div>
    </div>
  );
}

function Bullet({ className, ...props }: ComponentPropsWithoutRef<"span">) {
  return (
    <span
      {...props}
      className={cn("absolute -left-1 rounded-full size-3", className)}
    />
  );
}

function BulletForeground({
  className,
  ...props
}: ComponentPropsWithoutRef<"span">) {
  return <Bullet {...props} className={cn("bg-foreground2 z-1", className)} />;
}

function BulletPrimary({
  className,
  ...props
}: ComponentPropsWithoutRef<"span">) {
  return <Bullet {...props} className={cn("bg-primary z-2", className)} />;
}
