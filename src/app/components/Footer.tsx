"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaLocationDot, FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa6";
import { MdAddIcCall, MdOutlineMarkEmailRead } from "react-icons/md";

type Particle = {
  id: number;  
  left: number;
  top: number;
  delay: number;
  duration: number;
};

type FloatingShape = {
  id: number;
  left: number;
  top: number;
  size: number;
  delay: number;
  duration: number;
  blur: number;
};

const Footer = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [floatingShapes, setFloatingShapes] = useState<FloatingShape[]>([]);

  // Generate particles and shapes only on client side to avoid hydration mismatch
  useEffect(() => {
    const particleArray = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4
    }));
    
    const shapeArray = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: 100 + Math.random() * 200,
      delay: Math.random() * 3,
      duration: 8 + Math.random() * 6,
      blur: 40 + Math.random() * 60
    }));
    
    setParticles(particleArray);
    setFloatingShapes(shapeArray);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Multi-layered Animated Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900"></div>
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/80 via-purple-800/60 to-pink-900/80 animate-pulse"></div>
        
        {/* Moving gradient waves */}
        <div className="absolute inset-0 opacity-60">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-radial from-cyan-500/30 via-blue-600/20 to-transparent rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
          <div className="absolute top-20 -right-32 w-80 h-80 bg-gradient-radial from-purple-500/40 via-pink-500/20 to-transparent rounded-full animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>
          <div className="absolute bottom-10 left-20 w-64 h-64 bg-gradient-radial from-emerald-500/30 via-teal-500/20 to-transparent rounded-full animate-spin" style={{ animationDuration: '18s' }}></div>
        </div>
        
        {/* Mesh gradient background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-600/40 via-fuchsia-500/30 to-cyan-400/40 animate-pulse" style={{ animationDuration: '4s' }}></div>
        </div>
        
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          {floatingShapes.map((shape) => (
            <div
              key={shape.id}
              className="absolute rounded-full opacity-20 animate-bounce"
              style={{
                left: `${shape.left}%`,
                top: `${shape.top}%`,
                width: `${shape.size}px`,
                height: `${shape.size}px`,
                background: `linear-gradient(45deg, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.3), rgba(236, 72, 153, 0.3))`,
                filter: `blur(${shape.blur}px)`,
                animationDelay: `${shape.delay}s`,
                animationDuration: `${shape.duration}s`,
                transform: 'translate(-50%, -50%)'
              }}
            />
          ))}
        </div>
        
        {/* Enhanced floating particles */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute rounded-full animate-bounce"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                width: '3px',
                height: '3px',
                background: `linear-gradient(45deg, rgba(34, 211, 238, 0.8), rgba(168, 85, 247, 0.8))`,
                boxShadow: '0 0 10px rgba(34, 211, 238, 0.5)',
                animationDelay: `${particle.delay}s`,
                animationDuration: `${particle.duration}s`
              }}
            />
          ))}
        </div>
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        ></div>
      </div>

      {/* Enhanced Glassmorphism Container */}
      <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-white/10 border-t border-white/20 shadow-2xl">
        {/* Glowing top border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"></div>
        
        <div className="mx-auto px-8 md:px-16 py-12">
          <div className="md:flex md:justify-between">
            {/* Logo and Contact Section */}
            <div className="mb-8 md:mb-0 group">
              <Link href="/" className="block group mb-8">
                <div className="relative w-20 h-20 hover:scale-110 transition-all duration-500">
                  {/* Glowing ring around logo */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/50 to-purple-400/50 p-0.5 animate-spin" style={{ animationDuration: '3s' }}>
                    <div className="w-full h-full bg-white rounded-2xl"></div>
                  </div>
                  <div className="relative w-full h-full bg-white rounded-2xl p-2 shadow-2xl hover:shadow-cyan-500/40 transition-all duration-500 z-10">
                    <Image
                      src="/images/earthconnlogo.png"
                      alt="Earthconn Logo"
                      width={64}
                      height={64}
                      className="object-contain w-full h-full"
                      priority
                    />
                  </div>
                </div>
              </Link>

              {/* Enhanced Contact Info with Neon Effects */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-white/10 to-white/5 hover:from-cyan-500/20 hover:to-blue-500/20 border border-white/10 hover:border-cyan-400/50 transition-all duration-500 group cursor-pointer backdrop-blur-sm shadow-lg hover:shadow-cyan-400/20">
                  <div className="text-2xl text-cyan-400 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 drop-shadow-lg">
                    <MdAddIcCall />
                  </div>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-500 font-medium">
                    +1(888) 206-5831
                  </p>
                </div>

                <div className="flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-white/10 to-white/5 hover:from-emerald-500/20 hover:to-green-500/20 border border-white/10 hover:border-emerald-400/50 transition-all duration-500 group backdrop-blur-sm shadow-lg hover:shadow-emerald-400/20">
                  <div className="text-2xl text-emerald-400 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 drop-shadow-lg">
                    <MdOutlineMarkEmailRead />
                  </div>
                  <Link
                    href="mailto:helpdesk@earthconntravels.com"
                    className="text-gray-300 hover:text-white transition-colors duration-500 hover:underline font-medium"
                  >
                    helpdesk@earthconntravels.com
                  </Link>
                </div>

                <div className="flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-white/10 to-white/5 hover:from-rose-500/20 hover:to-pink-500/20 border border-white/10 hover:border-rose-400/50 transition-all duration-500 group backdrop-blur-sm shadow-lg hover:shadow-rose-400/20">
                  <div className="text-2xl text-rose-400 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 drop-shadow-lg">
                    <FaLocationDot />
                  </div>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-500 font-medium">
                    Head office - 30 Summer St Hagerstown MD, 21740
                  </p>
                </div>
              </div>
            </div>

            {/* Enhanced Navigation Links */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {/* Quick Links */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6 tracking-wide relative">
                  QUICK LINKS
                  <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 animate-pulse"></div>
                </h3>
                <div className="space-y-3">
                  {[
                    { name: "Home", href: "/" },
                    { name: "About", href: "/about" },
                    { name: "Services", href: "/services" },
                    { name: "Contact", href: "/contact" }
                  ].map((link, index) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block text-gray-300 hover:text-white transition-all duration-500 hover:translate-x-3 hover:drop-shadow-lg font-medium group relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-blue-400/0 to-purple-400/0 group-hover:from-cyan-400/10 group-hover:via-blue-400/10 group-hover:to-purple-400/10 transition-all duration-500 rounded-lg"></div>
                      <span className="relative z-10 block py-2 px-3 rounded-lg">
                        {link.name}
                        <span className="absolute bottom-0 left-3 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-500 group-hover:w-16"></span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent mb-6 tracking-wide relative">
                  FOLLOW US
                  <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-rose-400 animate-pulse"></div>
                </h3>
                <div className="space-y-3">
                  {[
                    { name: "Instagram", href: "https://www.instagram.com/blue_star_motors/?igshid=MzRlODBiNWFlZA%3D", icon: FaInstagram },
                    { name: "LinkedIn", href: "https://www.linkedin.com/company/earthconn-travel-llc/about/?viewAsMember=true", icon: FaLinkedinIn },
                    { name: "Facebook", href: "https://www.facebook.com/people/Mudassar-Shaikh/100083367522006/?mibextid=ZbWKwL", icon: FaFacebookF }
                  ].map((social) => (
                    <Link
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-gray-300 hover:text-white transition-all duration-500 group font-medium relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-400/0 to-pink-400/0 group-hover:from-purple-400/10 group-hover:to-pink-400/10 transition-all duration-500 rounded-lg"></div>
                      <social.icon className="text-lg group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 relative z-10 drop-shadow-lg" />
                      <span className="group-hover:translate-x-2 transition-all duration-500 relative z-10">
                        {social.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Legal */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent mb-6 tracking-wide relative">
                  LEGAL
                  <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 animate-pulse"></div>
                </h3>
                <div className="space-y-3">
                  {[
                    { name: "Privacy Policy", href: "/privacy-policy" },
                    { name: "Terms & Conditions", href: "/terms&conditions" }
                  ].map((legal) => (
                    <Link
                      key={legal.name}
                      href={legal.href}
                      className="block text-gray-300 hover:text-white transition-all duration-500 hover:translate-x-3 font-medium group relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/0 to-teal-400/0 group-hover:from-emerald-400/10 group-hover:to-teal-400/10 transition-all duration-500 rounded-lg"></div>
                      <span className="relative z-10 block py-2 px-3 rounded-lg">
                        {legal.name}
                        <span className="absolute bottom-0 left-3 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 transition-all duration-500 group-hover:w-20"></span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Divider with Animation */}
          <div className="my-8 relative">
            <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
            <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent animate-pulse"></div>
          </div>

          {/* Enhanced Bottom Section */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center space-y-4 lg:space-y-0">
            {/* Company Info with Neon Effects */}
            <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <span className="text-sm text-gray-400 px-4 py-2 bg-gradient-to-r from-white/10 to-white/5 rounded-full backdrop-blur-sm border border-white/20 font-medium hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-500">
                UEI SAM:TL85Q7ANXGC3
              </span>
              <span className="text-sm text-gray-400 px-4 py-2 bg-gradient-to-r from-white/10 to-white/5 rounded-full backdrop-blur-sm border border-white/20 font-medium hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-400/20 transition-all duration-500">
                CAGE: 14B86
              </span>
            </div>

            {/* Copyright */}
            <div className="text-center">
              <span className="text-sm text-gray-400 font-medium">
                © 2025{" "}
                <Link href="/" className="hover:text-white transition-all duration-500 font-semibold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text hover:text-transparent bg-300% animate-gradient-x">
                  Earthconntravels
                </Link>
                . All Rights Reserved.
              </span>
            </div>

            {/* Enhanced Social Icons with Glow Effects */}
            <div className="flex justify-center lg:justify-end space-x-4">
              {[
                { icon: FaFacebookF, href: "https://www.facebook.com/people/100083367522006/?mibextid=ZbWKwL", color: "hover:bg-blue-500/30 hover:text-blue-400 hover:border-blue-400/60 hover:shadow-blue-400/50" },
                { icon: FaLinkedinIn, href: "https://www.linkedin.com/company/earthconn-travel-llc/about/?viewAsMember=true", color: "hover:bg-blue-600/30 hover:text-blue-500 hover:border-blue-500/60 hover:shadow-blue-500/50" },
                { icon: FaTwitter, href: "#", color: "hover:bg-sky-500/30 hover:text-sky-400 hover:border-sky-400/60 hover:shadow-sky-400/50" },
                { icon: FaInstagram, href: "https://www.instagram.com", color: "hover:bg-pink-500/30 hover:text-pink-400 hover:border-pink-400/60 hover:shadow-pink-400/50" }
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm rounded-xl border border-white/30 flex items-center justify-center text-gray-300 ${social.color} transition-all duration-500 hover:scale-125 hover:rotate-12 hover:shadow-2xl group relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/0 group-hover:from-white/10 group-hover:to-white/5 transition-all duration-500 rounded-xl"></div>
                  <social.icon className="w-4 h-4 group-hover:scale-110 transition-all duration-500 relative z-10 drop-shadow-lg" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
          background-size: 200% 200%;
        }
        .bg-300% {
          background-size: 300% 300%;
        }
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
};

export default Footer; 