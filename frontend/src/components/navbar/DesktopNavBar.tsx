export function DesktopNavBar() {
  return (
    <nav className="max-lg:hidden mr-10 2xl:mr-32">
      <ul className="flex space-x-4">
        <li>
          <a href="#profile">Profil</a>
        </li>
        <li>
          <a href="#skills">Compétences</a>
        </li>
        <li>
          <a href="#experiences">Expériences</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
