import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./Portfolio.module.css";

const grid = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardMotion = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

// 🔥 renamed safe images
import img1 from "../../../../assets/User-Centered Design.jpg";
import img2 from "../../../../assets/Responsive & Mobile-First Design.jpg";
import img3 from "../../../../assets/Performance Optimization.jpg";
import img4 from "../../../../assets/Scalable Architecture.jpg";
import img5 from "../../../../assets/Security & Data Protection.jpg";

function Portfolio() {
  const navigate = useNavigate();

  const portfolioData = [
    { id: 0, title: "User-Centered Design", image: img1 },
    { id: 1, title: "Responsive Design", image: img2 },
    { id: 2, title: "Performance Optimization", image: img3 },
    { id: 3, title: "Scalable Architecture", image: img4 },
    { id: 4, title: "Security & Data Protection", image: img5 },
  ];

  return (
    <div className={styles.portfolio}>
      <motion.h1
        style={{ textAlign: "center", marginBottom: "30px" }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        Our Portfolio
      </motion.h1>

      <motion.div
        className={styles.grid}
        variants={grid}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
      >
        {portfolioData.map((item) => (
          <motion.div
            key={item.id}
            className={styles.card}
            variants={cardMotion}
            onClick={() => navigate(`/portfolio/${item.id}`)}
            style={{ cursor: "pointer" }}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 380, damping: 28 }}
          >
            <img src={item.image} alt={item.title} />
            <h2>{item.title}</h2>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Portfolio;