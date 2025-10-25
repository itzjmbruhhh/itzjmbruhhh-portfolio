import React from "react";

type NavLinksProps = {
  className?: string;
  onLinkClick?: () => void;
};

export default function NavLinks({
  className = "",
  onLinkClick,
}: NavLinksProps) {
  return (
    <ul
      className={`${className} flex gap-2 xl:flex-row flex-col xl:flex xl:items-center`}
    >
      <li className="nav-item">
        <a className="nav-link" href="#home" onClick={onLinkClick}>
          HOME
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#experience" onClick={onLinkClick}>
          EXPERIENCE
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#education" onClick={onLinkClick}>
          EDUCATION
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#resume" onClick={onLinkClick}>
          RESUME
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#projects" onClick={onLinkClick}>
          PROJECTS
        </a>
      </li>
    </ul>
  );
}
