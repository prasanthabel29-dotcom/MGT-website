import React from "react";
import { motion } from "framer-motion";
import heroimg from "../../../../assets/Services1.png";
import PageHero from "../../../../components/PageHero/PageHero";
import styles from "./Careerspages.module.css";

const ease = [0.22, 1, 0.36, 1];

const sectionStagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.11, delayChildren: 0.06 },
  },
};

const sectionItem = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.42, ease },
  },
};

function CareersPage() {
  return (
    <div className={styles.page}>
      <PageHero
        title="Careers"
        image={heroimg}
        imageAlt="Careers at Majesty Global"
        description="We're always looking for passionate people to join our team. Explore open positions and grow your career with us."
      />

      <motion.section
        className={styles.section}
        variants={sectionStagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        <motion.p className={styles.red} variants={sectionItem}>
          Open Positions
        </motion.p>
        <motion.h2 variants={sectionItem}>
          Join a Team Where Innovation Meets Impact
        </motion.h2>

        <motion.p className={styles.desc} variants={sectionItem}>
          We&apos;re always looking for passionate people to join our team.
        </motion.p>

        <motion.p className={styles.noJobs} variants={sectionItem}>
          No open positions right now — check back soon!
        </motion.p>
      </motion.section>
    </div>
  );
}

export default CareersPage;
