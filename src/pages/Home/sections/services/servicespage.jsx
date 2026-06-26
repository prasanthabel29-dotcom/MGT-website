import React from "react";
import Services from "./services";
import heroimg from "../../../../assets/Services1.png";
import PageHero from "../../../../components/PageHero/PageHero";

function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        image={heroimg}
        imageAlt="Majesty Global Services"
        description="We are engaged in innovative software development, website design & development, mobile app development, ERP app development and digital marketing utilizing advanced technologies."
      />

      <Services showTitle={false} />
    </>
  );
}

export default ServicesPage;
