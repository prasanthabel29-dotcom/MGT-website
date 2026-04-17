import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./BlogDetails.module.css";

// ✅ IMPORT IMAGES
import aiImg from "../../assets/AI.jpg";
import startupImg from "../../assets/Startup.jpg";

function BlogDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const blogs = [
    {
      id: "1",
      title: "The Rise of AI in Business",
      content: `
Artificial Intelligence (AI) is rapidly transforming the way businesses operate in today’s digital world. From small startups to large enterprises, companies are using AI to improve efficiency, reduce costs, and make smarter decisions.

AI technologies such as machine learning, natural language processing, and automation tools help businesses analyze huge amounts of data in seconds. This allows companies to understand customer behavior, predict future trends, and personalize user experiences.

One of the biggest advantages of AI is automation. Tasks that once required human effort—like customer support, data entry, and reporting—can now be handled by AI-powered systems.

AI is also widely used in marketing and sales. Businesses use AI tools to target the right audience, optimize ads, and improve conversion rates.

However, AI also comes with challenges such as data privacy and ethical concerns.

In conclusion, AI is a game changer that is reshaping the entire business world.
      `,
      date: "12/01/2024",
      author: "Anju",
      image: aiImg,
    },
    {
      id: "2",
      title: "Startup Life Experience",
      content: `
Working in a startup company is a unique and exciting experience compared to traditional corporate jobs.

In a startup environment, employees often wear multiple hats. This means you might be involved in different roles such as marketing, development, and operations.

One of the biggest advantages of working in a startup is rapid growth. Your contributions directly impact the company’s success.

Startups also encourage innovation and creativity. Employees are free to experiment with new ideas.

However, startup life comes with challenges such as high pressure and uncertainty.

In conclusion, working in a startup is risky but highly rewarding.
      `,
      date: "01/09/2020",
      author: "Hafsa",
      image: startupImg,
    },
  ];

  const blog = blogs.find((b) => b.id === id);

  if (!blog) return <h2>Blog not found</h2>;

  return (
    <div className={styles.container}>

      <button onClick={() => navigate(-1)} className={styles.back}>
        ← Back
      </button>

      <img src={blog.image} alt={blog.title} className={styles.image} />

      <h1 className={styles.title}>{blog.title}</h1>

      <p className={styles.meta}>
        📅 {blog.date} • ✍ {blog.author}
      </p>

      <p className={styles.content}>{blog.content}</p>

    </div>
  );
}

export default BlogDetails;