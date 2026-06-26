import React from 'react';
import { motion } from 'framer-motion';
import styles from './MissionSection.module.scss';

const ease = [0.22, 1, 0.36, 1];

const cardsParent = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.14, delayChildren: 0.08 },
  },
};

const cardMotion = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease },
  },
};

function MissionSection() {
  return (
    <section className={styles.missionSection}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease }}
        >
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05, ease }}
          >
            Our Vision & Mission
          </motion.h2>
          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1, ease }}
          >
            Empowering businesses through cutting-edge technology solutions that drive growth, efficiency, and innovation.
          </motion.p>
        </motion.div>

        <motion.div
          className={styles.cards}
          variants={cardsParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          <motion.div
            className={styles.card}
            variants={cardMotion}
            whileHover={{ y: -6, transition: { duration: 0.22 } }}
          >
            <motion.div
              className={styles.iconWrapper}
              whileHover={{ scale: 1.08, rotate: [0, -4, 4, 0] }}
              transition={{ duration: 0.45 }}
            >
              <span className={styles.icon}>👁️</span>
            </motion.div>
            <h3 className={styles.cardTitle}>Our Vision</h3>
            <p className={styles.cardText}>
              To be the global leader in delivering transformative digital solutions, shaping the future of IT services, and becoming the most trusted technology partner for forward-thinking organizations worldwide.
            </p>
          </motion.div>

          <motion.div
            className={styles.card}
            variants={cardMotion}
            whileHover={{ y: -6, transition: { duration: 0.22 } }}
          >
            <motion.div
              className={styles.iconWrapper}
              whileHover={{ scale: 1.08, rotate: [0, -4, 4, 0] }}
              transition={{ duration: 0.45 }}
            >
              <span className={styles.icon}>🚀</span>
            </motion.div>
            <h3 className={styles.cardTitle}>Our Mission</h3>
            <p className={styles.cardText}>
              We are committed to providing exceptional software engineering, cloud architecture, and cybersecurity services. By bridging the gap between business needs and technological capabilities, we help our clients thrive in a digital-first economy.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default MissionSection;
