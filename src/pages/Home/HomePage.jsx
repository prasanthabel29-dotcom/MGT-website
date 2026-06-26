import React from "react";
import { motion } from "framer-motion";
import BannerSection from "./sections/bannersection/bannersection";
import MissionSection from "./sections/MissionSection/MissionSection";
import Overview from "./sections/Overview/Overview";
import Services from "./sections/services/services"; // ✅ add
import TestimonialsSection from "./sections/Testimonials/Testimonials";
import FAQ from "./sections/FAQ/FAQ";

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
};

const block = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

function HomePage() {
  return (
    <>
      <BannerSection />

      <motion.div
        className="container"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
      >
        <motion.div variants={block}>
          <MissionSection />
        </motion.div>
        <motion.div variants={block}>
          <Overview />
        </motion.div>
        {/* No variants here — variant context was overriding Services / card animations */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <Services showTitle={true} />
        </motion.div>
        <motion.div variants={block}>
          <TestimonialsSection />
        </motion.div>
        <motion.div variants={block}>
          <FAQ />
        </motion.div>
      </motion.div>
    </>
  );
}

export default HomePage;