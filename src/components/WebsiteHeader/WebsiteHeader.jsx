import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./WebsiteHeader.module.css";
import logo from "../../assets/logo.png";

function WebsiteHeader() {
  const location = useLocation();

  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 🔥 SCROLL DETECT
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 THEME LOAD
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setDark(true);
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  // 🔥 THEME TOGGLE
  const toggleTheme = () => {
    const newTheme = dark ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    setDark(!dark);
  };

  // 🔥 BODY LOCK
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Careers", path: "/careers" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>

      {/* LOGO */}
      <Link to="/" className={styles.logo}>
        <img src={logo} alt="logo" className={styles.logoImg} />
        <span className={styles.logoText}>MAJESTY GLOBAL</span>
      </Link>

      {/* NAV */}
      <nav className={styles.nav}>
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`${styles.link} ${
              location.pathname === link.path ? styles.active : ""
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* ACTIONS */}
      <div className={styles.actions}>
        <button className={styles.iconBtn} onClick={toggleTheme}>
          {dark ? "☀️" : "🌙"}
        </button>

        <button
          className={styles.iconBtn}
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        <Link to="/contact" className={styles.button}>
          Get Started
        </Link>
      </div>

      {/* OVERLAY */}
      {open && (
        <div className={styles.overlay} onClick={() => setOpen(false)} />
      )}

      {/* MOBILE MENU */}
      <div className={`${styles.mobileMenu} ${open ? styles.show : ""}`}>
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            onClick={() => setOpen(false)}
            className={styles.mobileLink}
          >
            {link.name}
          </Link>
        ))}

        <Link to="/contact" className={styles.mobileButton}>
          Get Started
        </Link>
      </div>

    </header>
  );
}

export default WebsiteHeader;