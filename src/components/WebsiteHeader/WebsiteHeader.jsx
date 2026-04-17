import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./WebsiteHeader.module.css";
import logo from "../../assets/logo.png";

function WebsiteHeader() {
  const location = useLocation();

  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  // ================= LOAD THEME =================
  useEffect(() => {
    const saved = localStorage.getItem("theme");

    if (saved === "dark") {
      setDark(true);
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  // ================= TOGGLE THEME =================
  const toggleTheme = () => {
    if (dark) {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    }
    setDark(!dark);
  };

  // ================= CLOSE MENU EVENTS =================
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", handleEsc);

    // prevent scroll when menu open
    document.body.style.overflow = open ? "hidden" : "auto";

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [open]);

  // ================= NAV LINKS =================
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Testimonials", path: "/testimonials" },
     { name: "Blogs", path: "/blogs" }, 
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className={styles.header}>

      {/* LOGO */}
      <Link to="/" className={styles.logo}>
        <img src={logo} alt="logo" className={styles.logoImg} />
        <span className={styles.logoText}>MAJESTY GLOBAL</span>
      </Link>

      {/* DESKTOP NAV */}
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

        {/* DARK MODE */}
        <button
          className={styles.iconBtn}
          onClick={toggleTheme}
          aria-label="Toggle Theme"
        >
          {dark ? "☀️" : "🌙"}
        </button>

        {/* MENU BUTTON */}
        <button
          className={styles.iconBtn}
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>

        {/* DESKTOP BUTTON */}
        <Link to="/contact" className={styles.button}>
          Get Started
        </Link>
      </div>

      {/* OVERLAY (click outside close) */}
      {open && (
        <div
          className={styles.overlay}
          onClick={() => setOpen(false)}
        />
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

        <Link
          to="/contact"
          className={styles.mobileButton}
          onClick={() => setOpen(false)}
        >
          Get Started
        </Link>
      </div>

    </header>
  );
}

export default WebsiteHeader;