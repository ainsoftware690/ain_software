"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import caseImage1 from "@/utils/Images/case-studies01.png";
import caseImage2 from "@/utils/Images/case-studies02.png";
// import arrowForward from "@/utils/Icons/arrow_forward.svg"; 

const slides = [
  {
    id: 0,
    title: "AIN Revolutionize Data Warehousing and Reporting Across Industries?",
    image: caseImage2,
    link: "https://ainintel.com/case-studies/how-did-ain-revolutionize-data-warehousing-and-reporting-across-industries/",
  },
  {
    id: 1,
    title: "How Did We Streamline Debt Management in the Agriculture Sector?",
    image: caseImage1,
    link: "https://ainintel.com/case-studies/how-did-we-streamline-debt-management-in-the-agriculture-sector/",
  },
];

export default function CaseStudySlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const slide = slides[currentSlide];

  return (
    <div className="w-screen bg-sky-900 px-8 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8 p-8 py-12 mt-8 overflow-hidden">
    
    <div className="flex flex-col items-center w-full max-w-[1240px] mx-auto relative mt-12 mb-12 ">
      <div className="flex flex-row items-center w-full flex-wrap lg:flex-nowrap gap-10">
        {/* Image Section */}
        <div className="w-full lg:w-[620px] h-[409px] lg:h-[590px] relative rounded-lg overflow-hidden">
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="rounded-lg object-cover"
            priority
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-left pt-8 lg:pt-[130px] px-4">
          <h2 className="text-[#FAFAFA] font-semibold text-[20px] leading-normal tracking-[0.4px] font-work-sans mb-2">
            CASE STUDIES
          </h2>
          <hr className="w-14 border-t-5 border-gray-700" />
          <h3 className="text-[#FAFAFA] font-bold text-[18px] lg:text-[44px] font-work-sans">
            {slide.title}
          </h3>

          <Link
            href={slide.link}
            className="mt-4 inline-flex items-center justify-center gap-2 px-4 py-3 text-[#FAFAFA] border hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
          >
            Read Case Study
            {/* <Image src={arrowForward} alt="arrow" width={20} height={20} /> */}
          </Link>

          {/* Pagination */}
          <div className="flex justify-start items-center mt-6 gap-4 text-[#969696] font-medium uppercase text-[16px] font-work-sans">
            <button onClick={handlePrev} className="text-2xl cursor-pointer px-2">❮</button>
            <span>{currentSlide + 1} / {slides.length}</span>
            <button onClick={handleNext} className="text-2xl cursor-pointer px-2">❯</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
