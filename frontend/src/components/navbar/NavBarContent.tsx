import { useIsScrolled } from "@/hooks/useIsScrolled";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

type NavBarContentProps = {
  onItemClick?: () => void;
  format: "desktop" | "mobile";
};

export function NavBarContent({ onItemClick, format }: NavBarContentProps) {
  const { isScrolled } = useIsScrolled();
  const { t } = useTranslation();
  const menu = Object.entries(t("menu", { returnObjects: true }));

  return (
    <ul className="flex flex-col lg:flex-row gap-10">
      {menu.map(([key, value]) => (
        <li key={key} className="relative group w-fit" onClick={onItemClick}>
          <a
            className="relative"
            href={`#${key === "profile" && format === "desktop" ? "home" : key}`}
            aria-label={`section-${key}`}
          >
            {value}
          </a>
          <span
            className={cn(
              "absolute left-0 -bottom-1 w-0 h-1 lg:h-0.5 rounded-md bg-light transition-all duration-300 group-hover:w-full",
              { "bg-foreground2": isScrolled },
            )}
          />
        </li>
      ))}
    </ul>
  );
}
