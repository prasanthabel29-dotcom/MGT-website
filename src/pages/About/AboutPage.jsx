import React from "react";
import logo from "../../assets/logo.png";
import PageHero from "../../components/PageHero/PageHero";
import styles from "./AboutPage.module.css";
import AboutBrochure from "./AboutBrochure";

function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        image={logo}
        imageAlt="Majesty Global"
        imageClassName={styles.aboutHeroLogo}
        description="Majesty Global Tech Pvt. Ltd. is an innovative professional services and business consulting company that combines deep industry expertise with disruptive digital technologies to help clients solve complex business challenges."
      />

      <AboutBrochure />
    </>
  );
}

export default AboutPage;
