import React from "react";
import styles from "./Overview.module.css";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function Overview() {

  // 👇 scroll detect
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className={styles.overview} ref={ref}>
      
      <div className={styles.container}>

        {/* LEFT */}
        <div className={`${styles.left} ${inView ? styles.show : ""}`}>
          <h2>
            Empowering Businesses to Succeed{" "}
            <span>Our Success Stories</span>
          </h2>

          <p>
            We deliver innovative digital solutions that help businesses scale,
            grow, and succeed in a competitive market.
          </p>
        </div>

        {/* RIGHT */}
        <div className={`${styles.right} ${inView ? styles.show : ""}`}>

          <div className={styles.card}>
            <h3>
              {inView && <CountUp end={300} duration={2} />}+
            </h3>
            <p>Successful Projects</p>
          </div>

          <div className={styles.card}>
            <h3>
              {inView && <CountUp end={250} duration={2} />}+
            </h3>
            <p>Satisfied Clients</p>
          </div>

          <div className={styles.card}>
            <h3>
              {inView && <CountUp end={8} duration={2} />}+
            </h3>
            <p>Industry Experience</p>
          </div>

          <div className={styles.card}>
            <h3>
              {inView && <CountUp end={35} duration={2} />}
            </h3>
            <p>Skilled Professionals</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Overview;