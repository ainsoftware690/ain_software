"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Predefined positions and values to avoid hydration mismatch
  const networkPaths = [
    "M625.358,294.298 Q1347.541,822.914 625.358,294.298",
    "M1681.259,280.826 Q497.236,612.345 1681.259,280.826",
    "M709.299,227.290 Q1320.914,474.123 709.299,227.290",
    "M454.684,354.165 Q1041.568,307.456 454.684,354.165",
    "M1530.174,731.865 Q1777.207,619.345 1530.174,731.865",
    "M1312.823,286.007 Q1199.002,714.567 1312.823,286.007",
    "M1771.014,67.378 Q383.170,336.789 1771.014,67.378",
    "M1700.944,567.615 Q1520.869,877.034 1700.944,567.615",
    "M1213.751,642.831 Q1036.097,149.635 1213.751,642.831",
    "M1211.905,988.265 Q440.163,304.567 1211.905,988.265",
    "M1484.355,46.383 Q310.672,189.456 1484.355,46.383",
    "M1456.785,297.393 Q1112.563,700.456 1456.785,297.393",
    "M636.385,696.603 Q162.802,683.456 636.385,696.603",
    "M1754.862,428.507 Q1311.730,172.345 1754.862,428.507",
    "M304.692,309.794 Q1295.277,477.123 304.692,309.794"
  ];

  const nodePositions = [
    { cx: "44.864%", cy: "51.633%", fill: "#3b82f6" },
    { cx: "72.925%", cy: "23.073%", fill: "#06b6d4" },
    { cx: "5.619%", cy: "16.976%", fill: "#3b82f6" },
    { cx: "65.145%", cy: "53.603%", fill: "#06b6d4" },
    { cx: "90.305%", cy: "44.258%", fill: "#3b82f6" },
    { cx: "28.915%", cy: "23.427%", fill: "#06b6d4" },
    { cx: "48.343%", cy: "72.251%", fill: "#3b82f6" },
    { cx: "76.918%", cy: "24.847%", fill: "#06b6d4" },
    { cx: "25.196%", cy: "97.401%", fill: "#3b82f6" },
    { cx: "50.653%", cy: "85.321%", fill: "#06b6d4" },
    { cx: "42.436%", cy: "90.328%", fill: "#3b82f6" },
    { cx: "71.542%", cy: "76.275%", fill: "#06b6d4" },
    { cx: "27.055%", cy: "98.592%", fill: "#3b82f6" },
    { cx: "19.384%", cy: "9.547%", fill: "#06b6d4" },
    { cx: "75.731%", cy: "48.904%", fill: "#3b82f6" },
    { cx: "75.312%", cy: "74.999%", fill: "#06b6d4" },
    { cx: "61.027%", cy: "82.341%", fill: "#3b82f6" },
    { cx: "47.360%", cy: "64.882%", fill: "#06b6d4" },
    { cx: "15.154%", cy: "0.541%", fill: "#3b82f6" },
    { cx: "27.692%", cy: "52.330%", fill: "#06b6d4" }
  ];

  const particlePositions = [
    { left: "38.759%", top: "59.383%", width: "6.193px", height: "2.242px", color: "rgba(59,130,246,0.8)" },
    { left: "86.338%", top: "29.491%", width: "5.254px", height: "4.761px", color: "rgba(6,182,212,0.8)" },
    { left: "16.260%", top: "30.079%", width: "6.186px", height: "4.584px", color: "rgba(139,92,246,0.8)" },
    { left: "19.010%", top: "85.673%", width: "4.067px", height: "3.614px", color: "rgba(16,185,129,0.8)" },
    { left: "86.188%", top: "42.079%", width: "3.165px", height: "3.759px", color: "rgba(59,130,246,0.8)" },
    { left: "0.234%", top: "66.713%", width: "7.551px", height: "5.716px", color: "rgba(6,182,212,0.8)" },
    { left: "42.148%", top: "21.720%", width: "7.503px", height: "7.056px", color: "rgba(139,92,246,0.8)" },
    { left: "72.097%", top: "4.375%", width: "4.005px", height: "5.523px", color: "rgba(16,185,129,0.8)" },
    { left: "37.530%", top: "50.333%", width: "5.343px", height: "5.613px", color: "rgba(59,130,246,0.8)" },
    { left: "32.157%", top: "63.346%", width: "2.847px", height: "7.058px", color: "rgba(6,182,212,0.8)" },
    { left: "22.496%", top: "75.946%", width: "7.064px", height: "4.281px", color: "rgba(139,92,246,0.8)" },
    { left: "28.418%", top: "68.611%", width: "3.950px", height: "5.470px", color: "rgba(16,185,129,0.8)" },
    { left: "85.899%", top: "59.572%", width: "7.826px", height: "4.376px", color: "rgba(59,130,246,0.8)" },
    { left: "8.148%", top: "77.845%", width: "5.311px", height: "3.544px", color: "rgba(6,182,212,0.8)" },
    { left: "52.211%", top: "21.086%", width: "2.234px", height: "4.599px", color: "rgba(139,92,246,0.8)" },
    { left: "53.015%", top: "61.073%", width: "3.062px", height: "6.020px", color: "rgba(16,185,129,0.8)" },
    { left: "90.766%", top: "84.247%", width: "3.303px", height: "2.727px", color: "rgba(59,130,246,0.8)" },
    { left: "84.908%", top: "33.569%", width: "3.800px", height: "6.888px", color: "rgba(6,182,212,0.8)" },
    { left: "51.603%", top: "71.221%", width: "2.076px", height: "5.025px", color: "rgba(139,92,246,0.8)" },
    { left: "59.651%", top: "72.600%", width: "7.657px", height: "3.561px", color: "rgba(16,185,129,0.8)" }
  ];

  return (
    <div className="relative w-screen min-h-screen bg-black px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Multi-layer gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950" />
        <div className="absolute inset-0 bg-gradient-to-tl from-purple-950/50 via-transparent to-cyan-950/50" />
        
        {/* Large Animated Gradient Orbs */}
        <motion.div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full blur-[120px]"
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,0.4) 0%, rgba(147,51,234,0.3) 50%, transparent 100%)'
          }}
          animate={{
            x: [0, 200, -100, 0],
            y: [0, -150, 100, 0],
            scale: [1, 1.3, 0.8, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute top-1/4 -right-40 w-[500px] h-[500px] rounded-full blur-[100px]"
          style={{
            background: 'radial-gradient(circle, rgba(6,182,212,0.35) 0%, rgba(59,130,246,0.25) 50%, transparent 100%)'
          }}
          animate={{
            x: [0, -250, 150, 0],
            y: [0, 200, -100, 0],
            scale: [1, 0.7, 1.4, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
        />
        
        <motion.div
          className="absolute bottom-10 left-1/3 w-[700px] h-[700px] rounded-full blur-[130px]"
          style={{
            background: 'radial-gradient(circle, rgba(139,92,246,0.3) 0%, rgba(16,185,129,0.2) 50%, transparent 100%)'
          }}
          animate={{
            x: [0, -200, 300, 0],
            y: [0, -100, 50, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 10,
          }}
        />

        {/* Enhanced Network Animation */}
        {isClient && (
          <svg className="absolute inset-0 w-full h-full opacity-40">
            <defs>
              <linearGradient id="networkGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                <stop offset="30%" stopColor="#06b6d4" stopOpacity="1" />
                <stop offset="70%" stopColor="#8b5cf6" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.6" />
              </linearGradient>
              <linearGradient id="networkGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.7" />
                <stop offset="50%" stopColor="#ef4444" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.5" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Complex network lines */}
            {networkPaths.map((path, i) => (
              <motion.path
                key={i}
                d={path}
                stroke={i % 3 === 0 ? "url(#networkGradient1)" : "url(#networkGradient2)"}
                strokeWidth="2"
                fill="none"
                filter="url(#glow)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: [0, 1, 0.3, 1, 0],
                  opacity: [0, 0.8, 1, 0.6, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  delay: i * 0.4,
                  ease: "easeInOut",
                }}
              />
            ))}
            
            {/* Animated connection nodes */}
            {nodePositions.map((node, i) => (
              <motion.circle
                key={`node-${i}`}
                cx={node.cx}
                cy={node.cy}
                r="3"
                fill={node.fill}
                filter="url(#glow)"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0, 1, 0.5, 1, 0],
                  scale: [0, 2, 1, 2.5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </svg>
        )}

        {/* Dynamic mesh background */}
        <motion.div
          className="absolute inset-0 opacity-60"
          animate={{
            background: [
              `radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.4) 0%, transparent 40%), 
               radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.35) 0%, transparent 40%), 
               radial-gradient(circle at 40% 40%, rgba(6, 182, 212, 0.3) 0%, transparent 40%),
               radial-gradient(circle at 90% 10%, rgba(16, 185, 129, 0.25) 0%, transparent 40%)`,
              `radial-gradient(circle at 90% 70%, rgba(59, 130, 246, 0.4) 0%, transparent 40%), 
               radial-gradient(circle at 20% 30%, rgba(139, 92, 246, 0.35) 0%, transparent 40%), 
               radial-gradient(circle at 70% 10%, rgba(6, 182, 212, 0.3) 0%, transparent 40%),
               radial-gradient(circle at 10% 90%, rgba(16, 185, 129, 0.25) 0%, transparent 40%)`,
              `radial-gradient(circle at 50% 90%, rgba(59, 130, 246, 0.4) 0%, transparent 40%), 
               radial-gradient(circle at 70% 20%, rgba(139, 92, 246, 0.35) 0%, transparent 40%), 
               radial-gradient(circle at 20% 70%, rgba(6, 182, 212, 0.3) 0%, transparent 40%),
               radial-gradient(circle at 80% 50%, rgba(16, 185, 129, 0.25) 0%, transparent 40%)`,
            ]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Enhanced floating particles */}
        {isClient && (
          <div className="absolute inset-0">
            {particlePositions.map((particle, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute rounded-full"
                style={{
                  left: particle.left,
                  top: particle.top,
                  width: particle.width,
                  height: particle.height,
                  background: `radial-gradient(circle, ${particle.color} 0%, transparent 70%)`,
                  boxShadow: `0 0 20px ${particle.color.replace('0.8', '0.5')}`,
                }}
                animate={{
                  y: [0, -300, 0],
                  x: [0, Math.random() * 200 - 100, 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0],
                }}
                transition={{
                  duration: Math.random() * 20 + 10,
                  repeat: Infinity,
                  delay: Math.random() * 10,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        )}

        {/* Animated grid with glow */}
        <motion.div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px),
              linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px, 100px 100px, 50px 50px, 50px 50px',
          }}
          animate={{
            backgroundPosition: ['0px 0px, 0px 0px, 0px 0px, 0px 0px', '100px 100px, 100px 100px, 50px 50px, 50px 50px'],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex w-full flex-col items-center justify-center min-h-screen pt-16">
        <div className="px-4 py-10 md:py-20">
          {/* Enhanced Typography */}
          <h1 className="relative z-20 mx-auto max-w-6xl text-center text-3xl font-black md:text-6xl lg:text-8xl leading-tight">
            {"Innovating Solutions for a Healthier Nation"
              .split(" ")
              .map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, filter: "blur(8px)", y: 30, rotateX: 90 }}
                  animate={{ opacity: 1, filter: "blur(0px)", y: 0, rotateX: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.15,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="mr-3 inline-block"
                  style={{
                    background: word === "Solutions" 
                      ? "linear-gradient(135deg, #3b82f6 0%, #06b6d4 25%, #8b5cf6 50%, #10b981 75%, #f59e0b 100%)"
                      : word === "Innovating"
                      ? "linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%)"
                      : word === "Healthier"
                      ? "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)"
                      : "linear-gradient(135deg, #f8fafc 0%, #cbd5e1 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    textShadow: word === "Solutions" ? "0 0 30px rgba(59,130,246,0.5)" : "none",
                  }}
                >
                  {word}
                </motion.span>
              ))}
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="relative z-20 mx-auto max-w-2xl py-6 text-center text-xl font-medium text-slate-300 leading-relaxed"
            style={{
              background: "linear-gradient(135deg, #e2e8f0 0%, #94a3b8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Exceptional Government IT Solutions
          </motion.p>
          
          {/* Premium Button Design */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="relative z-20 mt-16 flex flex-wrap items-center justify-center gap-8"
          >
            {/* Primary CTA Button */}
            <Link href="/" passHref>
              <motion.button 
                className="group relative w-72 h-16 overflow-hidden rounded-2xl p-[2px] transition-all duration-500"
                style={{
                  background: "linear-gradient(135deg, #3b82f6, #06b6d4, #8b5cf6, #10b981)",
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  filter: "brightness(1.1)",
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.7, duration: 0.8 }}
              >
                {/* Inner button */}
                <div className="relative w-full h-full rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center overflow-hidden">
                  {/* Animated background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100"
                    animate={{
                      background: [
                        "linear-gradient(90deg, #3b82f6, #06b6d4, #8b5cf6)",
                        "linear-gradient(180deg, #06b6d4, #8b5cf6, #10b981)",
                        "linear-gradient(270deg, #8b5cf6, #10b981, #3b82f6)",
                        "linear-gradient(360deg, #10b981, #3b82f6, #06b6d4)",
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12"
                    animate={{ x: ["-200%", "200%"] }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 2,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Button text */}
                  <span className="relative z-10 text-white font-bold text-lg flex items-center gap-3">
                    Explore Now
                    <motion.svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      whileHover={{ x: 5, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </motion.svg>
                  </span>
                </div>
                
                {/* Glow effect */}
                <motion.div
                  className="absolute -inset-2 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl"
                  style={{
                    background: "linear-gradient(135deg, #3b82f6, #06b6d4, #8b5cf6)",
                  }}
                  transition={{ duration: 0.5 }}
                />
              </motion.button>
            </Link>
            
            {/* Secondary Button */}
            <Link href="/contact" passHref>
              <motion.button 
                className="group relative w-72 h-16 overflow-hidden rounded-2xl bg-slate-900/50 border border-slate-600/50 backdrop-blur-xl transition-all duration-500 hover:border-slate-400/70 hover:bg-slate-800/60"
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  boxShadow: "0 25px 50px rgba(148, 163, 184, 0.15)",
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.9, duration: 0.8 }}
              >
                {/* Animated border gradient */}
                <motion.div
                  className="absolute inset-0 rounded-2xl p-[1px]"
                  style={{
                    background: "conic-gradient(from 0deg, transparent, rgba(148, 163, 184, 0.8), transparent)",
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                >
                  <div className="w-full h-full rounded-2xl bg-slate-900/80" />
                </motion.div>
                
                {/* Button content */}
                <span className="relative z-10 text-slate-200 font-semibold text-lg flex items-center justify-center gap-3">
                  <motion.svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    whileHover={{ scale: 1.1, rotate: 15 }}
                    transition={{ duration: 0.3 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </motion.svg>
                  Contact Support
                </span>
                
                {/* Hover glow */}
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-slate-500/0 via-slate-400/20 to-slate-500/0 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.4 }}
                />
              </motion.button>
            </Link>
          </motion.div>
          
          {/* Enhanced scroll indicator */}
          <motion.div
            className="relative z-20 mt-24 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
          >
            <motion.div
              className="flex flex-col items-center text-slate-400/80"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="text-sm font-light mb-3 tracking-wider">Discover More</span>
              <motion.div
                className="w-6 h-10 border border-slate-400/50 rounded-full flex justify-center"
                animate={{ 
                  borderColor: ["rgba(148, 163, 184, 0.5)", "rgba(59, 130, 246, 0.8)", "rgba(148, 163, 184, 0.5)"],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <motion.div
                  className="w-1 h-3 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full mt-2"
                  animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}