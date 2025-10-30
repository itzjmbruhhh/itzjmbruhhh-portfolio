import logo from "../assets/logo/logo.png";
import { useState, useEffect } from "react";
import "../styles/Navbar.css";
import NavLinks from "./NavLinks";
import Hamburger from "./Hamburger";
import MobileMenu from "./MobileMenu";
import useScrollSpy from "../hooks/useScrollSpy";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    try {
      const stored = localStorage.getItem("theme");
      if (stored === "light" || stored === "dark") return stored as "light" | "dark";
      if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches)
        return "light";
    } catch (e) {
      /* ignore */
    }
    return "dark";
  });

  const activeId = useScrollSpy(["home", "experience", "education", "resume", "projects"]);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Theme effect
  useEffect(() => {
    try {
      const root = document.documentElement;
      if (theme === "light") root.classList.add("light");
      else root.classList.remove("light");
      localStorage.setItem("theme", theme);
    } catch (e) {
      /* ignore */
    }
  }, [theme]);

  // Close menu on ESC and lock body scroll when open
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

  return (
    <>
      <header
        className={`rn-header xl:pl-12 xl:pr-12 sm:pl-0 sm:pr-0 ${
          isScrolled ? "header-scrolled" : "bg-transparent"
        }`}
      >
        {/* Header Wrapper */}
        <div className="header-wrapper flex items-center justify-between xl:px-4 py-3 px-0 md:px-14">

          {/* Left: Logo */}
          <div className="flex items-center">
            <div className="logo">
              <a href="/">
                <img src={logo} alt="logo" />
              </a>
            </div>
          </div>

          {/* Right: Desktop nav + theme toggle / Mobile hamburger */}
          <div className="flex items-center gap-4">

            {/* Desktop nav + theme toggle (xl+) */}
            <div className="hidden xl:flex items-center gap-4">
              <nav className="header-right">
                <NavLinks activeId={activeId} />
              </nav>
              <button
                onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
                aria-label="Toggle theme"
                className="p-2 rounded focus:outline-none hover:opacity-90 text-(--color-body-2)"
              >
                <i className={`${theme === "light" ? "las la-sun" : "las la-moon"} text-xl`}></i>
              </button>
            </div>

            {/* Mobile hamburger + theme toggle (hidden xl) */}
            <div className="xl:hidden flex items-center gap-2">
              <button
                onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
                aria-label="Toggle theme"
                className="p-2 rounded focus:outline-none hover:opacity-90 text-(--color-body-2)"
              >
                <i className={`${theme === "light" ? "las la-sun" : "las la-moon"} text-lg`}></i>
              </button>
              <Hamburger open={menuOpen} onToggle={() => setMenuOpen((s) => !s)} />
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} activeId={activeId} />
    </>
  );
}

export default Navbar;
