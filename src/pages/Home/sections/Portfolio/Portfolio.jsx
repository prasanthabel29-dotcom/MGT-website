import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Portfolio.module.css";

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
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        Our Portfolio
      </h1>

      <div className={styles.grid}>
        {portfolioData.map((item) => (
          <div
            key={item.id}
            className={styles.card}
            onClick={() => navigate(`/portfolio/${item.id}`)}
            style={{ cursor: "pointer" }}
          >
            <img src={item.image} alt={item.title} />
            <h2>{item.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;