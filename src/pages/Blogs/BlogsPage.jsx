import React from "react";
import styles from "./BlogsPage.module.css";
import blog1 from "../../assets/AI.jpg";
import blog2 from "../../assets/Startup.jpg"; // ✅ correct
import { useNavigate } from "react-router-dom";

function BlogsPage() {

  const navigate = useNavigate(); // ✅ inside function

  const blogs = [
    {
      id: 1,
      title: "The Rise of AI in Business: How Companies Are Leveraging AI",
      desc: "Discover how AI is transforming industries and boosting growth...",
      date: "12/01/2024",
      author: "Anju",
      image: blog1,
    },
    {
      id: 2,
      title: "What it is like to work at a Startup Company",
      desc: "Startup life explained: challenges, growth and reality...",
      date: "01/09/2020",
      author: "Hafsa",
      image: blog2,
    },
    {
      id: 2,
      title: "What it is like to work at a Startup Company",
      desc: "Startup life explained: challenges, growth and reality...",
      date: "01/09/2020",
      author: "Hafsa",
      image: blog2,
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Our Blogs</h1>

      <div className={styles.grid}>
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className={styles.card}
            onClick={() => navigate(`/blogs/${blog.id}`)} // ✅ click working
          >

            {/* IMAGE */}
            <div className={styles.imageBox}>
              <img src={blog.image} alt="" />
              <span className={styles.author}>{blog.author}</span>
            </div>

            {/* CONTENT */}
            <div className={styles.content}>
              <p className={styles.date}>📅 {blog.date}</p>

              <h3>{blog.title}</h3>

              <p className={styles.desc}>{blog.desc}</p>

              <button className={styles.readMore}>
                Read more →
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogsPage;