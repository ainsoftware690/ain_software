"use client";
import Image from "next/image";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import AboutImg from "../../utils/Images/about.jpg";

const aboutText = `At EARTHCONN TRAVEL LLC (trade name RESERVATIONKART.com) - a certified participant in the SBA 8(a) Business Development Program and recognized as an Economically Disadvantaged Woman-Owned Small Business (EDWOSB). Together, these entities form a cohesive and dynamic enterprise that brings a diverse portfolio of capabilities to both commercial and government sectors.`;

const noteText = `NOTE - AIN Software Solution (OPC) Pvt Ltd operates under the umbrella of Earthconn Travel LLC.`;

export default function About() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-400/10 to-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-indigo-400/10 to-purple-600/10 rounded-full blur-3xl"></div>
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="relative z-10 px-6 md:px-16 lg:px-24 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          {/* Content Row */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
            
            {/* Left Column: Text */}
            <div className="lg:w-1/2 w-full space-y-8">
              
              {/* Header Section */}
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-full border border-blue-400/20 backdrop-blur-sm">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-blue-300">About Our Company</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent leading-tight">
                  About Us
                </h1>
                
                {/* Modern gradient line */}
                <div className="flex items-center gap-4">
                  <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 rounded-full shadow-lg shadow-blue-500/50"></div>
                  <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-transparent rounded-full"></div>
                  <div className="w-6 h-1 bg-gradient-to-r from-blue-400 to-transparent rounded-full"></div>
                </div>
              </div>

              {/* Main Content Card */}
              <div className="relative">
                {/* Glass morphism background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl"></div>
                
                <div className="relative p-8 space-y-6">
                  {/* Main text */}
                  <div className="text-gray-200 text-lg leading-relaxed font-light">
                    <TextGenerateEffect 
                      duration={1} 
                      filter={false} 
                      words={aboutText}
                      className="text-gray-200"
                    />
                  </div>

                  {/* Separator */}
                  <div className="flex items-center gap-4 py-4">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full shadow-lg shadow-blue-400/50"></div>
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>
                  </div>

                  {/* Note section */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 rounded-xl border border-amber-400/20"></div>
                    <div className="relative p-4 flex items-start gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                      <div className="text-amber-100 font-medium text-base leading-relaxed">
                        <TextGenerateEffect 
                          duration={2.5} 
                          filter={false} 
                          words={noteText}
                          className="text-amber-100"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats or highlights section */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gradient-to-br from-blue-600/10 to-cyan-600/10 rounded-xl border border-blue-400/20 backdrop-blur-sm">
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">SBA 8(a)</div>
                  <div className="text-sm text-blue-200">Certified</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-xl border border-purple-400/20 backdrop-blur-sm">
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">EDWOSB</div>
                  <div className="text-sm text-purple-200">Recognized</div>
                </div>
              </div>

            </div>

            {/* Right Column: Image */}
            <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                
                {/* Image container */}
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-2">
                  <Image
                    src={AboutImg}
                    alt="About Visual"
                    width={600}
                    height={600}
                    className="rounded-xl object-cover shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-2 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent rounded-xl pointer-events-none"></div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full shadow-lg shadow-blue-400/50 animate-bounce"></div>
                <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full shadow-lg shadow-purple-400/50 animate-pulse"></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}