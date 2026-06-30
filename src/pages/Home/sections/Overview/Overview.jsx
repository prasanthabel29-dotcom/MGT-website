import React from "react";
import styles from "./Overview.module.css";
import { useInView } from "react-intersection-observer";
import ParticleCanvas from "../../../../components/ParticleCanvas/ParticleCanvas";

import hpuLogo from "../../../../assets/HPU logo.jpg";
import toshibaLogo from "../../../../assets/tossiba logo.jpg";
import forestreetLogo from "../../../../assets/forestreet logo.jpg";
import optimusLogo from "../../../../assets/optimus logo.jpg";
import predisyLogo from "../../../../assets/predisy techn logo.jpg";
import shreeLogo from "../../../../assets/shree logo.png";

const industryVerticals = [
  "Entertainment",
  "Healthcare",
  "Hospitality",
];

const partners = [
  { key: "hpu", name: "HPU", logo: hpuLogo },
  { key: "shree", name: "Shree Ayurvedic", logo: shreeLogo },
  { key: "toshiba", name: "Toshiba", logo: toshibaLogo },
  { key: "forestreet", name: "Forestreet", logo: forestreetLogo },
  { key: "optimus", name: "Optimus", logo: optimusLogo },
  { key: "predisy", name: "Predisy Technovations", logo: predisyLogo },
];

function Overview() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className={styles.overview} ref={ref}>
      <ParticleCanvas />

      <div className={styles.overlay} />

      <div className={`${styles.container} ${inView ? styles.show : ""}`}>
        <div className={styles.header}>
          <h2>
            Empowering Businesses to Succeed{" "}
            <span>Our Success Stories</span>
          </h2>

          <p>
            We deliver innovative digital solutions that help businesses scale,
            grow, and succeed in a competitive market.
          </p>
        </div>

        <div className={styles.projects}>
          <h3>Projects Implemented for various industry verticals</h3>

          <ul>
            {industryVerticals.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className={styles.partners}>
          <h3>Our Esteem Partners</h3>

          <div className={styles.partnerLogos}>
            {partners.map((partner) => (
              <div key={partner.key} className={styles.partnerLogo}>
                <div className={styles.logoFrame}>
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Overview;
