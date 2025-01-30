const menu = [
  { link: "#profile", label: "Profil" },
  { link: "#skills", label: "Compétences" },
  { link: "#experiences", label: "Expériences" },
  { link: "#contact", label: "Contact" },
];

type NavBarContentProps = {
  onItemClick?: () => void;
};

export function NavBarContent({ onItemClick }: NavBarContentProps) {
  return (
    <ul className="flex flex-col lg:flex-row gap-10">
      {menu.map((item) => (
        <li key={item.label}>
          <a href={item.link} onClick={onItemClick}>
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
