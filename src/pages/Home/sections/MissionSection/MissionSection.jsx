import React from 'react';
import styles from './MissionSection.module.scss';

function MissionSection() {
  return (
    <section className={styles.missionSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Our Vision & Mission</h2>
          <p className={styles.subtitle}>
            Empowering businesses through cutting-edge technology solutions that drive growth, efficiency, and innovation.
          </p>
        </div>

        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              {/* Vision Icon Placeholder */}
              <span className={styles.icon}>👁️</span>
            </div>
            <h3 className={styles.cardTitle}>Our Vision</h3>
            <p className={styles.cardText}>
              To be the global leader in delivering transformative digital solutions, shaping the future of IT services, and becoming the most trusted technology partner for forward-thinking organizations worldwide.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              {/* Mission Icon Placeholder */}
              <span className={styles.icon}>🚀</span>
            </div>
            <h3 className={styles.cardTitle}>Our Mission</h3>
            <p className={styles.cardText}>
              We are committed to providing exceptional software engineering, cloud architecture, and cybersecurity services. By bridging the gap between business needs and technological capabilities, we help our clients thrive in a digital-first economy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MissionSection;
