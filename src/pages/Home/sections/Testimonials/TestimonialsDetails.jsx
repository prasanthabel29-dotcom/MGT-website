import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 0,
    name: "ABC Institution",
    text: "Partnering with GJ Global IT Ventures for implementing our Educational Management System was a seamless and highly professional experience...",
  },
  {
    id: 1,
    name: "Business Client",
    text: "The team delivered our web application on time with exceptional quality.",
  },
  {
    id: 2,
    name: "Startup Founder",
    text: "We were impressed by their ability to understand our requirements.",
  },
  {
    id: 3,
    name: "App User",
    text: "The mobile app they developed is fast, user-friendly, and reliable.",
  },
  {
    id: 4,
    name: "Company CEO",
    text: "From design to deployment, the entire process was smooth.",
  },
];

function TestimonialsDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const index = parseInt(id, 10);

  if (isNaN(index) || index < 0 || index >= testimonials.length) {
    return <h2 style={{ textAlign: "center" }}>Page Not Found</h2>;
  }

  const item = testimonials[index];

  return (
    <motion.div
      style={{
        maxWidth: "700px",
        margin: "60px auto",
        padding: "30px",
        textAlign: "center",
        boxShadow: "0 0 20px rgba(0,0,0,0.1)",
        borderRadius: "15px",
      }}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.button
        type="button"
        onClick={() => navigate(-1)}
        whileHover={{ x: -3 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        ⬅ Back
      </motion.button>

      <motion.h1
        style={{ marginTop: "20px" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.08, duration: 0.35 }}
      >
        {item.name}
      </motion.h1>

      <motion.p
        style={{ marginTop: "20px", fontSize: "18px" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.14, duration: 0.35 }}
      >
        {item.text}
      </motion.p>
    </motion.div>
  );
}

export default TestimonialsDetails;