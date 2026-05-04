import React, { useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./servicesdetails.module.css";

import heroimg from "../../../../assets/Services1.png";

import img1 from "../../../../assets/Custom Software Development.jpg.png";
import img2 from "../../../../assets/Mobile Application Development.jpg";
import img3 from "../../../../assets/Website Development.jpg";
import img4 from "../../../../assets/SEO & Digital Marketing.jpg";
import img5 from "../../../../assets/Application Maintenance.jpg";
import img6 from "../../../../assets/System Re-Engineering.jpg";
import img7 from "../../../../assets/Data Migration.jpg";
import img8 from "../../../../assets/Cloud Consulting.jpg";
import img9 from "../../../../assets/IT Infrastructure.jpg";
import img10 from "../../../../assets/Staff Augmentation.jpg";
import img11 from "../../../../assets/Branding & Promotions.jpg";
import img12 from "../../../../assets/IOT services1.jpg";

function ServiceDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const cardRef = useRef(null);

  // 🔥 scroll reveal
  useEffect(() => {
    const el = cardRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add(styles.show);
        }
      },
      { threshold: 0.2 }
    );

    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // 🔥 scroll to top on change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  const services = [
    { id: 0, title: "Custom Software Development", image: img1, desc: "We develop scalable, secure and high-performance custom software.", points: ["Enterprise Solutions", "API Integration", "Cloud Apps", "Secure Design"] },
    { id: 1, title: "Mobile App Development", image: img2, desc: "Modern Android & iOS apps with smooth UI.", points: ["Android & iOS", "Flutter / React Native", "UI/UX", "Deployment"] },
    { id: 2, title: "Website Development", image: img3, desc: "Fast, responsive, SEO-friendly websites.", points: ["Business Sites", "E-Commerce", "Landing Pages", "CMS"] },
    { id: 3, title: "SEO & Digital Marketing", image: img4, desc: "Boost traffic and online visibility.", points: ["SEO", "Google Ads", "Social Media", "Content"] },
    { id: 4, title: "Application Maintenance", image: img5, desc: "Keep apps secure and optimized.", points: ["Bug Fix", "Optimization", "Security", "Monitoring"] },
    { id: 5, title: "System Re-Engineering", image: img6, desc: "Modernize legacy systems.", points: ["Refactor", "Upgrade", "Performance", "Migration"] },
    { id: 6, title: "Data Migration", image: img7, desc: "Safe data transfer across systems.", points: ["DB Migration", "Cloud", "Security", "No Downtime"] },
    { id: 7, title: "Cloud Consulting", image: img8, desc: "Scalable cloud infrastructure.", points: ["AWS/Azure", "Architecture", "Cost", "Deploy"] },
    { id: 8, title: "IT Infrastructure", image: img9, desc: "Strong business IT systems.", points: ["Network", "Servers", "Security", "Monitoring"] },
    { id: 9, title: "Staff Augmentation", image: img10, desc: "Hire skilled developers fast.", points: ["Dedicated Devs", "Flexible", "Remote", "Projects"] },
    { id: 10, title: "Branding & Promotions", image: img11, desc: "Build brand identity.", points: ["Logo", "Campaigns", "Social", "Content"] },
    { id: 11, title: "IoT Services", image: img12, desc: "Smart automation solutions.", points: ["Devices", "Automation", "Monitoring", "Analytics"] }
  ];

  const service = services.find((s) => s.id === parseInt(id));

  if (!service) return <h2>Service Not Found</h2>;

  return (
    <div className={styles.container}>

      {/* 🔥 SMALL BANNER */}
      <div className={styles.banner}>
        <img src={heroimg} alt="banner" />
      </div>

      {/* 🔥 BACK */}
      <div className={styles.topBar}>
        <button onClick={() => navigate(-1)} className={styles.back}>
          ← Back
        </button>
      </div>

      {/* 🔥 CARD */}
      <div ref={cardRef} className={styles.card}>
        
        <div className={styles.imageWrap}>
          <img src={service.image} alt={service.title} />
        </div>

        <div className={styles.content}>
          <h1>{service.title}</h1>
          <p>{service.desc}</p>

          <ul>
            {service.points.map((p, i) => (
              <li key={i}>✓ {p}</li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}

export default ServiceDetails;