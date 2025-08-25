
import About from "./about/page";
// import Footer from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import React from "react";
// import Image from "next/image";
import Services from "./services/page";
 import ReservationKart from "./reservationkart/page";
// import DigitalMarketMart from "./digitalmart/page";
import CaseStudySlider from "./components/CaseStudy";
import WhyChooseUs from "./components/WhyChooseUS";
import AtAGlanceSection from "./components/At-glance";
import ModernPartnersSection from "./components/ModernPartnersSection";

export default function Home() {
  return ( 
    <>
      <main className="flex flex-col items-center bg-white justify-center min-h-screen  overflow-hidden">
        <HeroSection />
        <About />
         <Services />   
         <ReservationKart /> 
         <AtAGlanceSection />
        <ModernPartnersSection />
        <CaseStudySlider />
        <WhyChooseUs/> 
          </main>
    </>
  );
}
