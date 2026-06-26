import React from "react";
import { useLocation, useOutlet } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import WebsiteHeader from "../../components/WebsiteHeader/WebsiteHeader";
import WebsiteFooter from "../../components/WebsiteFooter/WebsiteFooter";

const pageTransition = {
  initial: { opacity: 0, y: 14 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.32, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] },
  },
};

function WebsiteLayout() {
  const location = useLocation();
  const outlet = useOutlet();

  return (
    <>
      <WebsiteHeader />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageTransition}
        >
          {outlet}
        </motion.div>
      </AnimatePresence>
      <WebsiteFooter />
    </>
  );
}

export default WebsiteLayout;