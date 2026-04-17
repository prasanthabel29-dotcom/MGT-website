import React from "react";
import BannerSection from "./sections/bannersection/bannersection";
import MissionSection from "./sections/MissionSection/MissionSection";
import Overview from "./sections/Overview/Overview";

function HomePage() {
  return (
    <>
      {/* 1️⃣ HERO */}
      <BannerSection />

      {/* 2️⃣ VISION + MISSION */}
      <MissionSection />

      {/* 3️⃣ OVERVIEW (👇 BELOW MISSION) */}
      <Overview />
    </>
  );
}

export default HomePage;