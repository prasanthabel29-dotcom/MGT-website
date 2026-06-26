import React, { useState } from "react";
import { motion } from "framer-motion";
import heroimg from "../../assets/Services1.png";
import PageHero from "../../components/PageHero/PageHero";
import styles from "./ContactPage.module.css";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
};

function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully 🚀");
    console.log(form);
  };

  return (
    <>
      <PageHero
        title="Contact Us"
        image={heroimg}
        imageAlt="Contact Majesty Global"
        description="Tell us about your project, hiring needs, or partnership ideas. Our team will get back to you as soon as possible."
      />

      <motion.div
        className={styles.content}
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h2 className={styles.formTitle} variants={item}>
          Send a message
        </motion.h2>

        <motion.form onSubmit={handleSubmit} variants={item} className={styles.form}>
          <motion.input
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
            className={styles.input}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.3 }}
          />

          <motion.input
            name="email"
            placeholder="Your Email"
            onChange={handleChange}
            className={styles.input}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.3 }}
          />

          <motion.textarea
            name="message"
            placeholder="Your Message"
            onChange={handleChange}
            className={styles.textarea}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24, duration: 0.3 }}
          />

          <motion.button
            type="submit"
            className={styles.submit}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.3 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Send
          </motion.button>
        </motion.form>
      </motion.div>
    </>
  );
}

export default ContactPage;
