import React from "react";
import { motion } from "framer-motion";
import styles from "./AboutPageLegacy.module.css";

const ease = [0.22, 1, 0.36, 1];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.42, ease },
  },
};

const offerings = [
  {
    title: "Custom IT & business solutions",
    text: "We design, develop, and deliver customized IT and non-IT products that align with business objectives, ensuring quality, efficiency, and long-term value.",
  },
  {
    title: "Talent & staff augmentation",
    text: "Highly skilled and experienced professionals for short-term and long-term needs, helping organizations scale their workforce quickly and effectively.",
  },
  {
    title: "Cybersecurity",
    text: "Advanced services to protect digital infrastructure, applications, and data against evolving threats, with compliance and risk management.",
  },
  {
    title: "Data analytics",
    text: "Solutions that turn raw data into actionable insights so leaders can make informed, data-driven decisions.",
  },
  {
    title: "AR / VR / IoT",
    text: "Augmented Reality, Virtual Reality, and Internet of Things offerings that enhance user experiences, operational efficiency, and digital engagement.",
  },
  {
    title: "Digital transformation consulting",
    text: "Strategic support to plan, implement, and manage digital transformation for sustainable growth and competitive advantage.",
  },
];

const cardGrid = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.06 },
  },
};

const cardMotion = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease },
  },
};

/**
 * Backup of the previous About page body (card grid + text sections).
 * Not rendered by default.
 *
 * To restore: in `AboutPage.jsx`, replace
 *   import AboutBrochure from "./AboutBrochure";
 *   <AboutBrochure />
 * with
 *   import AboutPageLegacyBody from "./AboutPageLegacy";
 *   <AboutPageLegacyBody />
 */
function AboutPageLegacyBody() {
  return (
    <motion.article
      className={styles.page}
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.h2 className={styles.companyName} variants={item}>
        Majesty Global Tech Pvt. Ltd.
      </motion.h2>

      <motion.section className={styles.section} variants={item}>
        <h2 className={styles.sectionTitle}>Presence & reach</h2>
        <p className={styles.body}>
          Headquartered in Bangalore, with registered office in Puttaparthi, we support clients
          across multiple industries.
        </p>
        <p className={styles.body}>
          Starting with IT projects, talent acquisition, and staff augmentation for Entertainment,
          Hospitality, and Healthcare sectors, we have grown rapidly and are expanding into
          additional verticals, including Fintech and Telecom.
        </p>
      </motion.section>

      <motion.section className={styles.section} variants={item}>
        <h2 className={styles.sectionTitle}>What we deliver</h2>
        <p className={styles.offeringsIntro}>
          Majesty Global Tech Pvt. Ltd. delivers comprehensive technology and business solutions
          designed to help organizations innovate, scale, and succeed in a rapidly evolving digital
          landscape. Our diversified portfolio combines technical expertise, industry knowledge, and
          customer-focused execution.
        </p>

        <motion.div
          className={styles.grid}
          variants={cardGrid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {offerings.map((o) => (
            <motion.div
              key={o.title}
              className={styles.card}
              variants={cardMotion}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <h3>{o.title}</h3>
              <p>{o.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <motion.section className={styles.values} variants={item}>
        <p>
          Our offerings and Centers of Excellence in AI, Data Analytics, RPA, IoT, and AR/VR are
          driven by strong core values of integrity, collaboration, and people focus—ensuring
          long-term value and trusted partnerships for our clients.
        </p>
      </motion.section>
    </motion.article>
  );
}

export default AboutPageLegacyBody;
