import React from "react";

type NavLinksProps = {
  className?: string;
  onLinkClick?: () => void;
};

export default function NavLinksMobile({
  className = "",
  onLinkClick,
}: NavLinksProps) {
  return (
    <ul
      className={`${className} flex gap-2 xl:flex-row flex-col xl:flex xl:items-center`}
    >
      <li className="nav-item item-mobile">
        <a className="nav-link mobile" href="/" onClick={onLinkClick}>
          HOME
        </a>
      </li>
      <li className="nav-item item-mobile">
        <a className="nav-link mobile" href="#experience" onClick={onLinkClick}>
          EXPERIENCE
        </a>
      </li>
      <li className="nav-item item-mobile">
        <a className="nav-link mobile" href="#education" onClick={onLinkClick}>
          EDUCATION
        </a>
      </li>
      <li className="nav-item item-mobile">
        <a className="nav-link mobile" href="#resume" onClick={onLinkClick}>
          RESUME
        </a>
      </li>
      <li className="nav-item item-mobile">
        <a className="nav-link mobile" href="#projects" onClick={onLinkClick}>
          PROJECTS
        </a>
      </li>
    </ul>
  );
}
