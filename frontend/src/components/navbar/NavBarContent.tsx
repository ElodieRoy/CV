import { useTranslation } from "react-i18next";

type NavBarContentProps = {
  onItemClick?: () => void;
};

export function NavBarContent({ onItemClick }: NavBarContentProps) {
  const { t } = useTranslation();
  const menu = Object.entries(t("menu", { returnObjects: true }));

  return (
    <ul className="flex flex-col lg:flex-row gap-10">
      {menu.map(([key, value]) => (
        <li key={key} className="relative group w-fit" onClick={onItemClick}>
          <a className="relative" href={`#${key}`}>
            {value}
          </a>
          <span className="absolute left-0 -bottom-1 w-0 h-1 lg:h-0.5 rounded-md bg-background transition-all duration-300 group-hover:w-full" />
        </li>
      ))}
    </ul>
  );
}
