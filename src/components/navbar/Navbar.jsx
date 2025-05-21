import React from "react";
import styles from "./Navbar.module.css";
import { useState } from "react";
import { getImageUrl } from "../../utils";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a href="/itzjmbruhhh" className={styles.title}>
        JM Reyes 🧑‍💻
      </a>
      <div className={styles.menu}>
        <img
          src={
            menuOpen ? "src/assets/nav/closeIcon.png" : "src/assets/nav/menuIcon.png"
          }
          alt="menu-button"
          className={styles.menuBtn}
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#education">Education & Skills</a>
          </li>
          <li>
            <a href="#certification">Certification & Activities</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
