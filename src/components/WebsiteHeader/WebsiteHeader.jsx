import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./WebsiteHeader.module.css";
import logo from "../../assets/logo.png";

const MotionLink = motion(Link);

const ease = [0.22, 1, 0.36, 1];

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

  // Close drawer when viewport shows desktop nav again
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 769px)");
    const onChange = () => {
      if (mq.matches) setOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

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
      <MotionLink
        to="/"
        className={styles.logo}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 420, damping: 24 }}
      >
        <img src={logo} alt="logo" className={styles.logoImg} />
        <span className={styles.logoText}>MAJESTY GLOBAL</span>
      </MotionLink>

      <nav className={styles.nav}>
        {navLinks.map((link) => (
          <MotionLink
            key={link.path}
            to={link.path}
            className={`${styles.link} ${
              location.pathname === link.path ? styles.active : ""
            }`}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2, ease }}
          >
            {link.name}
          </MotionLink>
        ))}
      </nav>

      <div className={styles.actions}>
        <motion.button
          type="button"
          className={styles.iconBtn}
          onClick={toggleTheme}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
        >
          {dark ? "☀️" : "🌙"}
        </motion.button>

        <motion.button
          type="button"
          className={`${styles.iconBtn} ${styles.menuToggle}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
        >
          ☰
        </motion.button>

        <MotionLink
          to="/contact"
          className={styles.button}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
        >
          Get Started
        </MotionLink>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="overlay"
              className={styles.overlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              key="drawer"
              className={styles.mobileMenu}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05, duration: 0.3, ease }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setOpen(false)}
                    className={styles.mobileLink}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.3, ease }}
              >
                <Link
                  to="/contact"
                  className={styles.mobileButton}
                  onClick={() => setOpen(false)}
                >
                  Get Started
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

export default WebsiteHeader;