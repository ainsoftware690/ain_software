"use client";
import React, { useState, useEffect, useRef } from 'react';

const AnimatedCounter = ({ end = 0, duration = 2000, suffix = "+", label = "", icon = "✨", delay = 0 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        const startTime = Date.now();
        const startValue = 0;
        
        const updateCounter = () => {
          const now = Date.now();
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          
          const easeOutQuart = 1 - Math.pow(1 - progress, 4);
          const currentValue = Math.floor(startValue + (end - startValue) * easeOutQuart);
          
          setCount(currentValue);
          
          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          }
        };
        
        requestAnimationFrame(updateCounter);
      }, delay);
    }
  }, [isVisible, end, duration, delay]);

  return (
    <div 
      ref={counterRef}
      className="group relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 hover:scale-105 p-8 flex flex-col items-center justify-center text-white min-h-[280px] border border-gray-700/50 hover:border-blue-400/70 overflow-hidden transform perspective-1000"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-cyan-600/20 to-slate-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        {[
          { left: 20, top: 30, delay: 0.5, duration: 2.5 },
          { left: 80, top: 60, delay: 1.2, duration: 3.2 },
          { left: 50, top: 20, delay: 2.1, duration: 2.8 },
          { left: 30, top: 80, delay: 0.8, duration: 3.5 },
          { left: 70, top: 40, delay: 1.8, duration: 2.2 },
          { left: 90, top: 70, delay: 0.3, duration: 3.8 },
          { left: 10, top: 50, delay: 2.5, duration: 2.9 },
          { left: 60, top: 10, delay: 1.5, duration: 3.1 }
        ].map((particle, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-30 animate-pulse"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`
            }}
          />
        ))}
      </div>
      
      {/* Icon with glow effect */}
      <div className="text-4xl mb-4 filter drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 animate-pulse">
          {icon}
        </span>
      </div>
      
      {/* Counter with enhanced styling */}
      <h2 className="text-7xl font-black mb-6 bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent leading-none group-hover:from-blue-300 group-hover:via-cyan-300 group-hover:to-blue-200 transition-all duration-500 drop-shadow-2xl">
        {count}<span className="text-5xl">{suffix}</span>
      </h2>
      
      {/* Label with improved typography */}
      <p className="text-center text-lg font-semibold text-gray-300 group-hover:text-white leading-relaxed transition-colors duration-300 tracking-wide">
        {label}
      </p>
      
      {/* Subtle shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl" />
    </div>
  );
};

const AtAGlanceSection = () => {
  const stats = [
    { end: 50, label: "Creative Minds in House", icon: "🎨" },
    { end: 5, label: "Years of Excellence", icon: "⭐" },
    { end: 5, label: "Global Client Partners", icon: "🌍" }
  ];

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-slate-900 via-blue-900/30 to-slate-800 py-24 px-6 md:px-16 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-600/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-slate-700/20 to-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `radial-gradient(circle, #3b82f6 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />
      
      <div className="relative max-w-7xl mx-auto">
        {/* Enhanced header section */}
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 backdrop-blur-sm rounded-full border border-blue-400/30 mb-8">
            <span className="text-blue-300 font-semibold tracking-wide uppercase text-sm">Our Impact</span>
          </div>
          
          <h2 className="text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-cyan-200 mb-6 leading-tight tracking-tight">
            At-a-Glance
          </h2>
          
          <div className="relative w-32 h-1.5 mx-auto mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 rounded-full shadow-lg shadow-blue-500/50" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 rounded-full blur-sm animate-pulse" />
          </div>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Discover the numbers that define our journey and showcase our commitment to excellence
          </p>
        </div>
        
        {/* Stats grid with staggered animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="transform"
              style={{
                animation: `fadeInUp 0.8s ease-out ${index * 0.2}s both`
              }}
            >
              <AnimatedCounter
                end={stat.end}
                label={stat.label}
                icon={stat.icon}
                duration={2500 + index * 300}
                delay={index * 200}
                suffix="+"
              />
            </div>
          ))}
        </div>
        
        {/* Call to action section */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-blue-600/80 to-cyan-600/80 backdrop-blur-sm rounded-2xl border border-blue-400/30 hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 cursor-pointer group shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40">
            <span className="text-white font-semibold text-lg">Ready to be part of our story?</span>
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
              <span className="text-white text-sm group-hover:translate-x-0.5 transition-transform duration-300">→</span>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default AtAGlanceSection;