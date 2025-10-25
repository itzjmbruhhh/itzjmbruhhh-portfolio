type NavLinksProps = {
  className?: string;
  onLinkClick?: () => void;
  activeId?: string | null;
};

export default function NavLinksMobile({
  className = "",
  onLinkClick,
  activeId = null,
}: NavLinksProps) {
  return (
    <ul
      className={`${className} flex gap-2 xl:flex-row flex-col xl:flex xl:items-center`}
    >
      <li className="nav-item item-mobile">
        <a
          className={`nav-link mobile ${
            activeId === "home" ? "text-(--color-gray) font-semibold" : ""
          }`}
          href="#home"
          onClick={onLinkClick}
          aria-current={activeId === "home" ? "page" : undefined}
        >
          HOME
        </a>
      </li>
      <li className="nav-item item-mobile">
        <a
          className={`nav-link mobile ${
            activeId === "experience" ? "text-(--color-gray) font-semibold" : ""
          }`}
          href="#experience"
          onClick={onLinkClick}
          aria-current={activeId === "experience" ? "page" : undefined}
        >
          EXPERIENCE
        </a>
      </li>
      <li className="nav-item item-mobile">
        <a
          className={`nav-link mobile ${
            activeId === "education" ? "text-(--color-gray) font-semibold" : ""
          }`}
          href="#education"
          onClick={onLinkClick}
          aria-current={activeId === "education" ? "page" : undefined}
        >
          EDUCATION
        </a>
      </li>
      <li className="nav-item item-mobile">
        <a
          className={`nav-link mobile ${
            activeId === "resume" ? "text-(--color-gray) font-semibold" : ""
          }`}
          href="#resume"
          onClick={onLinkClick}
          aria-current={activeId === "resume" ? "page" : undefined}
        >
          RESUME
        </a>
      </li>
      <li className="nav-item item-mobile">
        <a
          className={`nav-link mobile ${
            activeId === "projects" ? "text-(--color-gray) font-semibold" : ""
          }`}
          href="#projects"
          onClick={onLinkClick}
          aria-current={activeId === "projects" ? "page" : undefined}
        >
          PROJECTS
        </a>
      </li>
    </ul>
  );
}
