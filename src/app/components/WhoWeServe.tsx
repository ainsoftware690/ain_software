"use client";
import React from "react";
import { Building2, ShieldCheck, Heart, Banknote, Zap, Globe } from "lucide-react";

const industries = [
  {
    title: "Federal Government",
    description: "Secure, compliant, and mission-ready solutions for U.S. agencies.",
    icon: <Building2 className="w-12 h-12 text-blue-400" />,
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "Defense & Security", 
    description: "Trusted IT and cybersecurity services supporting national defense.",
    icon: <ShieldCheck className="w-12 h-12 text-emerald-400" />,
    gradient: "from-emerald-500/20 to-teal-500/20"
  },
  {
    title: "Healthcare",
    description: "Digital solutions to improve patient outcomes and public health systems.",
    icon: <Heart className="w-12 h-12 text-rose-400" />,
    gradient: "from-rose-500/20 to-pink-500/20"
  },
  {
    title: "Financial Services",
    description: "Reliable and compliant technology for secure financial operations.",
    icon: <Banknote className="w-12 h-12 text-amber-400" />,
    gradient: "from-amber-500/20 to-orange-500/20"
  },
  {
    title: "Energy & Utilities",
    description: "Smart and resilient IT systems powering critical infrastructure.",
    icon: <Zap className="w-12 h-12 text-yellow-400" />,
    gradient: "from-yellow-500/20 to-lime-500/20"
  },
  {
    title: "Enterprise & Commercial",
    description: "Agile business solutions for enterprises in a competitive landscape.",
    icon: <Globe className="w-12 h-12 text-violet-400" />,
    gradient: "from-violet-500/20 to-purple-500/20"
  },
];

// Duplicate the array for seamless infinite scroll
const infiniteIndustries = [...industries, ...industries, ...industries];

export default function WhoWeServe() {
  return (
    <section className="relative min-h-screen overflow-hidden w-full">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      </div>

      {/* Glass Morphism Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 backdrop-blur-[1px]"></div>

      <div className="relative z-10 py-20">
        <div className="w-full">
          {/* Header Section - Left Aligned */}
          <div className="text-left mb-16 px-6 max-w-7xl mx-auto">
            <div className="relative">
              {/* Highlighted Background */}
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-400 via-cyan-400 to-blue-600 rounded-full"></div>
              
              <div className="pl-8">
                <div className="inline-flex items-center gap-2 bg-blue-500/10 backdrop-blur-sm border border-blue-400/20 rounded-full px-6 py-2 mb-6 relative">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <span className="text-blue-300 text-sm font-medium">Our Industries</span>
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-lg opacity-50"></div>
                </div>
                
                <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent mb-6 relative">
                  Who We Serve
                  {/* Text Shadow/Glow */}
                  <div className="absolute inset-0 text-5xl md:text-6xl font-bold text-blue-400/20 blur-sm">
                    Who We Serve
                  </div>
                </h2>
                
                <div className="text-xl text-blue-200/80 max-w-3xl leading-relaxed relative">
                  We deliver mission-focused solutions to industries that demand security, agility, 
                  and innovation in today's digital landscape.
                  {/* Highlight Bar */}
                  <div className="absolute -left-4 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Continuous Scrolling Cards Container */}
          <div className="relative overflow-hidden w-full">
            {/* Gradient Masks for smooth edges */}
            <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-slate-900 via-blue-900/80 to-transparent z-20 pointer-events-none"></div>
            <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-slate-900 via-blue-900/80 to-transparent z-20 pointer-events-none"></div>

            {/* Infinite Scrolling Cards */}
            <div className="flex animate-infinite-scroll hover:pause-animation">
              {infiniteIndustries.map((industry, idx) => (
                <div
                  key={`${industry.title}-${idx}`}
                  className="flex-shrink-0 w-80 mx-4 group relative overflow-hidden rounded-3xl backdrop-blur-sm border border-white/10 p-8 shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl"
                  style={{
                    background: `linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)`,
                    backdropFilter: 'blur(20px)',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                  }}
                >
                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400/50 via-cyan-400/50 to-blue-400/50 blur-sm"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon Container */}
                    <div className="flex justify-center mb-6">
                      <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                        {industry.icon}
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-4 text-center group-hover:text-blue-200 transition-colors duration-300">
                      {industry.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-blue-200/80 text-center leading-relaxed group-hover:text-blue-100 transition-colors duration-300">
                      {industry.description}
                    </p>

                    {/* Hover Accent */}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-16 transition-all duration-500 rounded-full"></div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Decorative Element */}
          <div className="flex justify-center mt-16">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Static Floating Particles - No Random Values */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse top-[10%] left-[15%]" style={{animationDelay: '0s'}}></div>
        <div className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse top-[25%] left-[85%]" style={{animationDelay: '1s'}}></div>
        <div className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse top-[45%] left-[5%]" style={{animationDelay: '2s'}}></div>
        <div className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse top-[65%] left-[75%]" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse top-[80%] left-[25%]" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse top-[35%] left-[60%]" style={{animationDelay: '2.5s'}}></div>
        <div className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse top-[55%] left-[40%]" style={{animationDelay: '0.8s'}}></div>
        <div className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse top-[75%] left-[90%]" style={{animationDelay: '1.8s'}}></div>
      </div>

      <style jsx>{`
        @keyframes infinite-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-infinite-scroll {
          animation: infinite-scroll 30s linear infinite;
          width: calc(320px * 18); /* 18 cards total (6 * 3) with margins */
        }

        .hover\\:pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}