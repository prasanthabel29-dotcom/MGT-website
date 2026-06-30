import React from "react";
import styles from "./BlogsPage.module.css";
import { useNavigate } from "react-router-dom";

import bannerImg from "../../assets/blogbanner.jpg";
import blog1 from "../../assets/AI.jpg";
import blog2 from "../../assets/Startup.jpg";
import blog3 from "../../assets/consulting.jpg";

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
      id: 3,
      title: "Why Cloud Consulting Matters for Modern Businesses",
      desc: "Moving to the cloud is no longer optional — learn how the right strategy helps companies scale faster and cut costs...",
      date: "18/03/2025",
      author: "Prasanth",
      image: blog3,
    },
  ];

  return (
    <div>

      {/* 🔥 BANNER */}
      <div
        className={styles.banner}
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className={styles.overlay}>
          <h1>Blogs</h1>
        </div>
      </div>

      {/* 🔥 SUB HEADING */}
      <div className={styles.subHeading}>
        <h2>
          Interesting articles <span>updated daily</span>
        </h2>
      </div>

      {/* 🔥 BLOG GRID */}
      <div className={styles.container}>
        <div className={styles.grid}>
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className={styles.card}
              onClick={() => navigate(`/blogs/${blog.id}`)}
            >
              {/* IMAGE */}
              <div
                className={styles.imageBox}
                style={{ backgroundImage: `url(${blog.image})` }}
                role="img"
                aria-label={blog.title}
              >
                <span className={styles.author}>{blog.author}</span>
              </div>

              {/* CONTENT */}
              <div className={styles.content}>
                <p className={styles.date}>📅 {blog.date}</p>

                <h3>{blog.title}</h3>

                <p className={styles.desc}>{blog.desc}</p>

                <span className={styles.readMore}>
                  Read more →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default BlogsPage;