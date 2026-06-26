import React from "react";
import { motion } from "framer-motion";
import {
  FaBuilding,
  FaGlobeAmericas,
  FaRocket,
  FaCode,
  FaUserFriends,
  FaShieldAlt,
  FaChartLine,
  FaVrCardboard,
  FaProjectDiagram,
  FaBrain,
  FaRobot,
  FaNetworkWired,
  FaHandshake,
  FaUsers,
} from "react-icons/fa";
import logo from "../../assets/logo.png";
import styles from "./AboutBrochure.module.css";

const ease = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease, delay: i * 0.06 },
  }),
};

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const staggerTight = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06, delayChildren: 0.08 },
  },
};

const services = [
  {
    title: "PRODUCT DEVELOPMENT (IT & NON-IT)",
    desc: "We design, develop, and deliver customized IT and non-IT products that align with business objectives, ensuring quality, efficiency, and long-term value.",
    Icon: FaCode,
    color: "#2563eb",
  },
  {
    title: "STAFF AUGMENTATION",
    desc: "We provide highly skilled and experienced professionals to support short-term and long-term business needs, enabling organizations to scale their workforce quickly and effectively.",
    Icon: FaUserFriends,
    color: "#0d9488",
  },
  {
    title: "CYBERSECURITY SERVICES",
    desc: "We offer advanced cybersecurity services to protect digital infrastructure, applications, and data against evolving cyber threats while ensuring compliance and risk management.",
    Icon: FaShieldAlt,
    color: "#16a34a",
  },
  {
    title: "DATA ANALYTICS",
    desc: "Our data analytics solutions transform raw data into actionable insights, empowering organizations to make informed, data-driven decisions.",
    Icon: FaChartLine,
    color: "#9333ea",
  },
  {
    title: "AR / VR & IoT SOLUTIONS",
    desc: "We deliver innovative Augmented Reality, Virtual Reality, and Internet of Things solutions that enhance user experiences, operational efficiency, and digital engagement.",
    Icon: FaVrCardboard,
    color: "#ea580c",
  },
  {
    title: "STRATEGIC CONSULTING",
    desc: "Our strategic consulting services help organizations plan, implement, and manage digital transformation initiatives for sustainable growth and competitive advantage.",
    Icon: FaProjectDiagram,
    color: "#0284c7",
  },
];

const coeItems = [
  { label: "AI", Icon: FaBrain, color: "#2563eb" },
  { label: "DATA ANALYTICS", Icon: FaChartLine, color: "#14b8a6" },
  { label: "RPA", Icon: FaRobot, color: "#eab308" },
  { label: "IoT", Icon: FaNetworkWired, color: "#22d3ee" },
  { label: "AR / VR", Icon: FaVrCardboard, color: "#a855f7" },
];

const coreValues = [
  {
    title: "INTEGRITY",
    text: "We uphold the highest standards of honesty and ethics.",
    Icon: FaShieldAlt,
    color: "#2563eb",
  },
  {
    title: "COLLABORATION",
    text: "We believe in teamwork, transparency, and building lasting partnerships.",
    Icon: FaHandshake,
    color: "#14b8a6",
  },
  {
    title: "PEOPLE FOCUS",
    text: "We value our people and are committed to their growth, well-being, and success.",
    Icon: FaUsers,
    color: "#f97316",
  },
];

function AboutBrochure() {
  return (
    <div className={styles.root}>
      <div className={styles.light}>
        <motion.div
          className={styles.introTop}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
        >
          <motion.div className={styles.logoBlock} variants={fadeUp} custom={0}>
            <img src={logo} alt="Majesty Global Tech" className={styles.logoImg} />
            <p className={styles.companyTitle}>MAJESTY GLOBAL TECH PVT. LTD.</p>
            <p className={styles.tagline}>INNOVATE • TRANSFORM • SUCCEED</p>
          </motion.div>

          <motion.div className={styles.introRight} variants={fadeUp} custom={1}>
            <p className={styles.introText}>
              Majesty Global Tech Pvt. Ltd. is an innovative professional services and business
              consulting company that combines deep industry expertise with disruptive digital
              technologies to help clients solve complex business challenges.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.infoRow}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          variants={stagger}
        >
          <motion.div className={styles.infoCard} variants={fadeUp}>
            <span className={styles.infoIcon}>
              <FaBuilding aria-hidden />
            </span>
            <p>
              Headquartered in <strong>Bangalore</strong>, with Registered office in{" "}
              <strong>Puttaparthi</strong>.
            </p>
          </motion.div>
          <motion.div className={styles.infoCard} variants={fadeUp}>
            <span className={styles.infoIcon}>
              <FaGlobeAmericas aria-hidden />
            </span>
            <p>We support clients across multiple industries.</p>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.growthBanner}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
        >
          <span className={styles.growthIcon}>
            <FaRocket aria-hidden />
          </span>
          <p>
            Starting with IT projects, talent acquisition, and staff augmentation for{" "}
            <strong>Entertainment, Hospitality,</strong> and <strong>Healthcare</strong> sectors, we
            have grown rapidly and are expanding into additional verticals, including{" "}
            <strong>Fintech</strong> and <strong>Telecom</strong>.
          </p>
        </motion.div>

        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <motion.div className={styles.offeringsHeader} variants={fadeUp}>
            OUR SERVICE OFFERINGS
            <span className={styles.offeringsHeaderAccent} aria-hidden />
          </motion.div>
          <motion.div className={styles.offeringsBody} variants={staggerTight}>
            <motion.p className={styles.offeringsIntro} variants={fadeUp}>
              Majesty Global Technologies Pvt. Ltd. delivers comprehensive technology and business
              solutions designed to help organizations innovate, scale, and succeed in a rapidly
              evolving digital landscape. Our diversified portfolio combines technical expertise,
              industry knowledge, and customer-focused execution.
            </motion.p>
            {services.map((s, idx) => (
              <motion.div
                key={s.title}
                className={styles.serviceRow}
                variants={fadeUp}
                custom={idx}
              >
                <div className={styles.serviceIcon} style={{ background: s.color }}>
                  <s.Icon aria-hidden />
                </div>
                <div className={styles.serviceMain}>
                  <h3 className={styles.serviceTitle}>{s.title}</h3>
                  <p className={styles.serviceDesc}>{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </div>

      <div className={styles.dark}>
        <div className={styles.darkInner}>
          <motion.p
            className={styles.coeHead}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease }}
          >
            WITH OUR OFFERINGS AND <em>CENTERS OF EXCELLENCE</em>
          </motion.p>

          <motion.div
            className={styles.coeGrid}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
          >
            {coeItems.map((c, i) => (
              <motion.div key={c.label} className={styles.coeItem} variants={fadeUp} custom={i}>
                <div className={styles.coeCircle} style={{ background: c.color }}>
                  <c.Icon aria-hidden />
                </div>
                <div className={styles.coeLabel}>{c.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            className={styles.valuesHead}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease, delay: 0.08 }}
          >
            ARE DRIVEN BY STRONG <em>CORE VALUES</em> OF
          </motion.p>

          <motion.div
            className={styles.valuesGrid}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
          >
            {coreValues.map((v, i) => (
              <motion.div key={v.title} className={styles.valueCard} variants={fadeUp} custom={i}>
                <div className={styles.valueIcon} style={{ background: v.color }}>
                  <v.Icon aria-hidden />
                </div>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueText}>{v.text}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className={styles.footerBar}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease }}
          >
            <p>ENSURING LONG-TERM VALUE AND TRUSTED PARTNERSHIPS FOR OUR CLIENTS.</p>
            <span className={styles.footerAccent} aria-hidden />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default AboutBrochure;
