import React from "react";
import { motion } from "framer-motion";
import styles from "./Overview.module.css";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const ease = [0.22, 1, 0.36, 1];

const gridParent = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.12 },
  },
};

const statCard = {
  hidden: { opacity: 0, y: 28, scale: 0.94 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease },
  },
};

function Overview() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });

  return (
    <section className={styles.overview} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.left}
          initial={{ opacity: 0, x: -36 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05, ease }}
          >
            Empowering Businesses to Succeed{" "}
            <span>Our Success Stories</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.12, ease }}
          >
            We deliver innovative digital solutions that help businesses scale,
            grow, and succeed in a competitive market.
          </motion.p>
        </motion.div>

        <motion.div
          className={styles.right}
          variants={gridParent}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <motion.div
            className={styles.card}
            variants={statCard}
            whileHover={{ y: -8, transition: { duration: 0.25 } }}
          >
            <h3>
              {inView && <CountUp end={300} duration={2} />}+
            </h3>
            <p>Successful Projects</p>
          </motion.div>

          <motion.div
            className={styles.card}
            variants={statCard}
            whileHover={{ y: -8, transition: { duration: 0.25 } }}
          >
            <h3>
              {inView && <CountUp end={250} duration={2} />}+
            </h3>
            <p>Satisfied Clients</p>
          </motion.div>

          <motion.div
            className={styles.card}
            variants={statCard}
            whileHover={{ y: -8, transition: { duration: 0.25 } }}
          >
            <h3>
              {inView && <CountUp end={8} duration={2} />}+
            </h3>
            <p>Industry Experience</p>
          </motion.div>

          <motion.div
            className={styles.card}
            variants={statCard}
            whileHover={{ y: -8, transition: { duration: 0.25 } }}
          >
            <h3>
              {inView && <CountUp end={35} duration={2} />}
            </h3>
            <p>Skilled Professionals</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Overview;