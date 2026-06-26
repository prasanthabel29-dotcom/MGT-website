import React from "react";
import { motion } from "framer-motion";
import heroimg from "../../assets/Services1.png";
import PageHero from "../../components/PageHero/PageHero";
import styles from "./BlogsPage.module.css";
import { useNavigate } from "react-router-dom";
import blog1 from "../../assets/AI.jpg";
import blog2 from "../../assets/Startup.jpg";

const gridParent = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

function BlogsPage() {
  const navigate = useNavigate();

  const blogs = [
    {
      id: 1,
      title:
        "The Rise of AI in Business: How Companies Are Leveraging Artificial Intelligence for Growth",
      desc: "Discover a powerful tool that revolutionizes growth, efficiency and innovation across all sectors...",
      date: "12/01/2024",
      author: "Anju",
      image: blog1,
    },
    {
      id: 2,
      title: "What it is like to work at a Startup Company",
      desc: "Just like many of you, I was also under speculation about whether or not to work in a startup company...",
      date: "01/09/2020",
      author: "Hafsa",
      image: blog2,
    },
    {
      id: 1,
      title:
        "The Rise of AI in Business: How Companies Are Leveraging Artificial Intelligence for Growth",
      desc: "Discover a powerful tool that revolutionizes growth, efficiency and innovation across all sectors...",
      date: "12/01/2024",
      author: "Anju",
      image: blog1,
    },
  ];

  return (
    <div>
      <PageHero
        title="Blogs"
        image={heroimg}
        imageAlt="Majesty Global Blogs"
        description="Stay updated with insights on technology, innovation, and industry trends from our team."
      />

      <motion.div
        className={styles.subHeading}
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <h2>
          Interesting articles <span>updated daily</span>
        </h2>
      </motion.div>

      <div className={styles.container}>
        <motion.div
          className={styles.grid}
          variants={gridParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {blogs.map((blog, i) => (
            <motion.div
              key={`${blog.id}-${i}`}
              className={styles.card}
              variants={cardVariant}
              onClick={() => navigate(`/blogs/${blog.id}`)}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 360, damping: 26 }}
            >
              <div className={styles.imageBox}>
                <img src={blog.image} alt="" />
                <span className={styles.author}>{blog.author}</span>
              </div>

              <div className={styles.content}>
                <p className={styles.date}>📅 {blog.date}</p>
                <h3>{blog.title}</h3>
                <p className={styles.desc}>{blog.desc}</p>
                <span className={styles.readMore}>Read more →</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default BlogsPage;
