"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from "lucide-react";

import caseImage1 from "@/utils/Images/case-studies01.png";
import caseImage2 from "@/utils/Images/case-studies02.png";

// Define the type for a particle
type Particle = {
  id: number;
  left: number;
  top: number;
  delay: number;
  duration: number;
};

const slides = [
  {
    id: 0,
    title: "AIN Revolutionize Data Warehousing and Reporting Across Industries?",
    image: caseImage2,
    link: "https://ainintel.com/case-studies/how-did-ain-revolutionize-data-warehousing-and-reporting-across-industries/",
    category: "Data Analytics",
    description: "Transforming enterprise data infrastructure with cutting-edge AI solutions"
  },
  {
    id: 1,
    title: "How Did We Streamline Debt Management in the Agriculture Sector?",
    image: caseImage1,
    link: "https://ainintel.com/case-studies/how-did-we-streamline-debt-management-in-the-agriculture-sector/",
    category: "AgriTech",
    description: "Revolutionary debt management solutions for agricultural businesses"
  },
];

export default function CaseStudySlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);

  // Generate particles on client-side only to avoid hydration mismatch
  useEffect(() => {
    const generatedParticles: Particle[] = [...Array(20)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 3 + Math.random() * 2
    }));
    setParticles(generatedParticles);
  }, []);

  const handleSlideChange = (newSlide: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(newSlide);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handlePrev = () => {
    const newSlide = (currentSlide - 1 + slides.length) % slides.length;
    handleSlideChange(newSlide);
  };

  const handleNext = () => {
    const newSlide = (currentSlide + 1) % slides.length;
    handleSlideChange(newSlide);
  };

  const slide = slides[currentSlide];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden px-4 ">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-2 h-2 bg-white rounded-full opacity-30 animate-bounce"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-500 ${
            isAnimating ? 'opacity-50 transform scale-95' : 'opacity-100 transform scale-100'
          }`}>
            
            {/* Content Section */}
            <div className="space-y-8 order-2 lg:order-1">
              {/* Category Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-full text-cyan-300 text-sm font-medium mt-4">
                <Sparkles className="w-4 h-4" />
                <span className="bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent font-semibold tracking-wide">
                  CASE STUDIES
                </span>
              </div>

              {/* Main Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
                  {slide.title}
                </span>
              </h1>

              {/* Description */}
              <p className="text-gray-300 text-lg sm:text-xl leading-relaxed max-w-2xl">
                {slide.description}
              </p>

              {/* Category Tag */}
              <div className="inline-block px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full">
                <span className="text-purple-300 text-sm font-medium">{slide.category}</span>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <Link 
                  href={slide.link}
                  className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
                >
                  <span className="relative z-10">Read Case Study</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                  
                  {/* Button Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-700 blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Image Section */}
            <div className="relative order-1 lg:order-2">
              <div className="relative group">
                {/* Main Image Container */}
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 p-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 rounded-3xl opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative overflow-hidden rounded-3xl">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      width={600}
                      height={400}
                      className="w-full h-80 sm:h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                      priority={currentSlide === slide.id}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl opacity-80 animate-bounce delay-300 blur-sm"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl opacity-60 animate-pulse blur-sm"></div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center mt-16 gap-8 mb-10">
            {/* Previous Button */}
            <button
              onClick={handlePrev}
              className="group flex items-center justify-center w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl hover:bg-white/20 hover:border-cyan-500/50 transition-all duration-300 hover:scale-110"
              disabled={isAnimating}
            >
              <ChevronLeft className="w-6 h-6 text-gray-300 group-hover:text-cyan-300 transition-colors duration-300" />
            </button>

            {/* Slide Indicators */}
            <div className="flex items-center gap-4">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleSlideChange(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'w-12 bg-gradient-to-r from-cyan-500 to-blue-500'
                      : 'w-3 bg-white/30 hover:bg-white/50'
                  }`}
                  disabled={isAnimating}
                />
              ))}
            </div>

            {/* Page Counter */}
            <div className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl">
              <span className="text-white font-medium text-sm">
                {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
              </span>
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="group flex items-center justify-center w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl hover:bg-white/20 hover:border-cyan-500/50 transition-all duration-300 hover:scale-110 "
              disabled={isAnimating}
            >
              <ChevronRight className="w-6 h-6 text-gray-300 group-hover:text-cyan-300 transition-colors duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
    </div>
  );
}