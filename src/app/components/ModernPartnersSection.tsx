"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Import your images
import DellLogo from "../../utils/Images/dell.png";
import DellService from "../../utils/Images/dell-service.png";
import CiscoLogo from "../../utils/Images/cisco.png";
import CiscoService from "../../utils/Images/cisco-service.png";
import VmWareLogo from "../../utils/Images/vmcare-brand.png";
import VmWareService from "../../utils/Images/vmcare-service.png";

// Define the type for a particle
type Particle = {
  id: number;
  left: number;
  top: number;
  delay: number;
  duration: number;
};

const ModernPartnersSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    // Generate particles on client side only to avoid hydration mismatch
    const generateParticles = () => {
      const newParticles: Particle[] = [];
      for (let i = 0; i < 20; i++) {
        newParticles.push({
          id: i,
          left: Math.random() * 100,
          top: Math.random() * 100,
          delay: Math.random() * 3,
          duration: 3 + Math.random() * 2
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  const partners = [
    {
      id: 'dell',
      name: 'Dell Technologies',
      logo: DellLogo,
      serviceImage: DellService,
      subtitle: 'Enterprise Solutions',
      description: 'Leading technology solutions for digital transformation',
      gradient: 'from-blue-600 via-blue-700 to-indigo-800',
      accentColor: 'border-blue-400/50',
      link: 'https://www.dell.com'
    },
    {
      id: 'cisco',
      name: 'Cisco Systems',
      logo: CiscoLogo,
      serviceImage: CiscoService,
      subtitle: 'Network Infrastructure',
      description: 'Powering connections across the digital landscape',
      gradient: 'from-teal-600 via-cyan-700 to-blue-800',
      accentColor: 'border-cyan-400/50',
      link: 'https://www.cisco.com'
    },
    {
      id: 'vmware',
      name: 'VMware',
      logo: VmWareLogo,
      serviceImage: VmWareService,
      subtitle: 'Cloud Computing',
      description: 'Virtualization and cloud infrastructure solutions',
      gradient: 'from-purple-600 via-indigo-700 to-blue-800',
      accentColor: 'border-purple-400/50',
      link: 'https://www.vmware.com'
    }
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      {/* Floating Particles - Client-side only */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 px-6 md:px-12 lg:px-20 py-20">
        {/* Header Section */}
        <div className={`mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse"></div>
            <span className="text-cyan-400 text-sm font-medium tracking-wider uppercase">Strategic Partnerships</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-cyan-300 bg-clip-text text-transparent">
            Our Partners
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full mb-8"></div>
          
          <p className="max-w-4xl text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
            We are dedicated to form meaningful and trusted partnerships with
            <span className="text-white font-medium"> innovative organizations</span> and
            <span className="text-white font-medium"> technology vendors</span> for ensuring the
            success of client missions.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {partners.map((partner, index) => (
            <div
              key={partner.id}
              className={`group relative transform transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredCard(partner.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Container */}
              <div className="relative h-[500px] rounded-2xl overflow-hidden border border-white/10 backdrop-blur-sm bg-black/20 hover:border-white/30 transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:shadow-blue-500/20">
                
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${partner.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
                
                {/* Animated Border Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                
                {/* Content */}
                <div className="relative z-10 p-8 h-full flex flex-col">
                  
                  {/* Logo Section */}
                  <div className="flex-shrink-0 mb-6">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-xl bg-white shadow-lg group-hover:scale-110 transition-transform duration-300 overflow-hidden p-2">
                      <Image
                        src={partner.logo} 
                        alt={`${partner.name} logo`} 
                        width={80}
                        height={40}
                        className="object-contain max-w-full max-h-full"
                        priority
                      />
                    </div>
                    <div className="mt-4">
                      <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors duration-300">
                        {partner.name}
                      </h3>
                      <p className="text-cyan-400 text-sm font-medium tracking-wide uppercase">
                        {partner.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Service Image */}
                  <div className="flex-grow mb-6 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 overflow-hidden group-hover:border-gray-600 transition-colors duration-300">
                    <Image
                      src={partner.serviceImage} 
                      alt={`${partner.name} services`}
                      width={400}
                      height={280}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      priority
                    />
                  </div>

                  {/* Description */}
                  <div className="flex-shrink-0">
                    <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                      {partner.description}
                    </p>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${partner.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>
                </div>

                {/* Bottom Glow Effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Floating Action Button */}
              <Link
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute -bottom-4 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-y-0 translate-y-4"
              >
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${partner.gradient} shadow-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300`}>
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        {/* <div className={`mt-20 text-center transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-semibold tracking-wide hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30">
            <span className="relative z-10">Explore Partnerships</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div> */}
     
{/* Call to Action */}
<div className={`mt-20 text-center transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
  <button
    className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-semibold tracking-wide hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30"
    onClick={() => setShowModal(true)}
  >
    <span className="relative z-10">Explore Partnerships</span>
    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  </button>
</div>

{/* Modal */}
{showModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
    <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full p-8 relative">
      <button
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl"
        onClick={() => setShowModal(false)}
        aria-label="Close"
      >
        &times;
      </button>
      <h3 className="text-2xl font-bold mb-4 text-center text-blue-700">Our Partner Companies</h3>
      <ul className="space-y-4">
        {partners.map((partner) => (
          <li key={partner.id} className="flex items-center gap-4">
            <Image src={partner.logo} alt={partner.name} width={40} height={40} className="rounded-lg" />
            <div>
              <div className="font-semibold text-gray-800">{partner.name}</div>
              <div className="text-sm text-gray-500">{partner.subtitle}</div>
            </div>
            <a
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto text-cyan-600 hover:underline text-sm"
            >
              Visit
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
)}
</div>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(120deg); }
          66% { transform: translateY(5px) rotate(240deg); }
        }
        
        @keyframes spin-slow {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ModernPartnersSection;