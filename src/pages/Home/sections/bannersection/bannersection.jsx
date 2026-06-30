import React from "react";
import { Link } from "react-router-dom";
import styles from "./bannersection.module.css";
import ParticleCanvas from "../../../../components/ParticleCanvas/ParticleCanvas";

function BannerSection() {
  return (
    <section className={styles.banner}>
      <ParticleCanvas />

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
          <Link to="/contact" className={styles.primary}>
            Get Started →
          </Link>

          <Link to="/contact" className={styles.secondary}>
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

export default BannerSection;