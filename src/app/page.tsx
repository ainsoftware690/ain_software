
import About from "./about/page";
// import Footer from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import React from "react";
import Image from "next/image";
import Services from "./services/page";
 import ReservationKart from "./reservationkart/page";
// import DigitalMarketMart from "./digitalmart/page";
import DellLogo from "../utils/Images/dell.png";
import DellService from "../utils/Images/dell-service.png";
import CiscoLogo from "../utils/Images/cisco.png";
import CiscoService from "../utils/Images/cisco-service.png";
import VmWareLogo from "../utils/Images/vmcare-brand.png";
import VmWareService from "../utils/Images/vmcare-service.png";
import CaseStudySlider from "./components/CaseStudy";
import WhyChooseUs from "./components/WhyChooseUS";

export default function Home() {
  return ( 
    <>
      <main className="flex flex-col items-center bg-white justify-center min-h-screen  overflow-hidden">
        <HeroSection />
        <div className="mt-8">
        <About />
        </div>
        {/* <Footer /> */}

        {/* <Services section></Services> */}
        {/* <div className="w-full h-auto bg-gray-900 mt-4" id="services">
        <div className="container inset-0 mx-4 px-2 py-8 lg:px-12 lg:py-4">
          <div className="text-center mb-8">
            <h2 className=" text-white text-3xl sm:text-4xl font-bold mt-5">
              Our Services
            </h2>
          </div> 

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-5">
            {services.map((service) => (
              <div
                key={service.id}
                className="relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-4">
                  {service.title}
                </h3>
                <div className="flex items-center justify-center mb-4">
                  {React.createElement(service.icon, { className: "text-6xl text-yellow-500" })}
                </div>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                <span className="absolute bottom-0 left-0 w-16 h-1 bg-green-900 mt-5 "></span>
              </div>
            ))}
          </div>
        </div>
      </div> */}
      <div className="mt-8">
         <Services />
      </div>
          <div className="mt-8">
             <ReservationKart /> 
          </div>
       {/* <div className="mt-8">
         <DigitalMarketMart />
       </div> */}
       

        {/* At-a-Glance Section */}
        <section className="w-screen bg-sky-900 py-16 px-8 md:px-16 overflow-hidden mt-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-left pl-4 mt-6 mb-4">
            At-a-Glance
          </h2>
          <div className="w-12 h-[6px] mx-4 bg-gray-400 mb-10 " />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div className="bg-[#121212] rounded-xl shadow-md p-8 flex flex-col items-center justify-center text-white min-h-[180px]">
              <h2 className="text-5xl font-extrabold mb-4">50+</h2>
              <p className="text-center text-lg font-semibold text-gray-300">
                In house creative minds
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#121212] rounded-xl shadow-md p-8 flex flex-col items-center justify-center text-white min-h-[180px]">
              <h2 className="text-5xl font-extrabold mb-4">5+</h2>
              <p className="text-center text-lg font-semibold text-gray-300">
                Years of experience
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#121212] rounded-xl shadow-md p-8 flex flex-col items-center justify-center text-white min-h-[180px]">
              <h2 className="text-5xl font-extrabold mb-4">5+</h2>
              <p className="text-center text-lg font-semibold text-gray-300">
                Clients around the world
              </p>
            </div>
          </div>
        </section>

        {/*  section end*/}

        {/* Partner section start */}
        <section className="w-screen bg-sky-900 py-16 px-8 md:px-16 text-white overflow-hidden mt-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 mx-4">Our Partners</h2>
          <div className="w-12 h-[5px] mx-4 bg-gray-400 mb-6"></div>

          <p className="max-w-3xl mb-10 text-xl font-semibold mx-4 text-gray-300">
            We are dedicated to form meaningful and trusted partnerships with
            innovative organizations and technology vendors for ensuring the
            success of client missions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Dell Partner */}
            <div className="flex flex-col items-center gap-4 bg-[#121212] p-6 py-12 rounded-md  border border-white">
              <Image src={DellLogo} alt="Dell Logo" width={75} height={40} />
              <Image
                src={DellService}
                alt="Dell Services"
                width={725}
                height={626}
                className="rounded-md"
              />
            </div>

            {/* Cisco Partner */}
            <div className="flex flex-col items-center gap-4 bg-[#121212] p-6 rounded-md border border-white">
              <Image src={CiscoLogo} alt="Cisco Logo" width={65} height={36} />
              <Image
                src={CiscoService}
                alt="Cisco Services"
                width={725}
                height={634}
                className="rounded-md"
              />
            </div>

            {/* VMcare Partner */}
            <div className="flex flex-col items-center gap-4 bg-[#121212] p-6 rounded-md border border-white">
              <Image
                src={VmWareLogo}
                alt="VMcare Logo"
                width={159}
                height={36}
              />
              <Image
                src={VmWareService}
                alt="VMcare Services"
                width={725}
                height={634}
                className="rounded-md"
              />
            </div>
          </div>
        </section>
        {/* partner section end */}
        <CaseStudySlider />
        <WhyChooseUs/> 
          </main>
    </>
  );
}
