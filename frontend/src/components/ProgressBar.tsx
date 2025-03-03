import { cn, getPercentFrom2006 } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

export function ProgressBar({ className }: ComponentPropsWithoutRef<"div">) {
  return (
    <div className={className}>
      <div id="progress-bar" className="relative h-1 bg-foreground2">
        <BulletPrimary id="progress-bar-start" />
        {/* 2011 */}
        <BulletForeground style={{ left: `${getPercentFrom2006(2011)}%` }} />
        <BulletPrimary
          id="progress-bar-1"
          style={{ left: `${getPercentFrom2006(2011)}%` }}
        />
        {/* 2020 */}
        <BulletForeground style={{ left: `${getPercentFrom2006(2020)}%` }} />
        <BulletPrimary
          id="progress-bar-2"
          style={{ left: `${getPercentFrom2006(2020)}%` }}
        />
        {/* 2022 */}
        <BulletForeground style={{ left: `${getPercentFrom2006(2022)}%` }} />
        <BulletPrimary
          id="progress-bar-3"
          style={{ left: `${getPercentFrom2006(2022)}%` }}
        />
        <BulletForeground className="right-0" />
        <BulletPrimary id="progress-bar-4" className="right-0" />
        <div id="progress" className="h-full bg-primary" />
      </div>
    </div>
  );

  function Bullet({ className, ...props }: ComponentPropsWithoutRef<"span">) {
    return (
      <span
        {...props}
        className={cn("absolute -top-1 rounded-full size-3", className)}
      />
    );
  }

  function BulletForeground({
    className,
    ...props
  }: ComponentPropsWithoutRef<"span">) {
    return (
      <Bullet {...props} className={cn("bg-foreground2 z-1", className)} />
    );
  }

  function BulletPrimary({
    className,
    ...props
  }: ComponentPropsWithoutRef<"span">) {
    return <Bullet {...props} className={cn("bg-primary z-2", className)} />;
  }
}
