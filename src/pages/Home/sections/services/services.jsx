import React from "react";
import { Link } from "react-router-dom";
import styles from "./services.module.css";
import { servicesList } from "./servicesData";

function Services({ showTitle = false }) {
<<<<<<< HEAD
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
    {id: 9,title: "Talent Acquisition & Staff Augmentation",image: img10,desc: "We specialize in sourcing top-quality talent and scaling teams quickly across IT and Non-IT domains."},
    { id: 10, title: "Branding & Promotions", image: img11, desc: "Build strong brand identity." },
    { id: 11, title: "IoT Services", image: img12, desc: "Smart connected solutions." },
    { id: 12, title: "Cyber Security", image: img12, desc: "Protect your digital assets." }

  ];

=======
>>>>>>> dec63d0 (mgt)
  return (
    <section className={styles.services}>
      <div className={styles.container}>
        {showTitle && (
          <div className={styles.titleWrap}>
            <h1 className={styles.heading}>Our Services</h1>
            <h2 className={styles.subHeading}>
              We&apos;re passionate about Technology & Innovations
            </h2>
          </div>
        )}

        <div className={styles.grid}>
          {servicesList.map((item) => (
            <Link
              to={`/services/${item.id}`}
              key={item.id}
              className={styles.card}
            >
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>

              <div className={styles.overlay}>
                <h2>{item.title}</h2>
                <span className={styles.line}></span>
                <p>{item.desc}</p>
                <div className={styles.readMore}>Read More</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
