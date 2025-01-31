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
        <li key={key}>
          <a className="relative" href={`#${key}`} onClick={onItemClick}>
            {value}
          </a>
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
        </li>
      ))}
    </ul>
  );
}
