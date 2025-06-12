"use client";

import Image from "next/image";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import AboutImg from "../../utils/Images/about.jpg";

const aboutText = `At EARTHCONN TRAVEL LLC (trade name RESERVATIONKART.com) - a certified participant in the SBA 8(a) Business Development Program and recognized as an Economically Disadvantaged Woman-Owned Small Business (EDWOSB). Together, these entities form a cohesive and dynamic enterprise that brings a diverse portfolio of capabilities to both commercial and government sectors.`;

const noteText = `NOTE - AIN Software Solution (OPC) Pvt Ltd operates under the umbrella of Earthconn Travel LLC.`;

export default function About() {
  return (
    <div className="w-screen bg-sky-900 px-7 md:px-14 flex flex-col items-center justify-center gap-6 p-8 py-12 overflow-hidden text-white">
      {/* Content Row */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-6">
        {/* Left Column: Text */}
        <div className="md:w-1/2 w-full mx-4">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <hr className="w-14 border-t-4 border-gray-400 mb-4" />

          {/* Main text animation */}
          <div className="text-sm leading-relaxed">
            <TextGenerateEffect duration={1} filter={false} words={aboutText} />

            {/* Separate note with animation */}
            <div className="mt-6 text-yellow-400 font-semibold">
              <TextGenerateEffect duration={2.5} filter={false} words={noteText} />
            </div>
          </div>
        </div>

        {/* Right Column: Image */}
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
    </div>
  );
}
