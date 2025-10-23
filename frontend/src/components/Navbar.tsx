import logo from "../assets/logo/logo.png";
import { useState, useEffect } from "react";
import "../styles/Navbar.css";
import NavLinks from "./NavLinks";
import Hamburger from "./Hamburger";
import MobileMenu from "./MobileMenu";

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

  return (
    <>
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
            <nav>
              <NavLinks />
            </nav>
          </div>

          {/* Mobile hamburger - visible on small screens only */}
          <div className="xl:hidden flex items-center">
            <Hamburger
              open={menuOpen}
              onToggle={() => setMenuOpen((s) => !s)}
            />
          </div>
        </div>
        {/* Header Wrapper End */}
      </header>

      {/* Render mobile menu outside header so it's not trapped by header's stacking context */}
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}

export default Navbar;
