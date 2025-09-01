'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Brain, Zap, Eye, Play, ChevronDown, Cpu, Target, Rocket } from 'lucide-react';

const GenerativeAISection = () => {
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setMounted(true);
    setIsVisible(true);
    
    const handleMouseMove = (e: { clientX: number; clientY: number; }) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth) * 100, 
        y: (e.clientY / window.innerHeight) * 100 
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Auto-cycle features
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % 4);
    }, 3000);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  if (!mounted) return null;

  const features = [
    { 
      icon: <Brain className="w-6 h-6" />, 
      title: "Neural Networks", 
      subtitle: "Advanced AI Architecture",
      color: "from-blue-400 to-cyan-400",
      bgColor: "from-blue-500/20 to-cyan-500/20"
    },
    { 
      icon: <Sparkles className="w-6 h-6" />, 
      title: "Creative Generation", 
      subtitle: "Unlimited Possibilities",
      color: "from-purple-400 to-pink-400",
      bgColor: "from-purple-500/20 to-pink-500/20"
    },
    { 
      icon: <Zap className="w-6 h-6" />, 
      title: "Real-time Processing", 
      subtitle: "Lightning Fast Results",
      color: "from-yellow-400 to-orange-400",
      bgColor: "from-yellow-500/20 to-orange-500/20"
    },
    { 
      icon: <Eye className="w-6 h-6" />, 
      title: "Intelligent Automation", 
      subtitle: "Smart Workflows",
      color: "from-green-400 to-emerald-400",
      bgColor: "from-green-500/20 to-emerald-500/20"
    }
  ];

  const stats = [
    { number: "95%", label: "Efficiency Increase", icon: <Target className="w-5 h-5" /> },
    { number: "10x", label: "Faster Creation", icon: <Rocket className="w-5 h-5" /> },
    { number: "24/7", label: "Always Available", icon: <Cpu className="w-5 h-5" /> }
  ];

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Multi-layered Animated Background */}
      <div className="absolute inset-0">
        {/* Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        
        {/* Dynamic Mouse-Following Gradient */}
        <div 
          className="absolute w-[800px] h-[800px] bg-gradient-radial from-cyan-500/30 via-purple-500/20 to-transparent rounded-full blur-3xl transition-all duration-700 ease-out"
          style={{
            left: `${mousePosition.x - 40}%`,
            top: `${mousePosition.y - 40}%`,
          }}
        />
        
        {/* Mesh Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        
        {/* Animated Grid */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`
          }}
        />
        
        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`absolute animate-float opacity-30`}
              style={{
                width: `${Math.random() * 60 + 20}px`,
                height: `${Math.random() * 60 + 20}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `linear-gradient(45deg, hsl(${Math.random() * 360}, 70%, 60%), hsl(${(Math.random() * 360 + 60) % 360}, 70%, 80%))`,
                borderRadius: Math.random() > 0.5 ? '50%' : '20%',
                animationDuration: `${Math.random() * 15 + 10}s`,
                animationDelay: `${Math.random() * 5}s`,
                transform: `rotate(${Math.random() * 360}deg)`,
                filter: 'blur(1px)'
              }}
            />
          ))}
        </div>
        
        {/* Particle System */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${Math.random() * 2 + 1}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen">
          
          {/* Left Content */}
          <div className={`space-y-12 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-500/30 backdrop-blur-xl">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                AI INNOVATION WHITEPAPER
              </span>
            </div>
            
            {/* Main Title */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-black leading-[0.9] tracking-tight">
                <span className="block text-white/90 transform transition-all duration-700" style={{animationDelay: '0.1s'}}>
                  Generative AI
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-gradient-x">
                  Unlocking New
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-red-400 to-orange-400 animate-gradient-x" style={{animationDelay: '0.5s'}}>
                  Possibilities for
                </span>
                <span className="block text-white/90">Innovation</span>
              </h1>
            </div>
            
            {/* Enhanced Description */}
            <div className="space-y-6">
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                Discover how generative AI is revolutionizing industries by enabling machines 
                to create new content, designs, and solutions with unprecedented creativity and efficiency.
              </p>
              
              {/* Feature Pills */}
              <div className="flex flex-wrap gap-3">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className={`group flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm transition-all duration-500 cursor-pointer ${
                      activeFeature === index 
                        ? `bg-gradient-to-r ${feature.bgColor} border-white/30 scale-105` 
                        : 'bg-white/5 border-white/10 hover:border-white/30'
                    }`}
                    onMouseEnter={() => setActiveFeature(index)}
                  >
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      {feature.icon}
                    </div>
                    <div className="text-sm">
                      <div className="font-semibold text-white">{feature.title}</div>
                      <div className="text-gray-400 text-xs">{feature.subtitle}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="group text-center space-y-2 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
                  <div className="w-10 h-10 mx-auto bg-gradient-to-r from-cyan-400 to-purple-400 rounded-xl flex items-center justify-center mb-2 group-hover:rotate-12 transition-transform">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/generative-service"
                className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:from-cyan-600 hover:via-purple-600 hover:to-pink-600 px-8 py-4 rounded-2xl text-lg font-bold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-3"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Read Whitepaper</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <button className="group flex items-center gap-3 px-8 py-4 rounded-2xl border-2 border-purple-500/50 hover:border-purple-400 bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 hover:text-white font-semibold transition-all duration-300 transform hover:scale-105">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </button>
            </div>

            {/* Scroll Indicator */}
            <div className="flex justify-center pt-8">
              <div className="animate-bounce">
                <ChevronDown className="w-6 h-6 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Right Visual - Enhanced 3D Scene */}
          <div className={`relative flex items-center justify-center transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            <div className="relative w-full h-[700px]">
              
              {/* Central AI Core */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative w-48 h-48">
                  {/* Rotating Rings */}
                  <div className="absolute inset-0 border-4 border-cyan-500/30 rounded-full animate-spin"></div>
                  <div className="absolute inset-4 border-4 border-purple-500/40 rounded-full animate-spin-reverse"></div>
                  <div className="absolute inset-8 border-4 border-pink-500/50 rounded-full animate-spin"></div>
                  
                  {/* Core */}
                  <div className="absolute inset-12 bg-gradient-to-r from-white via-cyan-200 to-purple-200 rounded-full animate-pulse shadow-2xl">
                    <div className="absolute inset-2 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full flex items-center justify-center">
                      <Brain className="w-8 h-8 text-white animate-pulse" />
                    </div>
                  </div>
                  
                  {/* Energy Particles */}
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-3 h-3 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-orbit"
                      style={{
                        top: `${50 + 60 * Math.cos(i * Math.PI / 6)}%`,
                        left: `${50 + 60 * Math.sin(i * Math.PI / 6)}%`,
                        animationDelay: `${i * 0.3}s`,
                        animationDuration: '8s'
                      }}
                    />
                  ))}
                </div>
              </div>
              
              {/* Floating Feature Cards */}
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`absolute transition-all duration-500 ${
                    activeFeature === index ? 'scale-110 opacity-100' : 'scale-100 opacity-70'
                  }`}
                  style={{
                    top: `${20 + (index % 2) * 60}%`,
                    left: `${10 + (Math.floor(index / 2) % 2) * 70}%`,
                    right: index >= 2 ? `${10 + (Math.floor((index - 2) / 2) % 2) * 70}%` : 'auto'
                  }}
                >
                  <div className={`group relative bg-gradient-to-br ${feature.bgColor} backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 w-48 hover:scale-105 cursor-pointer`}>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-ping"></div>
                    <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl mb-4 flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform`}>
                      {feature.icon}
                    </div>
                    <h3 className="font-bold text-white mb-1">{feature.title}</h3>
                    <p className="text-gray-300 text-sm">{feature.subtitle}</p>
                  </div>
                </div>
              ))}
              
              {/* Data Flow Lines */}
              <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 600 700">
                <defs>
                  <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#06b6d4', stopOpacity: 1}} />
                    <stop offset="50%" style={{stopColor: '#8b5cf6', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#ec4899', stopOpacity: 1}} />
                  </linearGradient>
                </defs>
                
                {/* Connecting Lines */}
                <path 
                  d="M 100 150 Q 300 350 500 150" 
                  stroke="url(#flowGradient)" 
                  strokeWidth="2" 
                  fill="none"
                  className="animate-dash"
                />
                <path 
                  d="M 100 550 Q 300 350 500 550" 
                  stroke="url(#flowGradient)" 
                  strokeWidth="2" 
                  fill="none"
                  className="animate-dash"
                  style={{animationDelay: '1s'}}
                />
                <path 
                  d="M 150 100 Q 300 350 150 600" 
                  stroke="url(#flowGradient)" 
                  strokeWidth="2" 
                  fill="none"
                  className="animate-dash"
                  style={{animationDelay: '2s'}}
                />
                <path 
                  d="M 450 100 Q 300 350 450 600" 
                  stroke="url(#flowGradient)" 
                  strokeWidth="2" 
                  fill="none"
                  className="animate-dash"
                  style={{animationDelay: '3s'}}
                />
              </svg>
              
              {/* Holographic Display */}
              <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                <div className="relative bg-gradient-to-r from-cyan-900/40 to-purple-900/40 backdrop-blur-2xl rounded-3xl p-8 border border-cyan-400/30 w-80 hover:scale-105 transition-all duration-500 group cursor-pointer">
                  {/* Hologram Effect Lines */}
                  <div className="absolute inset-0 rounded-3xl overflow-hidden">
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-scan"></div>
                    <div className="absolute inset-x-0 top-4 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent animate-scan" style={{animationDelay: '1s'}}></div>
                    <div className="absolute inset-x-0 top-8 h-px bg-gradient-to-r from-transparent via-pink-400/30 to-transparent animate-scan" style={{animationDelay: '2s'}}></div>
                  </div>
                  
                  <div className="relative z-10 text-center space-y-4">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-r from-cyan-400 to-purple-400 rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                      <Sparkles className="w-8 h-8 text-white animate-pulse" />
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">AI Innovation Hub</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Transforming ideas into reality with cutting-edge generative AI technology
                    </p>
                    <div className="flex justify-center space-x-2 pt-2">
                      {[...Array(5)].map((_, i) => (
                        <div 
                          key={i}
                          className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-pulse"
                          style={{animationDelay: `${i * 0.2}s`}}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-20px) rotate(90deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
          75% { transform: translateY(-30px) rotate(270deg); }
        }
        
        @keyframes gradient-x {
          0%, 100% { background-size: 200% 200%; background-position: left center; }
          50% { background-size: 200% 200%; background-position: right center; }
        }
        
        @keyframes orbit {
          0% { transform: translate(-50%, -50%) rotate(0deg) translateX(60px) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg) translateX(60px) rotate(-360deg); }
        }
        
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0; transform: scale(0.5); }
          50% { opacity: 1; transform: scale(1.5); }
        }
        
        @keyframes dash {
          0% { stroke-dasharray: 0 100; }
          50% { stroke-dasharray: 50 50; }
          100% { stroke-dasharray: 100 0; }
        }
        
        @keyframes scan {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }
        
        .animate-float {
          animation: float linear infinite;
        }
        
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
        
        .animate-orbit {
          animation: orbit linear infinite;
        }
        
        .animate-spin-reverse {
          animation: spin-reverse 4s linear infinite;
        }
        
        .animate-twinkle {
          animation: twinkle ease-in-out infinite;
        }
        
        .animate-dash {
          stroke-dasharray: 10 5;
          animation: dash 4s ease-in-out infinite;
        }
        
        .animate-scan {
          animation: scan 3s ease-in-out infinite;
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
        
        /* Glassmorphism Effects */
        .backdrop-blur-xl {
          backdrop-filter: blur(24px);
        }
        
        .backdrop-blur-2xl {
          backdrop-filter: blur(40px);
        }
        
        /* Custom Scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(15, 23, 42, 0.1);
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #06b6d4, #8b5cf6);
          border-radius: 10px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #0891b2, #7c3aed);
        }
      `}</style>
    </section>
  );
};

export default GenerativeAISection;