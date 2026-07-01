import React, { useState, useEffect } from "react";
import styles from "./Testimonials.module.css";
import bg from "../../../../assets/testimonialh.png";

const data = [
  {
    text: `Partnering with GJ Global IT Ventures for the implementation of our Educational Management System was a seamless and professional experience. Their deep understanding of academic and administrative workflows enabled the delivery of a structured and intuitive platform.`,
    name: "Nihas Abdul Vaheed",
    role: "Owner, Concept Tyres",
  },
  {
    text: `Partnering with GJ Global IT Ventures for the implementation of our Educational Management System was a seamless and professional experience. Their deep understanding of academic and administrative workflows enabled the delivery of a structured and intuitive platform.`,
    name: "Arun",
    role: "Business Owner",
  },
  {
    text: `Partnering with GJ Global IT Ventures for the implementation of our Educational Management System was a seamless and professional experience. Their deep understanding of academic and administrative workflows enabled the delivery of a structured and intuitive platform.`,
    name: "Priya",
    role: "Entrepreneur",
  },
  {
    text: `Partnering with GJ Global IT Ventures for the implementation of our Educational Management System was a seamless and professional experience. Their deep understanding of academic and administrative workflows enabled the delivery of a structured and intuitive platform.`,
    name: "Jackson",
    role: "IT Manager",
  },
  {
    text: `Partnering with GJ Global IT Ventures for the implementation of our Educational Management System was a seamless and professional experience. Their deep understanding of academic and administrative workflows enabled the delivery of a structured and intuitive platform.`,
    name: "Vinoth",
    role: "Founder and Mentor",
  },
];

function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  // 🔥 AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % data.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const next = () => {
    setIndex((prev) => (prev + 1) % data.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  return (
    <section className={styles.wrapper}>
      
      {/* LEFT IMAGE */}
      <div className={styles.left}>
        <img
          src={bg}
          alt="Client testimonial"
          className={styles.leftImage}
        />
      </div>

      {/* RIGHT CONTENT */}
      <div className={styles.right}>
        
        {/* 🔥 SLIDE BLOCK */}
        <div key={index} className={styles.slide}>
          <p className={styles.tag}>TESTIMONIAL</p>

          <h2>Hear from Our Clients</h2>

          <div className={styles.stars}>★★★★★</div>

          <p className={styles.text}>
            &ldquo;{data[index].text}&rdquo;
          </p>

          <h4>{data[index].name}</h4>
          <span>{data[index].role}</span>
        </div>

        {/* 🔥 ARROWS */}
        <div className={styles.controls}>
  <button onClick={prev}>←</button>
  <button onClick={next}>→</button>
</div>

      </div>
    </section>
  );
}

export default TestimonialsSection;