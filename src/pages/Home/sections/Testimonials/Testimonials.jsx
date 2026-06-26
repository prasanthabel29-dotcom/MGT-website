import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Testimonials.module.css";
import bg from "../../../../assets/testimonialh.jpg";

const data = [
  {
    text: `Partnering with GJ Global IT Ventures for the implementation of our Educational Management System was a seamless and professional experience. Their deep understanding of academic and administrative workflows enabled the delivery of a structured and intuitive platform.`,
    name: "Nihas Abdul Vaheed",
    role: "Owner, Concept Tyres",
  },
  {
    text: `Partnering with GJ Global IT Ventures for the implementation of our Educational Management System was a seamless and professional experience. Their deep understanding of academic and administrative workflows enabled the delivery of a structured and intuitive platform.`,
    name: "Arun",
    role: "Business Owner",
  },
  {
    text: `Partnering with GJ Global IT Ventures for the implementation of our Educational Management System was a seamless and professional experience. Their deep understanding of academic and administrative workflows enabled the delivery of a structured and intuitive platform.`,
    name: "Priya",
    role: "Entrepreneur",
  },
  {
    text: `Partnering with GJ Global IT Ventures for the implementation of our Educational Management System was a seamless and professional experience. Their deep understanding of academic and administrative workflows enabled the delivery of a structured and intuitive platform.`,
    name: "Jackson",
    role: "IT Manager",
  },
  {
    text: `Partnering with GJ Global IT Ventures for the implementation of our Educational Management System was a seamless and professional experience. Their deep understanding of academic and administrative workflows enabled the delivery of a structured and intuitive platform.`,
    name: "Vinoth",
    role: "Founder and Mentor",
  },
];

function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  // 🔥 AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % data.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const next = () => {
    setIndex((prev) => (prev + 1) % data.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  return (
    <motion.section
      className={styles.wrapper}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45 }}
    >
      {/* LEFT IMAGE */}
      <motion.div
        className={styles.left}
        style={{ backgroundImage: `url(${bg})` }}
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* RIGHT CONTENT */}
      <div className={styles.right}>
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className={styles.slide}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className={styles.tag}>TESTIMONIAL</p>

            <h2>Hear from Our Clients</h2>

            <div className={styles.stars}>★★★★★</div>

            <p className={styles.text}>
              "{data[index].text}"
            </p>

            <h4>{data[index].name}</h4>
            <span>{data[index].role}</span>
          </motion.div>
        </AnimatePresence>

        <div className={styles.controls}>
          <motion.button type="button" onClick={prev} whileTap={{ scale: 0.92 }}>
            ←
          </motion.button>
          <motion.button type="button" onClick={next} whileTap={{ scale: 0.92 }}>
            →
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
}

export default TestimonialsSection;