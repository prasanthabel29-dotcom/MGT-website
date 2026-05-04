import React from "react";
import BannerSection from "./sections/bannersection/bannersection";
import MissionSection from "./sections/MissionSection/MissionSection";
import Overview from "./sections/Overview/Overview";
import Services from "./sections/services/services"; // ✅ add
import TestimonialsSection from "./sections/Testimonials/Testimonials";
import FAQ from "./sections/FAQ/FAQ";


function HomePage() {
  return (
    <>
      {/* 🔥 FULL WIDTH BANNER */}
      <BannerSection />

<div className="container">
  <MissionSection />
  <Overview />
 <Services showTitle={true} />
  <TestimonialsSection />
  <FAQ />
</div>
    </>
  );
}

export default HomePage;