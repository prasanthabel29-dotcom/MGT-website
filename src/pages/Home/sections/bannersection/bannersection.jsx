import React from "react";
import styles from "./bannersection.module.css";
import bg from "../../../../assets/bgg.jpg";

function BannerSection() {
  return (
    <section
      className={styles.banner}
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <h1>
          Empowering Businesses Through <br />
          <span>Technology</span>
        </h1>

        <p>
          We build scalable, secure, and modern digital solutions
          to help your business grow.
        </p>

        <div className={styles.buttons}>
          <button className={styles.primary}>
            Get Started →
          </button>

          <button className={styles.secondary}>
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}

export default BannerSection;