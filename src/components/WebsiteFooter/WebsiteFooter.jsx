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
  FaWhatsapp,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

import logo from "../../assets/logo.png";

const footerServices = [
  { id: 0, title: "Custom Software Development" },
  { id: 1, title: "Mobile App Development" },
  { id: 2, title: "Website Development" },
  { id: 3, title: "SEO & Digital Marketing" },
  { id: 4, title: "Application Maintenance" },
  { id: 5, title: "System Re-Engineering" },
  { id: 6, title: "Data Migration" },
  { id: 7, title: "Cloud Consulting" },
  { id: 8, title: "IT Infrastructure" },
  { id: 9, title: "Talent Acquisition & Staff Augmentation" },
  { id: 10, title: "Branding & Promotions" },
  { id: 11, title: "IoT Services" },
];

function WebsiteFooter() {
  return (
    <footer className={styles.footer}>

      <div className={styles.container}>

        {/* LEFT */}
        <div className={styles.column}>

          <div className={styles.logoBox}>
            <img
              src={logo}
              alt="Majesty Global Logo"
              className={styles.logoImg}
            />

            <h2 className={styles.logoText}>
              MAJESTY GLOBAL TECHNOLOGIES
            </h2>
          </div>

          <p className={styles.desc}>
            Empowering businesses through innovative
            technology solutions.
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

            {/* WHATSAPP */}
            <a
              href="https://wa.me/919398013211"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className={styles.wa} />
            </a>

          </div>
        </div>

        {/* QUICK LINKS */}
        <div className={styles.column}>

          <h3>Quick Links</h3>

          <div className={styles.links}>

            <Link to="/">Home</Link>

            <Link to="/about">About</Link>

            <Link to="/services">Services</Link>

            <Link to="/careers">Careers</Link>

            <Link to="/blogs">Blogs</Link>

            <Link to="/contact">Contact</Link>

          </div>
        </div>

        {/* SERVICES */}
        <div className={styles.column}>

          <h3>Services</h3>

          <div className={styles.servicesGrid}>

            <div>
              {footerServices.slice(0, 6).map((service) => (
                <Link key={service.id} to={`/services/${service.id}`}>
                  {service.title}
                </Link>
              ))}
            </div>

            <div>
              {footerServices.slice(6).map((service) => (
                <Link key={service.id} to={`/services/${service.id}`}>
                  {service.title}
                </Link>
              ))}
            </div>

          </div>
        </div>

        {/* CONTACT */}
        <div className={styles.column}>

          <h3>Contact Us</h3>

          <p className={styles.contactItem}>
            <MdEmail className={styles.iconEmail} />

            <a
              href="mailto:contactus@majestyglobaltechnologies.com"
              className={styles.emailLink}
            >
              contactus@majestyglobaltechnologies.com
            </a>
          </p>

          <p className={styles.contactItem}>
            <FaPhoneAlt className={styles.iconPhone} />
            +91-9398013211
          </p>

          <p className={styles.contactItem}>
            <FaMapMarkerAlt className={styles.iconLocation} />

            <a
              href="https://maps.app.goo.gl/4eXbeyvkcWc5M1JJ7"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.locationLink}
            >
              Bangalore, India
            </a>
          </p>

        </div>

      </div>

      {/* BOTTOM */}
      <div className={styles.bottom}>
        © 2026 MAJESTY GLOBAL Pvt Ltd.
        Innovate. Build. Grow.
        All rights reserved.
      </div>

    </footer>
  );
}

export default WebsiteFooter;