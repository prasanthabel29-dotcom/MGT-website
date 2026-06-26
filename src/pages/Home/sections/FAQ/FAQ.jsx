import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import styles from "./FAQ.module.css";

const ease = [0.22, 1, 0.36, 1];

const faqs = [
  {
    q: "What services do you provide?",
    a: "We provide web development, software development, UI/UX design, mobile app development, and digital transformation solutions.",
  },
  {
    q: "How long does a project take?",
    a: "Project timelines depend on complexity. Most projects take between 2–12 weeks based on requirements.",
  },
  {
    q: "Do you provide post-launch support?",
    a: "Yes. We provide maintenance, updates, technical support, and performance monitoring after deployment.",
  },
  {
    q: "How can I contact your team?",
    a: "You can reach us through our contact page or email us directly for project discussions.",
  },
];

function FAQ() {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const faqCard = {
    hidden: { opacity: 0, y: 22 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease },
    },
  };

  return (
    <section className={styles.faq}>
      <motion.div
        className={styles.left}
        initial={{ opacity: 0, x: -32 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease }}
      >
        <motion.p
          className={styles.faqLabel}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, ease }}
        >
          FAQ
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.05, ease }}
        >
          Frequently Asked Questions
        </motion.h2>

        <motion.p
          className={styles.descText}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1, ease }}
        >
          We’re always on the lookout for passionate problem-
          solvers. Drop us a line — we’d love to connect.
        </motion.p>
        <motion.button
          type="button"
          className={styles.contactBtn}
          onClick={() => navigate("/contact")}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15, ease }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className={styles.text}>
            Contact us <span className={styles.arrowStatic}>↗</span>
          </span>
          <span className={styles.arrowHover}>→</span>
        </motion.button>
      </motion.div>

      <motion.div
        className={styles.right}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
      >
        {faqs.map((itemData, i) => (
          <motion.div
            key={i}
            className={`${styles.card} ${
              active === i ? styles.active : ""
            }`}
            variants={faqCard}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
          >
            <motion.button
              type="button"
              className={styles.question}
              onClick={() => toggleFAQ(i)}
              initial={false}
              animate={{ opacity: 1 }}
              whileTap={{ scale: 0.995 }}
            >
              {itemData.q}
              <motion.span
                className={styles.icon}
                animate={{ rotate: active === i ? 180 : 0 }}
                transition={{ duration: 0.28, ease }}
              >
                {active === i ? "−" : "+"}
              </motion.span>
            </motion.button>

            <AnimatePresence initial={false}>
              {active === i && (
                <motion.div
                  key="answer"
                  className={styles.answerMotion}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.32, ease }}
                >
                  <p className={styles.answer}>{itemData.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default FAQ;