import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./WebsiteHeader.module.css";
import logo from "../../assets/logo.png";

function WebsiteHeader() {
  const location = useLocation();

  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [hide, setHide] = useState(false);

  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (
        currentScrollY > lastScrollY.current &&
        currentScrollY > 80
      ) {
        setHide(true);
      } else {
        setHide(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setDark(true);
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = dark ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    setDark(!dark);
  };

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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNavClick = () => {
    scrollToTop();
    setOpen(false);
  };

  return (
    <header
      className={`${styles.header} ${
        hide ? styles.hide : ""
      }`}
    >
      <Link to="/" className={styles.logo} onClick={scrollToTop}>
        <img
          src={logo}
          alt="Majesty Global"
          className={styles.logoImg}
        />

        <span className={styles.logoText}>
          <span className={styles.logoTextFull}>
            MAJESTY GLOBAL TECHNOLOGIES
          </span>
          <span className={styles.logoTextShort}>MGT</span>
        </span>
      </Link>

      <nav className={styles.nav}>
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            onClick={scrollToTop}
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

      <div className={styles.actions}>
        <button
          type="button"
          className={styles.iconBtn}
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {dark ? "☀️" : "🌙"}
        </button>

        <button
          type="button"
          className={`${styles.iconBtn} ${styles.menuBtn}`}
          onClick={() => setOpen(!open)}
          aria-label="Open menu"
        >
          ☰
        </button>

        <Link
          to="/contact"
          className={styles.button}
          onClick={scrollToTop}
        >
          Get Started
        </Link>
      </div>

      {open && (
        <div
          className={styles.overlay}
          onClick={() => setOpen(false)}
        />
      )}

      <div
        className={`${styles.mobileMenu} ${
          open ? styles.show : ""
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            onClick={handleNavClick}
            className={styles.mobileLink}
          >
            {link.name}
          </Link>
        ))}

        <Link
          to="/contact"
          className={styles.mobileButton}
          onClick={handleNavClick}
        >
          Get Started
        </Link>
      </div>
    </header>
  );
}

export default WebsiteHeader;
