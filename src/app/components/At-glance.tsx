"use client";
import React, { useState, useEffect, useRef } from 'react';

const AnimatedCounter = ({ end = 0, duration = 2000, suffix = "+", label = "" }) => {
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
      const startTime = Date.now();
      const startValue = 0;
      
      const updateCounter = () => {
        const now = Date.now();
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);
        const currentValue = Math.floor(startValue + (end - startValue) * easeOutCubic);
        
        setCount(currentValue);
        
        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        }
      };
      
      requestAnimationFrame(updateCounter);
    }
  }, [isVisible, end, duration]);

  return (
    <div 
      ref={counterRef}
      className="bg-[#121212] rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 p-8 flex flex-col items-center justify-center text-white min-h-[200px] border border-gray-800 hover:border-sky-500/50"
    >
      <h2 className="text-6xl font-extrabold mb-4 bg-gradient-to-r from-sky-400 to-blue-300 bg-clip-text text-transparent">
        {count}{suffix}
      </h2>
      <p className="text-center text-lg font-semibold text-gray-300 leading-relaxed">
        {label}
      </p>
    </div>
  );
};

const AtAGlanceSection = () => {
  const stats = [
    { end: 50, label: "In house creative minds" },
    { end: 5, label: "Years of experience" },
    { end: 5, label: "Clients around the world" }
  ];

  return (
    <section className="w-full bg-sky-900 backdrop-blur-sm py-20 px-8 md:px-16 shadow-2xl mt-8 border border-sky-700/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-white text-left mb-4 bg-gradient-to-r from-white to-sky-200 bg-clip-text text-transparent">
          At-a-Glance
        </h2>
        <div className="w-16 h-2 bg-gradient-to-r from-sky-400 to-blue-300 mb-12 rounded-full shadow-lg shadow-sky-500/50" />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <AnimatedCounter
              key={index}
              end={stat.end}
              label={stat.label}
              duration={2000 + index * 200}
              suffix="+"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AtAGlanceSection;