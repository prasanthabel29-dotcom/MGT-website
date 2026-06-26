import React from "react";
import { motion } from "framer-motion";
import WebGLHero from "../WebGL/WebGLHero";
import styles from "./PageHero.module.css";

const heroContent = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

function PageHero({ title, image, imageAlt, description, imageClassName = "" }) {
  return (
    <motion.section
      className={styles.hero}
      variants={heroContent}
      initial="hidden"
      animate="show"
    >
      <WebGLHero variant="ambient" />
      <div className={styles.accent} />

      <div className={styles.inner}>
        <motion.span className={styles.eyebrow} variants={heroItem}>
          Majesty Global
        </motion.span>

        <motion.h1 className={styles.bgText} variants={heroItem}>
          {title}
        </motion.h1>

        <motion.img
          src={image}
          alt={imageAlt || title}
          className={`${styles.image} ${imageClassName}`}
          variants={heroItem}
        />

        <motion.p className={styles.desc} variants={heroItem}>
          {description}
        </motion.p>
      </div>
    </motion.section>
  );
}

export default PageHero;
