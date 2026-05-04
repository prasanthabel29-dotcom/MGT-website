import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function TestimonialsDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

 const testimonials = [
  {
    id: 0,
    name: "ABC Institution",
    text: "Partnering with GJ Global IT Ventures for implementing our Educational Management System was a seamless and highly professional experience..."
  },
  {
    id: 1,
    name: "Business Client",
    text: "The team delivered our web application on time with exceptional quality."
  },
  {
    id: 2,
    name: "Startup Founder",
    text: "We were impressed by their ability to understand our requirements."
  },
  {
    id: 3,
    name: "App User",
    text: "The mobile app they developed is fast, user-friendly, and reliable."
  },
  {
    id: 4,
    name: "Company CEO",
    text: "From design to deployment, the entire process was smooth."
  }
];
  const index = parseInt(id, 10);

  if (isNaN(index) || index < 0 || index >= data.length) {
    return <h2 style={{ textAlign: "center" }}>Page Not Found</h2>;
  }

  const item = data[index];

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "60px auto",
        padding: "30px",
        textAlign: "center",
        boxShadow: "0 0 20px rgba(0,0,0,0.1)",
        borderRadius: "15px",
      }}
    >
      <button onClick={() => navigate(-1)}>⬅ Back</button>

      <h1 style={{ marginTop: "20px" }}>{item.name}</h1>

      <p style={{ marginTop: "20px", fontSize: "18px" }}>
        {item.full}
      </p>
    </div>
  );
}

export default TestimonialsDetails;