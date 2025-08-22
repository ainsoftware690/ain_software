"use client";
import React, { useState, useEffect } from 'react';
import { ArrowRight, Code, Zap, Users, ChevronRight } from 'lucide-react';

export default function Services() {
  const [activeCard, setActiveCard] = useState(-1);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Navigation function for Contact buttons
  const handleContactClick = () => {
    window.location.href = '/contact';
  };

  useEffect(() => {
    const handleMouseMove = (event: { clientX: any; clientY: any; }) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const services = [
    {
      id: '01',
      title: 'Product Development',
      shortDesc: 'End-to-end solutions',
      description: 'Transform ideas into reality with our comprehensive product development expertise. From conception to deployment, we craft digital experiences that drive business growth.',
      icon: Code,
      gradient: 'from-blue-600 via-blue-700 to-indigo-700',
      hoverGradient: 'from-blue-500 via-blue-600 to-indigo-600',
      features: ['Full-stack Development', 'UI/UX Design', 'Quality Assurance', 'DevOps Integration']
    },
    {
      id: '02',
      title: 'Digital Modernization',
      shortDesc: 'Future-ready solutions',
      description: 'Revolutionize your government IT infrastructure with cutting-edge technologies that enhance security, efficiency, and citizen engagement.',
      icon: Zap,
      gradient: 'from-sky-600 via-blue-600 to-blue-700',
      hoverGradient: 'from-sky-500 via-blue-500 to-blue-600',
      features: ['Cloud Migration', 'Legacy System Updates', 'Security Enhancement', 'Performance Optimization']
    },
    {
      id: '03',
      title: 'Technology Consulting',
      shortDesc: 'Strategic partnerships',
      description: 'Partner with us to navigate complex technological challenges and unlock innovative solutions that secure your competitive advantage.',
      icon: Users,
      gradient: 'from-indigo-600 via-blue-600 to-slate-700',
      hoverGradient: 'from-indigo-500 via-blue-500 to-slate-600',
      features: ['Strategic Planning', 'Technology Assessment', 'Implementation Support', 'Ongoing Optimization']
    }
  ];

  return (
<section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden" style={{margin: 0, padding: 0}}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-8 -left-8 w-80 h-80 bg-gradient-to-r from-sky-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-slate-500/10 rounded-full blur-2xl animate-bounce"></div>
      </div>

      {/* Mouse Follower Effect */}
      <div 
        className="absolute pointer-events-none z-10 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl transition-all duration-1000 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      <div className="relative z-20 w-full py-20 px-6 md:px-12 lg:px-20">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent font-semibold text-lg tracking-wider uppercase">
              What We Offer
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
              Our Services
            </span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-sky-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-blue-100/80 max-w-3xl mx-auto leading-relaxed">
            Empowering organizations with cutting-edge technology solutions that drive innovation, 
            enhance efficiency, and create lasting impact in the digital landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, serviceIndex) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative"
                onMouseEnter={() => setActiveCard(serviceIndex)}
                onMouseLeave={() => setActiveCard(-1)}
              >
                {/* Card Container */}
                <div className={`
                  relative h-full bg-gradient-to-br ${activeCard === serviceIndex ? service.hoverGradient : service.gradient}
                  rounded-3xl p-1 transition-all duration-500 ease-out transform
                  ${activeCard === serviceIndex ? 'scale-105 shadow-2xl shadow-blue-500/25' : 'hover:scale-102'}
                `}>
                  {/* Inner Card */}
                  <div className="bg-black/40 backdrop-blur-xl rounded-3xl p-8 h-full flex flex-col relative overflow-hidden">
                    {/* Card Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/20 to-transparent rounded-bl-3xl"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/10 to-transparent rounded-tr-3xl"></div>
                    </div>

                    {/* Card Content */}
                    <div className="relative z-10 flex-1 flex flex-col">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-6">
                        <div className={`
                          w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} 
                          flex items-center justify-center transform transition-all duration-300
                          ${activeCard === serviceIndex ? 'rotate-12 scale-110' : 'group-hover:rotate-6'}
                        `}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <span className="text-4xl font-black text-white/20 group-hover:text-white/40 transition-colors duration-300">
                          {service.id}
                        </span>
                      </div>

                      {/* Title and Short Description */}
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-100 transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-blue-200/70 text-sm font-medium uppercase tracking-wider">
                          {service.shortDesc}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-blue-100/80 leading-relaxed mb-8 flex-1">
                        {service.description}
                      </p>

                      {/* Features List */}
                      <div className="mb-8">
                        <div className="grid grid-cols-2 gap-2">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-2">
                              <ChevronRight className="w-3 h-3 text-blue-300" />
                              <span className="text-xs text-blue-200/70">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA Button */}
                      <button 
                        onClick={handleContactClick}
                        className={`
                        group/btn relative overflow-hidden rounded-xl px-6 py-3 
                        bg-gradient-to-r ${service.gradient} text-white font-semibold
                        transform transition-all duration-300 hover:shadow-lg cursor-pointer
                        ${activeCard === serviceIndex ? 'shadow-lg' : ''}
                      `}>
                        <span className="relative z-10 flex items-center justify-center space-x-2">
                          <span>Contact AIN</span>
                          <ArrowRight className="w-4 h-4 transform transition-transform duration-300 group-hover/btn:translate-x-1" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/5 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left"></div>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className={`
                  absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-3xl blur-xl opacity-0 
                  group-hover:opacity-20 transition-opacity duration-500 -z-10
                `}></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-20" style={{marginBottom: 0, paddingBottom: 0}}>
          <div className="inline-flex items-center space-x-4 bg-white/5 backdrop-blur-xl rounded-full px-8 py-4 border border-white/10">
            <span className="text-blue-100">Ready to transform your business?</span>
            <button 
              onClick={handleContactClick}
              className="bg-gradient-to-r from-blue-500 to-sky-500 text-white px-6 py-2 rounded-full font-semibold hover:from-blue-400 hover:to-sky-400 transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-500"></div>
      <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-40 right-1/3 w-1 h-1 bg-pink-400 rounded-full animate-pulse delay-1500"></div>
    </section>
  );
}