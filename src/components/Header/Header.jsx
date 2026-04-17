import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.scss";
import logo from "../../assets/logo.png";

function WebsiteHeader() {
  const location = useLocation();

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
      
      {/* LOGO */}
      <div className={styles.logoContainer}>
        <img src={logo} alt="logo" className={styles.logo} />
        <span className={styles.logoText}>MAJESTY GLOBAL</span>
      </div>

      {/* NAV */}
      <nav className={styles.nav}>
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={
              location.pathname === link.path
                ? styles.active
                : styles.link
            }
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* BUTTON */}
      <Link to="/contact" className={styles.button}>
        Get Started
      </Link>

    </header>
  );
}

export default WebsiteHeader;