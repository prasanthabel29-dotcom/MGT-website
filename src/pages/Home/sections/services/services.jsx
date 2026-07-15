import React from "react";
import { Link } from "react-router-dom";
import styles from "./services.module.css";
import { servicesList } from "./servicesData";

function Services({ showTitle = false }) {
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
