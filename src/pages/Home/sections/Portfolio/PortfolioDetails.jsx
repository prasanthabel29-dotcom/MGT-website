import React from "react";
import { useParams } from "react-router-dom";

// 🔥 same images
import img1 from "../../../../assets/User-Centered Design.jpg";
import img2 from "../../../../assets/Responsive & Mobile-First Design.jpg";
import img3 from "../../../../assets/Performance Optimization.jpg";
import img4 from "../../../../assets/Scalable Architecture.jpg";
import img5 from "../../../../assets/Security & Data Protection.jpg";
function PortfolioDetails() {
  const { id } = useParams();

  const data = [
    {
      title: "User-Centered Design",
      image: img1,
      full: "User-centered design focuses on creating intuitive and user-friendly interfaces that improve usability and satisfaction.",
    },
    {
      title: "Responsive & Mobile-First Design",
      image: img2,
      full: "Ensures applications work perfectly on mobile, tablet, and desktop devices.",
    },
    {
      title: "Performance Optimization",
      image: img3,
      full: "Optimized applications load faster and provide better user experience and SEO ranking.",
    },
    {
      title: "Scalable Architecture",
      image: img4,
      full: "Build systems that grow with your business without performance issues.",
    },
    {
      title: "Security & Data Protection",
      image: img5,
      full: "Protect sensitive data using encryption, authentication, and secure APIs.",
    },
  ];

  const index = parseInt(id, 10);

  if (isNaN(index) || index < 0 || index >= data.length) {
    return <h2 style={{ textAlign: "center" }}>Page Not Found</h2>;
  }

  const item = data[index];

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "60px auto",
        padding: "30px",
        textAlign: "center",
        boxShadow: "0 0 20px rgba(0,0,0,0.1)",
        borderRadius: "15px",
      }}
    >
      

      <h1>{item.title}</h1>

      <img
        src={item.image}
        alt={item.title}
        style={{
          width: "100%",
          maxHeight: "400px",
          objectFit: "cover",
          borderRadius: "15px",
          margin: "20px 0",
        }}
      />

      <p style={{ fontSize: "18px", lineHeight: "1.7" }}>
        {item.full}
      </p>
    </div>
  );
}

export default PortfolioDetails;