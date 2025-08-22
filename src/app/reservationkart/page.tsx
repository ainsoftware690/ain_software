"use client";
import React, { useState, useEffect } from 'react';
import { Plane, MapPin, Calendar, Users, Star, ArrowRight, Globe, Shield, Clock, Headphones } from 'lucide-react';

export default function ReservationKart() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-cycle through features
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 4);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const features = [
    { icon: Plane, title: 'Flight Booking', description: 'Best deals on domestic & international flights' },
    { icon: MapPin, title: 'Hotel Reservations', description: 'Comfortable stays at unbeatable prices' },
    { icon: Calendar, title: 'Holiday Packages', description: 'Complete travel packages tailored for you' },
    { icon: Users, title: 'Group Bookings', description: 'Special rates for family & corporate travel' }
  ];

  const stats = [
    { number: '50K+', label: 'Happy Travelers' },
    { number: '100+', label: 'Destinations' },
    { number: '24/7', label: 'Support' },
    { number: '4.8⭐', label: 'Rating' }
  ];

  return (
<section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden" style={{margin: 0, padding: 0, marginTop: '-1px'}}>      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating clouds */}
        <div className="absolute top-20 left-10 w-32 h-16 bg-white/5 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-12 bg-white/3 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-20 h-10 bg-white/4 rounded-full animate-pulse delay-2000"></div>
        
        {/* Gradient orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-sky-500/20 to-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-500/15 to-sky-400/10 rounded-full blur-2xl"></div>
        
        {/* Animated travel icons */}
        <div className="absolute top-32 right-32 animate-bounce delay-500">
          <Plane className="w-8 h-8 text-sky-300/30 transform rotate-45" />
        </div>
        <div className="absolute bottom-32 right-1/4 animate-bounce delay-1500">
          <Globe className="w-6 h-6 text-blue-300/40" />
        </div>
      </div>

      <div className="relative z-20 w-full py-20 px-6 md:px-12 lg:px-20">
        {/* Hero Section */}
        <div className={`text-center mb-12 md:mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Brand Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-sky-500/20 to-blue-500/20 backdrop-blur-sm border border-sky-400/30 rounded-full px-4 py-2 mb-6 md:mb-8">
            <Globe className="w-4 h-4 md:w-5 md:h-5 text-sky-300 mr-2" />
            <span className="text-sky-200 font-medium text-sm md:text-base">Your Travel Partner</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 md:mb-8">
            <span className="bg-gradient-to-r from-white via-sky-100 to-blue-200 bg-clip-text text-transparent">
              ReservationKart
            </span>
            <span className="block text-2xl md:text-3xl lg:text-4xl font-normal text-sky-300 mt-2">
              .com
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-blue-100/90 max-w-4xl mx-auto leading-relaxed mb-8 md:mb-12 px-4">
            Your gateway to seamless travel experiences. Book flights, hotels, and holiday packages 
            with advanced technology and responsive customer support.
          </p>

          {/* CTA Button */}
          <div className="mb-12 md:mb-16">
            <a
              href="https://reservationkart.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-2xl text-lg shadow-2xl shadow-sky-500/25 transform hover:scale-105 transition-all duration-300"
            >
              <Plane className="w-6 h-6 mr-3 transform transition-transform duration-300 group-hover:rotate-12" />
              Book Your Flight Now
              <ArrowRight className="w-5 h-5 ml-3 transform transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12 md:mb-20 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className={`text-center transform transition-all duration-1000 delay-${index * 100} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-6 hover:bg-white/10 transition-all duration-300">
                <div className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-1 md:mb-2">{stat.number}</div>
                <div className="text-sky-200 font-medium text-sm md:text-base">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Why Choose ReservationKart?
            </h2>
            <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-sky-400 to-blue-500 mx-auto rounded-full"></div>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-6 hover:bg-white/10 transition-all duration-500 transform hover:-translate-y-2 ${
                    activeFeature === index ? 'ring-2 ring-sky-400/50 bg-white/10' : ''
                  }`}
                  onMouseEnter={() => setActiveFeature(index)}
                >
                  <div className="text-center">
                    <div className={`inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 mb-3 md:mb-4 transform transition-all duration-300 ${
                      activeFeature === index ? 'scale-110 rotate-6' : 'group-hover:scale-105'
                    }`}>
                      <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-sky-200/80 text-xs md:text-sm leading-relaxed">{feature.description}</p>
                  </div>
                  
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 to-blue-500/10 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </div>
              );
            })}
          </div>

          {/* Trust Indicators */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl p-6 md:p-8 mb-12 md:mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center">
              <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-3">
                <Shield className="w-6 h-6 md:w-8 md:h-8 text-green-400" />
                <div>
                  <h4 className="text-white font-semibold text-sm md:text-base">Secure Payments</h4>
                  <p className="text-sky-200/70 text-xs md:text-sm">SSL encrypted transactions</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-3">
                <Clock className="w-6 h-6 md:w-8 md:h-8 text-yellow-400" />
                <div>
                  <h4 className="text-white font-semibold text-sm md:text-base">Instant Booking</h4>
                  <p className="text-sky-200/70 text-xs md:text-sm">Confirm in seconds</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-3">
                <Headphones className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />
                <div>
                  <h4 className="text-white font-semibold text-sm md:text-base">24/7 Support</h4>
                  <p className="text-sky-200/70 text-xs md:text-sm">Always here to help</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <div className="inline-flex flex-col md:flex-row items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 md:px-8 py-4 space-y-3 md:space-y-0 md:space-x-4">
              <span className="text-sky-200 text-sm md:text-base">Ready for your next adventure?</span>
              <a
                href="https://reservationkart.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white px-4 md:px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 text-sm md:text-base"
              >
                Start Exploring
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-10 w-2 h-2 bg-sky-400 rounded-full animate-ping"></div>
      <div className="absolute top-1/4 right-10 w-1 h-1 bg-blue-400 rounded-full animate-ping delay-1000"></div>
      <div className="absolute top-1/2 left-20 w-1.5 h-1.5 bg-white/60 rounded-full animate-pulse"></div>
    </section>
  );
}