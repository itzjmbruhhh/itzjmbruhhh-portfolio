import React from "react";
import logo from "../assets/logo/logo.png";
import { useState, useEffect } from "react";
import "../styles/Navbar.css";

function Navbar() {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50); // adjust the number to when you want it to trigger
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`rn-header pl-12 pr-12 ${
        isScrolled
          ? "header-scrolled"
          : "bg-transparent"
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

        {/* Nav Start */}
        <div className="header-right mr-7">
          <nav>
            <ul className="flex gap-2">
                <li className="nav-item"><a className="nav-link" href="/">HOME</a></li>
                <li className="nav-item"><a className="nav-link" href="#experience">EXPERIENCE</a></li>
                <li className="nav-item"><a className="nav-link" href="#education">EDUCATION</a></li>
                <li className="nav-item"><a className="nav-link" href="#resume">RESUME</a></li>
                <li className="nav-item"><a className="nav-link" href="#projects">PROJECTS</a></li>
            </ul>
          </nav>
        </div>
        {/* Nav End */}

      </div>
      {/* Header Wrapper End */}

    </header>
  );
}

export default Navbar;
