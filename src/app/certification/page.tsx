"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { ChevronRight, Award, Shield, Star, CheckCircle, Download, Building2, Users, TrendingUp, FileCheck, LucideIcon, Sparkles, Zap, Target } from 'lucide-react';

interface CertificationData {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  advantages: string[];
  icon: LucideIcon;
  color: string;
  badge: string;
}

interface StatData {
  icon: LucideIcon;
  value: string;
  label: string;
  color: string;
}

type CertificationKeys = '8a' | 'edwosb' | 'wosb';

const CertificationsSection = () => {
  const [activeTab, setActiveTab] = useState<CertificationKeys>('8a');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const certifications: Record<CertificationKeys, CertificationData> = {
    '8a': {
      title: 'SBA 8(a) Contract Vehicle',
      subtitle: 'Small, minority owned business certification',
      description: 'The 8(a) designation allows Government agencies to sole-source contracts, up to a ceiling of $4.5 million for goods and services and $7 million for manufacturing.',
      features: [
        'Small Business Administration 8(a) designation',
        '8(a) Business Development Program',
        'Small Business',
        'Disadvantaged Business',
        'Minority Owned Business'
      ],
      advantages: [
        'Sole-Source contracts up to $4.5/$7 Million',
        'Reduce contract protests',
        'Cut down on Administration time',
        'Fulfill 8(a) requirements for Federal Agencies'
      ],
      icon: Shield,
      color: 'from-blue-500 via-blue-600 to-indigo-700',
      badge: '8(a) CERTIFIED'
    },
    'edwosb': {
      title: 'Economically Disadvantaged Woman Owned Small Business (EDWOSB)',
      subtitle: 'Supporting women-owned enterprises',
      description: 'Federal Contracting Officers may award Economically Disadvantaged WOSBs (EDWOSBs) federal contracts, up to $4 million, that are set-aside for EDWOSBs in industries where women-owned small businesses are underrepresented.',
      features: [
        'Women-owned small business certification',
        'Economic disadvantage qualification',
        'Industry-specific set-asides',
        'Federal contract eligibility'
      ],
      advantages: [
        'Set-aside contracts up to $4 million',
        'Priority in underrepresented industries',
        'Streamlined procurement process',
        'Enhanced competitive positioning'
      ],
      icon: Award,
      color: 'from-purple-500 via-purple-600 to-pink-700',
      badge: 'EDWOSB CERTIFIED'
    },
    'wosb': {
      title: 'Women-Owned Small Business (WOSB)',
      subtitle: 'Empowering women entrepreneurs',
      description: 'Woman owned small business certification that provides access to federal contracting opportunities and supports the growth of women-owned enterprises in the federal marketplace.',
      features: [
        'Woman owned small business',
        'Federal contracting access',
        'Business development support',
        'Networking opportunities'
      ],
      advantages: [
        'Access to WOSB set-aside contracts',
        'Enhanced visibility in federal marketplace',
        'Business development resources',
        'Competitive advantage in procurement'
      ],
      icon: Star,
      color: 'from-emerald-500 via-emerald-600 to-teal-700',
      badge: 'WOSB CERTIFIED'
    }
  };

  const stats: StatData[] = [
    { icon: Building2, value: '$4.5M+', label: 'Contract Ceiling', color: 'text-blue-400' },
    { icon: Users, value: '500+', label: 'Successful Projects', color: 'text-purple-400' },
    { icon: TrendingUp, value: '98%', label: 'Client Satisfaction', color: 'text-emerald-400' },
    { icon: FileCheck, value: '3+', label: 'Active Certifications', color: 'text-orange-400' }
  ];

  // Fixed positions for consistent hydration
  const floatingElements = [
    { id: 1, left: '10%', top: '15%', delay: '0s', duration: '4s', size: 'w-3 h-3' },
    { id: 2, left: '85%', top: '25%', delay: '1s', duration: '3s', size: 'w-2 h-2' },
    { id: 3, left: '15%', top: '70%', delay: '2s', duration: '5s', size: 'w-4 h-4' },
    { id: 4, left: '75%', top: '60%', delay: '0.5s', duration: '3.5s', size: 'w-2 h-2' },
    { id: 5, left: '45%', top: '20%', delay: '1.5s', duration: '4.5s', size: 'w-3 h-3' },
    { id: 6, left: '25%', top: '85%', delay: '2.5s', duration: '3s', size: 'w-2 h-2' },
    { id: 7, left: '65%', top: '10%', delay: '0.8s', duration: '4s', size: 'w-3 h-3' },
    { id: 8, left: '5%', top: '45%', delay: '1.2s', duration: '3.5s', size: 'w-2 h-2' },
  ];

  const currentCert = certifications[activeTab];
  const IconComponent = currentCert.icon;

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 overflow-hidden mt-12">
      {/* Animated Background Effects */}
      <div className="absolute inset-0">
        {/* Large gradient orbs */}
        <div className="absolute top-0 -left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -top-10 right-0 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-indigo-500/15 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        
        {/* Animated grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-20 grid-rows-20 w-full h-full">
            {Array.from({ length: 400 }).map((_, i) => (
              <div key={i} className="border-r border-b border-blue-400/10 animate-pulse" 
                style={{ animationDelay: `${Math.floor(i / 20) * 0.1}s` }}></div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Elements - Fixed positions for hydration */}
      {isVisible && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {floatingElements.map((element) => (
            <div
              key={element.id}
              className={`absolute ${element.size} bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full animate-bounce blur-sm`}
              style={{
                left: element.left,
                top: element.top,
                animationDelay: element.delay,
                animationDuration: element.duration,
              }}
            />
          ))}
          
          {/* Sparkle effects */}
          {floatingElements.slice(0, 4).map((element, index) => (
            <Sparkles
              key={`sparkle-${element.id}`}
              className="absolute w-4 h-4 text-yellow-300/40 animate-ping"
              style={{
                left: `calc(${element.left} + 50px)`,
                top: `calc(${element.top} + 30px)`,
                animationDelay: `${index * 0.5}s`,
              }}
            />
          ))}
        </div>
      )}

      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Enhanced Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl rounded-full px-6 py-3 mb-8 border border-blue-400/30 shadow-2xl animate-fade-in-up">
            <Zap className="w-6 h-6 text-yellow-400 animate-pulse" />
            <span className="text-blue-300 font-semibold text-lg">Government Certifications</span>
            <Target className="w-6 h-6 text-emerald-400 animate-pulse" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-purple-200 mb-8 animate-fade-in-up animation-delay-200 leading-tight">
            Certifications & Contract Vehicles
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100/90 max-w-5xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
            Ensuring compliance with federal standards, our certifications and contract vehicles 
            streamline procurement and demonstrate our commitment to delivering 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300 font-bold"> secure, reliable solutions</span>.
          </p>

          {/* Animated underline */}
          <div className="mt-8 flex justify-center animate-fade-in-up animation-delay-600">
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:bg-white/10 transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/20 animate-fade-in-up overflow-hidden"
              style={{ animationDelay: `${800 + index * 200}ms` }}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              
              <stat.icon className={`w-10 h-10 ${stat.color} mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 relative z-10`} />
              <div className="text-3xl font-black text-white mb-2 relative z-10">{stat.value}</div>
              <div className="text-blue-200/80 text-sm font-medium relative z-10">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Enhanced Info Section */}
          <div className="space-y-8 animate-fade-in-left">
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/20 shadow-2xl hover:shadow-blue-500/20 transition-all duration-500">
              <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-4">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-2xl">Small Business Classifications</div>
                  <div className="text-blue-300/80 text-lg font-normal">Available for Acquisition Purposes</div>
                </div>
              </h3>
              
              <p className="text-blue-100/90 mb-10 leading-relaxed text-lg">
                Small Business Set-Asides are some of the most direct ways the government can 
                encourage and nurture small business growth through federal contracts. As a small business, 
                <span className="text-blue-300 font-semibold"> AIN is proud to foster job creation</span> in our community by utilizing our current small business set-asides.
              </p>

              {/* Enhanced Certification Tabs */}
              <div className="space-y-4">
                {Object.entries(certifications).map(([key, cert]) => {
                  const Icon = cert.icon;
                  const isActive = activeTab === key;
                  
                  return (
                    <button
                      key={key}
                      onClick={() => setActiveTab(key as CertificationKeys)}
                      className={`w-full text-left p-6 rounded-2xl border transition-all duration-500 group relative overflow-hidden ${
                        isActive
                          ? `bg-gradient-to-r ${cert.color} border-white/40 shadow-2xl scale-105`
                          : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 hover:scale-105'
                      }`}
                    >
                      {/* Animated background for active tab */}
                      {isActive && (
                        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent animate-pulse"></div>
                      )}
                      
                      <div className="flex items-center gap-6 relative z-10">
                        <div className={`p-4 rounded-2xl transition-all duration-300 ${
                          isActive ? 'bg-white/25 shadow-lg' : 'bg-blue-500/20 group-hover:bg-blue-500/30'
                        }`}>
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-white text-xl group-hover:text-blue-100 transition-colors mb-1">
                            {cert.title.split('(')[0].trim()}
                          </h4>
                          {cert.title.includes('(') && (
                            <span className="text-blue-200/80 text-base">
                              ({cert.title.split('(')[1]}
                            </span>
                          )}
                        </div>
                        <ChevronRight className={`w-6 h-6 text-blue-300 transition-all duration-300 ${
                          isActive ? 'rotate-90 scale-110' : 'group-hover:translate-x-2 group-hover:scale-110'
                        }`} />
                      </div>
                    </button>
                  );
                })}
              </div>

              <button className="w-full mt-10 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:via-blue-400 hover:to-indigo-500 text-white font-bold py-5 px-8 rounded-2xl transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/30 flex items-center justify-center gap-3 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <Download className="w-6 h-6 group-hover:animate-bounce relative z-10" />
                <span className="text-lg relative z-10">Download AIN Capabilities Statement</span>
              </button>
            </div>
          </div>

          {/* Right Side - Enhanced Certification Details */}
          <div className="space-y-8 animate-fade-in-right">
            {/* Main Certification Card */}
            <div className={`bg-gradient-to-br ${currentCert.color} rounded-3xl p-10 border border-white/30 shadow-2xl transform hover:scale-105 transition-all duration-500 relative overflow-hidden`}>
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 border-4 border-white/30 rounded-full"></div>
                <div className="absolute top-10 right-10 w-16 h-16 border-2 border-white/20 rounded-full animate-spin"></div>
              </div>

              <div className="relative z-10">
                <div className="flex items-start gap-8 mb-8">
                  <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-6 shadow-2xl">
                    <div className="bg-white rounded-2xl p-6 flex flex-col items-center min-w-[120px]">
                      <div className="text-3xl font-black text-gray-800 mb-2">SBA</div>
                      <div className="w-12 h-1 bg-blue-600 mb-3 rounded-full"></div>
                      <div className="text-xs text-gray-600 text-center leading-tight">U.S. Small Business<br/>Administration</div>
                      <div className={`mt-4 px-4 py-2 ${
                        activeTab === '8a' ? 'bg-blue-600' : 
                        activeTab === 'edwosb' ? 'bg-purple-600' : 'bg-emerald-600'
                      } text-white text-sm font-bold rounded-lg shadow-lg`}>
                        {currentCert.badge}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h2 className="text-4xl font-black text-white mb-4 leading-tight">{currentCert.title}</h2>
                    <p className="text-white/90 text-xl font-medium">{currentCert.subtitle}</p>
                  </div>
                </div>

                <p className="text-white/95 text-lg leading-relaxed mb-10 bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  {currentCert.description}
                </p>

                {/* Enhanced Features */}
                <div className="mb-10">
                  <h4 className="text-white font-black text-xl mb-6 flex items-center gap-3">
                    <div className="p-2 bg-white/20 rounded-lg">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    Key Features
                  </h4>
                  <div className="grid gap-4">
                    {currentCert.features.map((feature: string, index: number) => (
                      <div key={index} className="flex items-center gap-4 text-white/95 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
                        <div className="w-3 h-3 bg-gradient-to-r from-white to-blue-200 rounded-full flex-shrink-0 animate-pulse"></div>
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enhanced Advantages */}
                <div>
                  <h4 className="text-white font-black text-xl mb-6 flex items-center gap-3">
                    <div className="p-2 bg-white/20 rounded-lg">
                      <TrendingUp className="w-6 h-6" />
                    </div>
                    Contract Vehicle Advantages
                  </h4>
                  <div className="grid gap-4">
                    {currentCert.advantages.map((advantage: string, index: number) => (
                      <div key={index} className="flex items-center gap-4 text-white/95 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
                        <CheckCircle className="w-5 h-5 text-emerald-300 flex-shrink-0" />
                        <span className="font-medium">{advantage}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced CTA Card */}
            <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl shadow-lg">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h4>
                  <p className="text-blue-100/90 mb-6 text-lg leading-relaxed">
                    We look forward to speaking with you about our certifications and how they can enhance your acquisition strategy.
                  </p>
                  <Link href="/contact" passHref>
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-3 group">
                    <span>Contact Us Today</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-fade-in-left {
          animation: fade-in-left 0.8s ease-out forwards;
        }
        
        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out forwards;
        }
        
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        
        .animation-delay-400 {
          animation-delay: 400ms;
        }
        
        .animation-delay-600 {
          animation-delay: 600ms;
        }
        
        .animation-delay-1000 {
          animation-delay: 1000ms;
        }
        
        .animation-delay-2000 {
          animation-delay: 2000ms;
        }
      `}</style>
    </section>
  );
};

export default CertificationsSection;