"use client";
import React from "react";
import Link from "next/link";
import { CardSpotlight } from "../components/ui/card-spotlight";

export default function Services() {
  return (
    <div className="w-screen py-10 px-4 md:px-10 bg-sky-900 h-auto text-white overflow-hidden">
      <h2 className="text-4xl md:text-5xl font-bold text-center mt-6 mb-4">
        Services
      </h2> 
      <div className="flex justify-center mb-10">
        <hr className="w-48 border-t-5 border-gray-400" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center mt-6 ">
        <ServiceCard
          number="01"
          title="Product Development"
          description="Our company specializes in end-to-end product development, offering comprehensive solutions that encompass every stage of the product lifecycle."
        />
        <ServiceCard
          number="02"
          title="Digital Modernization"
          description="AIN modernizes government IT, aligning solutions with objectives and security for enhanced citizen engagement and effectiveness."
        />
        <ServiceCard
          number="03"
          title="Technology Partner Consulting"
          description="AIN Solutions provides technology consulting to help federal agencies enhance efficiency and secure innovation."
        />
      </div>
    </div>
  );
}

function ServiceCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <CardSpotlight className=" bg-[#111] rounded-lg p-6 h-auto shadow-md hover:shadow-blue-500/30 transition-shadow">
      <div className="flex items-center mb-6">
        <div className="bg-blue-600 text-white font-bold w-18 h-18 flex items-center justify-center rounded-md text-xl">
          {number}
        </div>
      </div>
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-neutral-300 text-md mb-6">{description}</p>
      <Link href="/services">
        <button className="mt-auto bg-transparent border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-black transition-all text-sm">
          Contact Ain →
        </button>
      </Link>
    </CardSpotlight>
  );
}
