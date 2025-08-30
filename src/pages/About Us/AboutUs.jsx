import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Hero from "../../components/Hero/Hero";
import BioSection from "../../components/BioSection/BioSection";
import ContactSection from "../../components/ContactSection/ContactSection";

const AboutUs = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <BioSection />
      <ContactSection />
    </main>
  );
};

export default AboutUs;
