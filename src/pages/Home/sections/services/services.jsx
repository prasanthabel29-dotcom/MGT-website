import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./services.module.css";
import homeTitle from "./servicesHomeTitle.module.css";

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

function Services({ showTitle = false }) {
  const services = [
    { id: 0, title: "Custom Software Development", image: img1, desc: "We build scalable and secure custom software tailored for your business." },
    { id: 1, title: "Mobile App Development", image: img2, desc: "High-performance Android & iOS apps with modern UI/UX." },
    { id: 2, title: "Website Development", image: img3, desc: "Responsive and modern websites for all business needs." },
    { id: 3, title: "SEO & Digital Marketing", image: img4, desc: "Boost your online presence with SEO and marketing strategies." },
    { id: 4, title: "Application Maintenance", image: img5, desc: "Ensure your applications run smoothly." },
    { id: 5, title: "System Re-Engineering", image: img6, desc: "Upgrade and modernize your systems." },
    { id: 6, title: "Data Migration", image: img7, desc: "Secure and seamless data migration." },
    { id: 7, title: "Cloud Consulting", image: img8, desc: "Reliable cloud solutions." },
    { id: 8, title: "IT Infrastructure", image: img9, desc: "Enterprise infrastructure solutions." },
    {
      id: 9,
      title: "Talent Acquisition & Staff Augmentation",
      image: img10,
      desc: "Talent acquisition, RPO, and staff augmentation—IT & non-IT, with fast turnaround.",
    },
    { id: 10, title: "Branding & Promotions", image: img11, desc: "Build strong brand identity." },
    { id: 11, title: "IoT Services", image: img12, desc: "Smart connected solutions." },
  ];

  return (
    <section className={styles.services}>
      <div className={styles.container}>
        {showTitle && (
          <motion.div
            className={`${styles.titleWrap} ${homeTitle.wrap}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px", amount: 0.2 }}
            transition={{ duration: 0.5, ease }}
          >
            <h1 className={`${styles.heading} ${homeTitle.heading}`}>Our Services</h1>
            <h2 className={`${styles.subHeading} ${homeTitle.subHeading}`}>
              We're passionate about Technology & Innovations
            </h2>
          </motion.div>
        )}

        <div className={styles.grid}>
          {services.map((item, index) => (
            <Link
              key={item.id}
              to={`/services/${item.id}`}
              className={styles.cardLink}
            >
              <motion.div
                className={styles.card}
                initial={{ opacity: 0, y: 48, scale: 0.92 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.25, margin: "0px 0px -60px 0px" }}
                transition={{
                  delay: index * 0.07,
                  type: "spring",
                  stiffness: 260,
                  damping: 22,
                  mass: 0.9,
                }}
                whileHover={{
                  y: -14,
                  scale: 1.04,
                  boxShadow:
                    "0 32px 64px -12px rgba(15, 23, 42, 0.28), 0 0 0 1px rgba(56, 189, 248, 0.2)",
                  transition: { type: "spring", stiffness: 400, damping: 20 },
                }}
                whileTap={{ scale: 0.97, y: -6 }}
              >
                <img src={item.image} alt={item.title} />

                <h3>{item.title}</h3>

                <div className={styles.overlay}>
                  <h2>{item.title}</h2>
                  <span className={styles.line} />
                  <p>{item.desc}</p>
                  <div className={styles.readMore}>Read More →</div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
