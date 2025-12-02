'use client'
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Shield, Zap } from 'lucide-react';
import Link from 'next/link';

// Static particle data to prevent hydration mismatch
const staticParticles = Array.from({ length: 50 }, (_, i) => ({
  id: i,
  x: (i * 137) % 1200, // Deterministic x position
  y: (i * 197) % 800,  // Deterministic y position
  duration: 2 + (i % 3), // Deterministic duration (2-4 seconds)
  delay: (i % 20) * 0.1  // Deterministic delay (0-1.9 seconds)
}));

// Static floating element positions
const staticFloatingElements = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  top: 50 + 35 * Math.cos((i * Math.PI * 2) / 8),
  left: 50 + 35 * Math.sin((i * Math.PI * 2) / 8),
  delay: i * 0.2
}));

const AIFederal = () => {
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
      
      const handleResize = () => {
        setDimensions({ width: window.innerWidth, height: window.innerHeight });
      };
      
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden w-full">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Particles - Fixed with static data */}
        {staticParticles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            initial={{ 
              x: particle.x, 
              y: particle.y,
              opacity: 0 
            }}
            animate={{ 
              y: [null, -100, null],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay
            }}
          />
        ))}
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234f46e5' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium backdrop-blur-sm"
            >
              <Cpu className="w-4 h-4 mr-2" />
              Federal AI Solutions
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              AI Models for
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent block">
                Federal Services
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-300 leading-relaxed max-w-2xl"
            >
              Revolutionizing federal operations through advanced AI solutions. 
              Streamline processes, enhance decision-making, and improve citizen services 
              with cutting-edge artificial intelligence.
            </motion.p>

            {/* Feature Pills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              {[
                { icon: Shield, text: "Secure & Compliant" },
                { icon: Zap, text: "Real-time Analytics" },
                { icon: Cpu, text: "Advanced ML" }
              ].map((item, index) => (
                <div key={index} className="flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white border border-white/20">
                  <item.icon className="w-4 h-4 mr-2 text-blue-400" />
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Link href="/ai-federal-services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    Read Whitepaper
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Graphic */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Circle with Pulsing Animation */}
            <div className="relative w-96 h-96 mx-auto">
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 360]
                }}
                transition={{ 
                  scale: { duration: 3, repeat: Infinity },
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" }
                }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border-2 border-blue-400/30"
              />
              
              {/* Inner Circles */}
              <motion.div
                animate={{ rotate: [0, -360] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 rounded-full bg-gradient-to-r from-indigo-500/30 to-purple-500/30 border border-indigo-400/40"
              />
              
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360] 
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-16 rounded-full bg-gradient-to-r from-cyan-500/40 to-blue-500/40 border border-cyan-400/50 backdrop-blur-sm"
              />

              {/* Center Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl flex items-center justify-center shadow-2xl"
                >
                  <Cpu className="w-8 h-8 text-white" />
                </motion.div>
              </div>

              {/* Floating Elements - Fixed with static positions */}
              {staticFloatingElements.map((element) => (
                <motion.div
                  key={element.id}
                  className="absolute w-3 h-3 bg-blue-400 rounded-full"
                  style={{
                    top: `${element.top}%`,
                    left: `${element.left}%`,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: element.delay
                  }}
                />
              ))}
            </div>

            {/* Glowing Orbs */}
            <motion.div
              animate={{ 
                x: [0, 50, 0],
                y: [0, -30, 0]
              }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute top-10 right-10 w-20 h-20 bg-blue-500/30 rounded-full blur-xl"
            />
            
            <motion.div
              animate={{ 
                x: [0, -30, 0],
                y: [0, 50, 0]
              }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute bottom-10 left-10 w-16 h-16 bg-cyan-500/30 rounded-full blur-xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent"></div>
    </section>
  );
};

export default AIFederal;