import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import styles from "./WebsiteFooter.module.css";
import logo from "../../assets/logo.png";

const ease = [0.22, 1, 0.36, 1];

const colParent = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
};

const col = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease } },
};

function WebsiteFooter() {
  return (
    <footer className={styles.footer}>
      <motion.div
        className={styles.container}
        variants={colParent}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
      >
        <motion.div className={styles.column} variants={col}>
          <motion.div
            className={styles.logoBox}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 22 }}
          >
            <img src={logo} alt="Majesty Global Logo" className={styles.logoImg} />
            <h2 className={styles.logoText}>MAJESTY GLOBAL</h2>
          </motion.div>

          <p className={styles.desc}>
            Empowering businesses through innovative technology solutions.
          </p>

          <div className={styles.social}>
            {[
              ["/", styles.fb, FaFacebookF],
              ["/", styles.tw, FaTwitter],
              ["/", styles.li, FaLinkedinIn],
              ["/", styles.ig, FaInstagram],
            ].map(([href, cls, Icon], i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className={cls} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div className={styles.column} variants={col}>
          <h3>Quick Links</h3>

          <div style={{ display: "flex", gap: "40px" }}>
            <div>
              {[
                ["/", "Home"],
                ["/about", "About"],
                ["/services", "Services"],
                ["/careers", "Careers"],
                ["/blogs", "Blogs"],
                ["/contact", "Contact"],
              ].map(([to, label], i) => (
                <motion.div
                  key={to}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.32, delay: 0.05 * i, ease }}
                >
                  <Link to={to}>{label}</Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div className={styles.column} variants={col}>
          <h3>Services</h3>

          <div className={styles.servicesGrid}>
            <div>
              {[
                "Custom Software Development",
                "Mobile App Development",
                "Website Development",
                "SEO & Digital Marketing",
                "Application Maintenance",
                "System Re-Engineering",
              ].map((label, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.28, delay: 0.04 * i, ease }}
                >
                  <a href="/">{label}</a>
                </motion.div>
              ))}
            </div>

            <div>
              {[
                "Data Migration",
                "Cloud Consulting",
                "IT Infrastructure",
                "Talent & Staff Augmentation",
                "Branding & Promotions",
                "IoT Services",
              ].map((label, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.28, delay: 0.04 * i, ease }}
                >
                  <a href="/">{label}</a>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div className={styles.column} variants={col}>
          <h3>Contact Us</h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05, duration: 0.35 }}
          >
            <MdEmail className={styles.iconEmail} />
            info@majestyglobal.com
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.35 }}
          >
            <FaPhoneAlt className={styles.iconPhone} />
            +91-9398013211
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.35 }}
          >
            <FaMapMarkerAlt className={styles.iconLocation} />
            Bangalore, India
          </motion.p>
        </motion.div>
      </motion.div>

      <motion.div
        className={styles.bottom}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        © 2026 MAJESTY GLOBAL Pvt Ltd. Innovate. Build. Grow. All rights reserved.
      </motion.div>
    </footer>
  );
}

export default WebsiteFooter;