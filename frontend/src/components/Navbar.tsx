import logo from "../assets/logo/logo.png";
import { useState, useEffect } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50); // adjust the number to when you want it to trigger
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // close on ESC and lock body scroll when open
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKey);
    } else {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [menuOpen]);

  const navItems = (
    <ul className="flex gap-2 xl:flex-row flex-col xl:flex xl:items-center">
      <li className="nav-item">
        <a className="nav-link" href="/">
          HOME
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#experience">
          EXPERIENCE
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#education">
          EDUCATION
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#resume">
          RESUME
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#projects">
          PROJECTS
        </a>
      </li>
    </ul>
  );

  return (
    <header
      className={`rn-header xl:pl-12 xl:pr-12 sm:pl-0 sm:pr-0 ${
        isScrolled ? "header-scrolled" : "bg-transparent"
      }`}
    >
      {/* Header Wrapper Start */}
      <div className="header-wrapper">
        {/* Logo Start */}
        <div>
          <div className="header-left">
            <div className="logo">
              <a href="/">
                <img src={logo} alt="logo" />
              </a>
            </div>
          </div>
        </div>
        {/* Logo End */}

        {/* Desktop Nav (unchanged styling) - visible on md+ */}
        <div className="header-right mr-7 hidden xl:block">
          <nav>{navItems}</nav>
        </div>

        {/* Mobile hamburger - visible on small screens only */}
        <div className="xl:hidden flex items-center">
          <button
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((s) => !s)}
            className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            {/* simple hamburger icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {/* Header Wrapper End */}

      {/* Mobile slide-in menu + overlay */}
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-40 transition-opacity duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
        aria-hidden={!menuOpen}
      />

      {/* Slide-in panel */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 z-50 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="p-6">
          <div className="mb-6">
            <a href="/">
              <img src={logo} alt="logo" className="w-32" />
            </a>
          </div>
          <nav>
            <div className="space-y-4">
              {/* render same items but stacked */}
              <ul className="flex flex-col">
                <li className="py-2">
                  <a
                    className="nav-link"
                    href="/"
                    onClick={() => setMenuOpen(false)}
                  >
                    HOME
                  </a>
                </li>
                <li className="py-2">
                  <a
                    className="nav-link"
                    href="#experience"
                    onClick={() => setMenuOpen(false)}
                  >
                    EXPERIENCE
                  </a>
                </li>
                <li className="py-2">
                  <a
                    className="nav-link"
                    href="#education"
                    onClick={() => setMenuOpen(false)}
                  >
                    EDUCATION
                  </a>
                </li>
                <li className="py-2">
                  <a
                    className="nav-link"
                    href="#resume"
                    onClick={() => setMenuOpen(false)}
                  >
                    RESUME
                  </a>
                </li>
                <li className="py-2">
                  <a
                    className="nav-link"
                    href="#projects"
                    onClick={() => setMenuOpen(false)}
                  >
                    PROJECTS
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </aside>
    </header>
  );
}

export default Navbar;
