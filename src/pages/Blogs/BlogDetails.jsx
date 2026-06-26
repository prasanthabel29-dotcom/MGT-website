import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./BlogDetails.module.css";

import aiImg from "../../assets/AI.jpg";
import startupImg from "../../assets/Startup.jpg";

function BlogDetails() {
  const { id } = useParams();

  const blogs = [
    {
      id: "1",
      title: "The Rise of AI in Business",
      content: `Artificial Intelligence (AI) is rapidly transforming the way businesses operate in today’s digital world. From small startups to large enterprises, companies are using AI to improve efficiency, reduce costs, and make smarter decisions.

AI technologies such as machine learning, natural language processing, and automation tools help businesses analyze huge amounts of data in seconds. This allows companies to understand customer behavior, predict future trends, and personalize user experiences.

One of the biggest advantages of AI is automation. Tasks that once required human effort—like customer support, data entry, and reporting—can now be handled by AI-powered systems.

AI is also widely used in marketing and sales. Businesses use AI tools to target the right audience, optimize ads, and improve conversion rates.

However, AI also comes with challenges such as data privacy and ethical concerns.

In conclusion, AI is a game changer that is reshaping the entire business world.`,
      date: "12/01/2024",
      author: "Anju",
      image: aiImg,
    },
    {
      id: "2",
      title: "Startup Life Experience",
      content: `Working in a startup company is a unique and exciting experience compared to traditional corporate jobs.

In a startup environment, employees often wear multiple hats. This means you might be involved in different roles such as marketing, development, and operations.

One of the biggest advantages of working in a startup is rapid growth. Your contributions directly impact the company’s success.

Startups also encourage innovation and creativity. Employees are free to experiment with new ideas.

However, startup life comes with challenges such as high pressure and uncertainty.

In conclusion, working in a startup is risky but highly rewarding.`,
      date: "01/09/2020",
      author: "Hafsa",
      image: startupImg,
    },
  ];

  const blog = blogs.find((b) => b.id === id);

  if (!blog) return <h2 style={{ textAlign: "center" }}>Blog not found</h2>;

  const paragraphs = blog.content
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean);

  const textParent = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.07, delayChildren: 0.12 },
    },
  };

  const textBlock = {
    hidden: { opacity: 0, y: 14 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
    >
      <motion.img
        src={blog.image}
        alt={blog.title}
        className={styles.image}
        initial={{ opacity: 0, scale: 1.03 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      />

      <motion.div
        className={styles.contentBox}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.02, ease: [0.22, 1, 0.36, 1] }}
        >
          {blog.title}
        </motion.h1>

        <motion.p
          className={styles.meta}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35, delay: 0.08 }}
        >
          📅 {blog.date} • ✍ {blog.author}
        </motion.p>

        <motion.div
          variants={textParent}
          initial="hidden"
          animate="show"
          style={{ display: "flex", flexDirection: "column", gap: "1.15rem" }}
        >
          {paragraphs.map((para, i) => (
            <motion.p key={i} className={styles.text} variants={textBlock}>
              {para}
            </motion.p>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default BlogDetails;