import React from "react";
import { Link } from "react-router-dom";
import styles from "./WebsiteFooter.module.css";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import logo from "../../assets/logo.png";

function WebsiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* LEFT */}
        <div className={styles.column}>
          <div className={styles.logoBox}>
            <img src={logo} alt="Majesty Global Logo" className={styles.logoImg} />
            <h2 className={styles.logoText}>MAJESTY GLOBAL</h2>
          </div>

          <p className={styles.desc}>
            Empowering businesses through innovative technology solutions.
          </p>

          <div className={styles.social}>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className={styles.fb} />
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <FaTwitter className={styles.tw} />
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className={styles.li} />
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className={styles.ig} />
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className={styles.column}>
          <h3>Quick Links</h3>

          <div style={{ display: "flex", gap: "40px" }}>
            <div>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/services">Services</Link>
              <Link to="/careers">Careers</Link>
              <Link to="/blogs">Blogs</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
        </div>

        {/* SERVICES */}
        <div className={styles.column}>
          <h3>Services</h3>

          <div className={styles.servicesGrid}>
            <div>
              <a href="/">Custom Software Development</a>
              <a href="/">Mobile App Development</a>
              <a href="/">Website Development</a>
              <a href="/">SEO & Digital Marketing</a>
              <a href="/">Application Maintenance</a>
              <a href="/">System Re-Engineering</a>
            </div>

            <div>
              <a href="/">Data Migration</a>
              <a href="/">Cloud Consulting</a>
              <a href="/">IT Infrastructure</a>
              <a href="/">Staff Augmentation</a>
              <a href="/">Branding & Promotions</a>
              <a href="/">IoT Services</a>
            </div>
          </div>
        </div>

        {/* CONTACT */}
        <div className={styles.column}>
          <h3>Contact Us</h3>

          <p>
            <MdEmail className={styles.iconEmail} />
            info@majestyglobal.com
          </p>

          <p>
            <FaPhoneAlt className={styles.iconPhone} />
            +91-9398013211
          </p>

          <p>
            <FaMapMarkerAlt className={styles.iconLocation} />
            Bangalore, India
          </p>
        </div>
      </div>

      {/* BOTTOM */}
      <div className={styles.bottom}>
        © 2026 MAJESTY GLOBAL Pvt Ltd. Innovate. Build. Grow. All rights reserved.
      </div>
    </footer>
  );
}

export default WebsiteFooter;