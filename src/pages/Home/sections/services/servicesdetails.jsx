import React from "react";
import { motion } from "framer-motion";
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

const ease = [0.22, 1, 0.36, 1];

const listParent = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.12 },
  },
};

const listItem = {
  hidden: { opacity: 0, x: -14 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, ease },
  },
};

function ServiceDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

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
    {
      id: 9,
      title: "Talent Acquisition & Staff Augmentation",
      image: img10,
      desc: "",
      paragraphs: [
        "Talent Acquisition is our strong portfolio and we specialise in sourcing the best quality profiles with quick turnaround time for our esteemed partners for their IT and Non-IT requirements, with all modes of hiring viz., Full Time, Contract to Hire, Contract and Freelance.",
        "We also work on RPO model (Recruitment Process Outsourcing) based on partners' requirements.",
        "Staff augmentation builds on this foundation: we place skilled professionals alongside your teams so you can scale delivery quickly—with dedicated capacity, flexible engagement, and remote or on-site support aligned to your projects.",
      ],
      points: [
        "Dedicated developers and specialists embedded with your teams",
        "Flexible engagement: full-time, contract-to-hire, contract, and freelance",
        "Fast turnaround on quality profiles across IT and non-IT roles",
        "RPO programs tailored to your hiring volume and process",
      ],
    },
    { id: 10, title: "Branding & Promotions", image: img11, desc: "Build brand identity.", points: ["Logo", "Campaigns", "Social", "Content"] },
    { id: 11, title: "IoT Services", image: img12, desc: "Smart automation solutions.", points: ["Devices", "Automation", "Monitoring", "Analytics"] }
  ];

  const service = services.find((s) => s.id === parseInt(id));

  if (!service) return <h2>Service Not Found</h2>;

  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
    >
      <motion.div
        className={styles.banner}
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease }}
      >
        <img src={heroimg} alt="banner" />
      </motion.div>

      <div className={styles.topBar}>
        <motion.button
          type="button"
          onClick={() => navigate(-1)}
          className={styles.back}
          whileHover={{ x: -3 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          ← Back
        </motion.button>
      </div>

      <motion.div
        className={styles.card}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.06, ease }}
      >
        <motion.div
          className={styles.imageWrap}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1, ease }}
          whileHover={{ scale: 1.01 }}
        >
          <img src={service.image} alt={service.title} />
        </motion.div>

        <div className={styles.content}>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.14, ease }}
          >
            {service.title}
          </motion.h1>
          {(service.paragraphs?.length
            ? service.paragraphs
            : [service.desc].filter(Boolean)
          ).map((text, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.18 + i * 0.06, ease }}
            >
              {text}
            </motion.p>
          ))}

          <motion.ul
            variants={listParent}
            initial="hidden"
            animate="show"
          >
            {service.points.map((p, i) => (
              <motion.li key={i} variants={listItem}>
                ✓ {p}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ServiceDetails;
