import React from "react";
import Services from "./services";
import styles from "./services.module.css";
import heroimg from "../../../../assets/Services1.png";

function ServicesPage() {
  return (
    <>
     <section className={styles.heroSection}>

  <h1 className={styles.heroBgText}>
    Our Services
  </h1>

  <img
    src={heroimg}
    alt="Services"
    className={styles.heroImage}
  />

  <p className={styles.heroDesc}>
    We are engaged in innovative software development,
    website design & development, mobile app development,
    ERP app development and digital marketing utilizing
    advanced technologies.
  </p>

</section>

      <Services showTitle={false} />
    </>
  );
}

export default ServicesPage;