import { ThemeButton } from "@/components/ui/ThemeButton";
import { useIsScrolled } from "@/hooks/useIsScrolled";
import { cn } from "@/lib/utils";

export function ToolBar() {
  const { isScrolled } = useIsScrolled();
  return (
    <div
      className={cn(
        "max-lg:hidden bg-primary fixed right-0 top-1/4 rounded-l-2xl transition-all flex p-3 w-fit flex-col gap-5 translate-x-full",
        {
          "translate-x-0": isScrolled,
        }
      )}
    >
      <ThemeButton />
      <ThemeButton />
      <ThemeButton />
    </div>
  );
}
