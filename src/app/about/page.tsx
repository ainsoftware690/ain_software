"use client";

import Image from "next/image";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import AboutImg from "../../utils/Images/about.jpg"

const words = `AIN Software Solutions, LLC. (AIN), an SBA 8(a) & Economically Disadvantaged Woman Owned Small Business (EDWOSB) program participant, is an innovative small business with a proven record of success delivering agile and innovative solutions to government organizations so they can perform their public mission more effectively in secure manner.`;

export default function About() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-8 py-12 bg-gray-900 overflow-hidden">
     
    
      {/* Text on Left */}
    
      <div className="md:w-1/2 w-full text-white mx-4">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <hr className="w-14 border-t-5 border-gray-700" />
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
