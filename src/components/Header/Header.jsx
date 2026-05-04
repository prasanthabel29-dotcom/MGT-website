import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import logo from "../../assets/logo.png";

function WebsiteHeader() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className={styles.header}>
      
      {/* LOGO CLICK → HOME */}
      <NavLink to="/" className={styles.logoContainer}>
        <img src={logo} alt="logo" className={styles.logo} />
        <span className={styles.logoText}>MAJESTY GLOBAL</span>
      </NavLink>

      {/* NAV */}
      <nav className={styles.nav}>
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `${styles.link} ${isActive ? styles.active : ""}`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </nav>

      {/* BUTTON */}
      <NavLink to="/contact" className={styles.button}>
        Get Started
      </NavLink>

    </header>
  );
}

export default WebsiteHeader;