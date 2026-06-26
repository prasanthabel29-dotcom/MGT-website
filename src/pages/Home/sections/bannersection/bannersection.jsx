import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styles from "./bannersection.module.css";
import WebGLHero from "../../../../components/WebGL/WebGLHero";

const content = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

function BannerSection() {
  return (
    <motion.section
      className={styles.banner}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <WebGLHero variant="network" />
      <div className={styles.overlay} />

      <motion.div
        className={styles.content}
        variants={content}
        initial="hidden"
        animate="show"
      >
        <motion.span className={styles.eyebrow} variants={fadeUp}>
          Enterprise Technology Partner
        </motion.span>

        <motion.h1 variants={fadeUp}>
          Empowering Businesses Through <br />
          <span>Technology</span>
        </motion.h1>

        <motion.p variants={fadeUp}>
          We build scalable, secure, and modern digital solutions to help your
          business grow with confidence.
        </motion.p>

        <motion.div className={styles.buttons} variants={fadeUp}>
          <Link to="/contact" className={styles.primary}>
            Get Started →
          </Link>

          <Link to="/services" className={styles.secondary}>
            Our Services
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default BannerSection;
