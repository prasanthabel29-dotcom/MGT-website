import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import styles from "./FAQ.module.css";

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
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className={styles.faq}>
      {/* LEFT */}
      <motion.div
        className={styles.left}
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <p className={styles.faqLabel}>FAQ</p>

        <h2>Frequently Asked Questions</h2>

      <p className={styles.descText}>
  We’re always on the lookout for passionate problem-
  solvers. Drop us a line — we’d love to connect.
</p>
    <button className={styles.contactBtn}>
  <span className={styles.text}>
    Contact us <span className={styles.arrowStatic}>↗</span>
  </span>
  <span className={styles.arrowHover}>→</span>
</button>
      </motion.div>

      {/* RIGHT */}
      <motion.div
        className={styles.right}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {faqs.map((itemData, i) => (
          <motion.div
            key={i}
            className={`${styles.card} ${
              active === i ? styles.active : ""
            }`}
            variants={item}
          >
            <div
              className={styles.question}
              onClick={() => toggleFAQ(i)}
            >
              {itemData.q}
              <span className={styles.icon}>
                {active === i ? "−" : "+"}
              </span>
            </div>

            <div
              className={`${styles.answerWrapper} ${
                active === i ? styles.show : ""
              }`}
            >
              <p className={styles.answer}>{itemData.a}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default FAQ;