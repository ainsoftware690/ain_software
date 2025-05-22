"use client";

import Image from "next/image";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import AboutImg from "../../utils/Images/about.jpg"

const words = `DIGITALMARKETKART and AINSOFTWARE SOLUTIONS (OPC) PVT LTD operate under the umbrella of EARTHCONN TRAVEL LLC, doing business as RESERVATIONKART—a certified participant in the SBA 8(a) Business Development Program and recognized as an Economically Disadvantaged Woman-Owned Small Business (EDWOSB). Together, these entities form a cohesive and dynamic enterprise that brings a diverse portfolio of capabilities to both commercial and government sectors.`;

export default function About() {
  return (

    <div className=" w-screen bg-sky-900 px-7 md:px-14 flex flex-col md:flex-row items-center justify-between gap-6 p-8 py-12  overflow-hidden">
     
    
      {/* Text on Left */}
    
      <div className="md:w-1/2 w-full text-white mx-4">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <hr className="w-14 border-t-5 border-gray-400" />
        <TextGenerateEffect duration={2} filter={false} words={words} />
      </div>
       
      {/* Image on Right */}
      <div className="md:w-1/2 w-full flex justify-center">
     
        <Image
          src={AboutImg}
          alt="About Visual"
          width={500}
          height={500}
          className="rounded-xl object-cover"
        />
      </div>
    
      
      
    </div>
  );
}
