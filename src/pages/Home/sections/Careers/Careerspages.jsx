import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import styles from "./Careerspages.module.css";
import bannerImg from "../../../../assets/careers.jpg";

function CareersPage() {
  const [active, setActive] = useState(null);
  const navigate = useNavigate();

  const toggleFAQ = (i) => {
    setActive(active === i ? null : i);
  };

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  const faqs = [
    {
      q: "Is remote or hybrid work available?",
      a: "Yes, we offer flexible work models including remote, hybrid, and on-site options.",
    },
    {
      q: "Do you offer internship opportunities?",
      a: "Yes, internships are available for students and freshers.",
    },
    {
      q: "What services does GJ Global provide?",
      a: "We provide IT services, software solutions, and digital transformation.",
    },
    {
      q: "Can freshers apply for open positions?",
      a: "Yes, freshers can apply based on available roles.",
    },
  ];

  return (
    <div className={styles.page}>
      
      {/* ===== BANNER ===== */}
      <motion.div
        className={styles.banner}
        style={{ backgroundImage: `url(${bannerImg})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className={styles.overlay}>
          <h1>Careers</h1>

          {/* ✅ BREADCRUMB FIX */}
          <p>
            <Link to="/" className={styles.homeLink}>
              Home
            </Link>
            <span> » </span>
            Careers
          </p>
        </div>
      </motion.div>

      {/* ===== OPEN POSITIONS ===== */}
      <motion.section
        className={styles.section}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className={styles.red}>Open Positions</p>
        <h2>Join a Team Where Innovation Meets Impact</h2>

        <p className={styles.desc}>
          We’re always looking for passionate people to join our team.
        </p>

        <p className={styles.noJobs}>
          No open positions right now — check back soon!
        </p>
      </motion.section>

    
    </div>
  );
}

export default CareersPage;