import React from 'react'
import NavBar from '../../components/NavBar/NavBar';
import ContactSection from '../../components/ContactSection/ContactSection';
import Portfolio from '../../components/Portfolio/Portfolio';
import LogoBar from '../../components/LogoBar/LogoBar';
import DesignCards from '../../components/DesignCards/DesignCards';
import WorkSection from '../../components/WorkSection/WorkSection';
import ClientsReview from '../../components/ClientsReview/ClientsReview';

const Home = () => {
  return (
    <main>
      <NavBar />
      <Portfolio />
      <LogoBar />
      <DesignCards />
      <WorkSection />
      <ClientsReview />
      <ContactSection />
    </main>
  )
}

export default Home;