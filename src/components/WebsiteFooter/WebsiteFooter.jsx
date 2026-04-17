import React from "react";
import styles from "./WebsiteFooter.module.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import logo from "../../assets/logo.png";

function WebsiteFooter() {
  return (
    <footer className={styles.footer}>
      
      <div className={styles.container}>

        {/* LEFT */}
        <div className={styles.column}>
          <div className={styles.logoBox}>
            <img src={logo} alt="logo" className={styles.logoImg} />
            <h2 className={styles.logoText}>MAJESTY GLOBAL</h2>
          </div>

          <p className={styles.desc}>
            Empowering businesses through innovative technology solutions.
          </p>

          <div className={styles.social}>
            <FaFacebookF className={styles.fb} />
            <FaTwitter className={styles.tw} />
            <FaLinkedinIn className={styles.li} />
            <FaInstagram className={styles.ig} />
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className={styles.column}>
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/">About Us</a>
          <a href="/">Services</a>
          <a href="/">Portfolio</a>
        </div>

        {/* SERVICES */}
        <div className={styles.column}>
          <h3>Services</h3>
          <a href="/">Web Development</a>
          <a href="/">Mobile Apps</a>
          <a href="/">Cloud Solutions</a>
          <a href="/">Cybersecurity</a>
        </div>

        {/* CONTACT */}
        <div className={styles.column}>
          <h3>Contact Us</h3>
<p><MdEmail className={styles.iconEmail} /> info@majestyglobal.com</p>
<p><FaPhoneAlt className={styles.iconPhone} /> +1 (555) 123-4567</p>
<p><FaMapMarkerAlt className={styles.iconLocation} /> Bangalore, India</p>
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