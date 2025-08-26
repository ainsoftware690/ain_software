"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import WhoWeAreImage from "../../../utils/Images/who-are.webp";
import WhoWeAreImage2 from "../../../utils/Images/Whoe-We-Are-info-02.webp";
import WhoWeAreImage3 from "../../../utils/Images/Whoe-We-Are-info-03.svg";
import WhoWeAreImage4 from "../../../utils/Images/Whoe-We-Are-reach-us.webp";

interface VisibilityState {
  hero?: boolean;
  whoWeAre?: boolean;
  vision1?: boolean;
  vision2?: boolean;
  cta?: boolean;
}

interface MousePosition {
  x: number;
  y: number;
}

interface PlaceholderImageProps {
  alt: string;
  className: string;
  gradient: string;
  src?: any;
  width?: number;
  height?: number;
}

interface FloatingElementProps {
  className: string;
  delay?: number;
}

export default function WhoWeAre() {
  const [isVisible, setIsVisible] = useState<VisibilityState>({});
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const PlaceholderImage: React.FC<PlaceholderImageProps> = ({ 
    alt, 
    className, 
    gradient, 
    src, 
    width = 800, 
    height = 400 
  }) => (
    <div className={`relative group overflow-hidden rounded-2xl ${className}`}>
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
      <div className={`relative w-full h-full ${gradient} rounded-2xl flex items-center justify-center border border-white/10 overflow-hidden`}>
        {src ? (
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="w-full h-full object-cover rounded-2xl"
          />
        ) : (
          <div className="text-center space-y-4 p-8">
            <div className="w-16 h-16 bg-white/20 rounded-full mx-auto flex items-center justify-center backdrop-blur-sm">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-white/80 text-sm font-medium">{alt}</p>
          </div>
        )}
      </div>
    </div>
  );

  const FloatingElement: React.FC<FloatingElementProps> = ({ className, delay = 0 }) => (
    <div 
      className={`absolute opacity-20 animate-bounce ${className}`}
      style={{
        animationDelay: `${delay}s`,
        animationDuration: '3s'
      }}
    >
      <div className="w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-sm"></div>
    </div>
  );

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-600/20 via-transparent to-transparent"></div>
        
        {/* Floating particles */}
        <FloatingElement className="top-1/4 left-1/4" delay={0} />
        <FloatingElement className="top-1/3 right-1/4" delay={1} />
        <FloatingElement className="bottom-1/4 left-1/3" delay={2} />
        <FloatingElement className="bottom-1/3 right-1/3" delay={0.5} />
        
        {/* Mouse follower gradient */}
        <div 
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl transition-all duration-1000 ease-out pointer-events-none"
          style={{
            transform: `translate(${mousePosition.x - 192}px, ${mousePosition.y - 192}px)`
          }}
        />
      </div>

      <section className="relative z-10 text-gray-800 mb-10 mt-20">
        {/* Hero Section */}
        <div className="w-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden">
          <div className="container mx-auto px-4 py-20 space-y-20">
            <div 
              className={`text-start mx-auto space-y-6 animate-on-scroll transition-all duration-1000 transform ${
                isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              id="hero"
            >
              <div className="inline-block">
                <h2 className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent tracking-wider">
                  About us / Who We Are
                </h2>
              </div>
              
              <h3 className="text-5xl md:text-7xl font-black leading-tight">
                <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                  Engineering Excellence for
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Scalable, Secure Solutions
                </span>
              </h3>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl leading-relaxed font-light">
                Your mission is our focus. We deliver breakthrough digital innovations that 
                <br />
                <span className="text-blue-400 font-medium">transform large federal agencies, improving the lives of people.</span>
              </p>

              {/* Animated elements */}
              <div className="flex flex-wrap gap-4 pt-6">
                <div className="px-6 py-3 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium animate-pulse">
                  🚀 Innovation
                </div>
                <div className="px-6 py-3 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium animate-pulse" style={{ animationDelay: '0.5s' }}>
                  🔒 Security
                </div>
                <div className="px-6 py-3 bg-pink-500/20 border border-pink-500/30 rounded-full text-pink-300 text-sm font-medium animate-pulse" style={{ animationDelay: '1s' }}>
                  ⚡ Excellence
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Who We Are Section */}
        <div className="w-screen bg-gradient-to-br from-sky-900 via-blue-800 to-indigo-900 text-white mb-10">
          <div className="container mx-auto px-4 py-20">
            <div 
              className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center animate-on-scroll transition-all duration-1000 transform ${
                isVisible.whoWeAre ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
              }`}
              id="whoWeAre"
            >
              {/* Left Content */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <h2 className="text-5xl font-black bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mx-4">
                    Who We Are?
                  </h2>
                  <div className="w-16 h-1 mx-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                </div>
                
                <p className="text-gray-200 leading-relaxed mx-4">
                  AIN is a <span className="text-pink-400 font-bold">woman-owned small business</span> that serves customer needs.
                  With our passion and commitment, we design reliable digital foundations to solve business problems. 
                  We work with clients as partners to achieve their technology solutions and build sustainable processes 
                  that deliver exceptional results. We deliver IT professional services securely.
                </p>

                <div className="flex flex-wrap gap-3 pt-4 mx-4">
                  <div className="px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium">
                    🏢 Small Business
                  </div>
                  <div className="px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium">
                    🤝 Partnership Focus
                  </div>
                  <div className="px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-300 text-sm font-medium">
                    🔐 Secure Solutions
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="flex justify-center">
                <PlaceholderImage 
                  alt="Who We Are Illustration" 
                  className="w-full h-96"
                  gradient="bg-gradient-to-br from-blue-500/30 to-purple-500/30 backdrop-blur-xl"
                  src={WhoWeAreImage}
                  width={800}
                  height={623}
                />
              </div>
            </div>
          </div>

          {/* Vision Section 1 - Empowering Secure Innovation */}
          <div className="container mx-auto px-4 py-16">
            <div 
              className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center animate-on-scroll transition-all duration-1000 transform ${
                isVisible.vision1 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
              }`}
              id="vision1"
            >
              {/* Left Image */}
              <div className="flex justify-center">
                <PlaceholderImage 
                  alt="Vision 1 - Secure Innovation" 
                  className="w-full h-96"
                  gradient="bg-gradient-to-br from-emerald-500/30 to-cyan-500/30 backdrop-blur-xl"
                  src={WhoWeAreImage2}
                  width={800}
                  height={623}
                />
              </div>

              {/* Right Content */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <h2 className="text-5xl font-black bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mx-4">
                    OUR VISION
                  </h2>
                  <div className="w-16 h-1 mx-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full"></div>
                </div>
                
                <h3 className="text-xl font-medium text-white mx-4">
                  Empowering Secure Innovation
                </h3>
                
                <p className="text-white leading-relaxed mx-4">
                  To harness the power of technology to enhance successful outcomes for 
                  <span className="text-emerald-400 font-bold"> cybersecurity challenges</span> and 
                  empower the human experience.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4 mx-4">
                  <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 text-center hover:border-emerald-500/40 transition-all duration-300">
                    <div className="text-2xl mb-2">🔐</div>
                    <div className="text-white font-semibold">Security First</div>
                  </div>
                  <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-4 text-center hover:border-cyan-500/40 transition-all duration-300">
                    <div className="text-2xl mb-2">⚡</div>
                    <div className="text-white font-semibold">Innovation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Vision Section 2 - Fostering Inclusive Innovation */}
          <div className="container mx-auto px-4 py-16">
            <div 
              className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center animate-on-scroll transition-all duration-1000 transform ${
                isVisible.vision2 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
              }`}
              id="vision2"
            >
              {/* Left Content */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <h2 className="text-5xl font-black bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent mx-4">
                    OUR VISION
                  </h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full mx-4"></div>
                </div>
                
                <h3 className="text-xl font-medium text-white mx-4">
                  Fostering Inclusive Innovation
                </h3>
                
                <p className="text-gray-200 leading-relaxed mx-4">
                  We aim to build a team of passionate technologists who value 
                  <span className="text-pink-400 font-bold"> Trust, Exploration, Collaboration, and Agile decision-making</span>. 
                  We welcome people from all walks of life to contribute to and strengthen our culture of empathy and inclusiveness.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4 mx-4">
                  {[
                    { name: 'Trust', icon: '🤝', color: 'pink' },
                    { name: 'Exploration', icon: '🔍', color: 'orange' },
                    { name: 'Collaboration', icon: '👥', color: 'pink' },
                    { name: 'Agility', icon: '⚡', color: 'orange' }
                  ].map((value, index) => (
                    <div key={value.name} className="bg-gradient-to-r from-pink-500/10 to-orange-500/10 border border-pink-500/20 rounded-xl p-4 text-center hover:border-pink-500/40 transition-all duration-300 animate-pulse" style={{ animationDelay: `${index * 0.2}s` }}>
                      <div className="text-2xl mb-2">{value.icon}</div>
                      <div className="text-white font-semibold">{value.name}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Image */}
              <div className="flex justify-center">
                <PlaceholderImage 
                  alt="Vision 2 - Inclusive Innovation" 
                  className="w-full h-96"
                  gradient="bg-gradient-to-br from-pink-500/30 to-orange-500/30 backdrop-blur-xl"
                  src={WhoWeAreImage3}
                  width={608}
                  height={473}
                />
              </div>
            </div>
          </div>

          {/* CTA Section - Looking to scale your engineering efforts */}
          <div className="container mx-auto px-4 py-16">
            <div 
              className={`flex flex-col-reverse lg:flex-row items-center gap-10 animate-on-scroll transition-all duration-1000 transform ${
                isVisible.cta ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              id="cta"
            >
              {/* Left Image */}
              <div className="flex-1 mb-10">
                <PlaceholderImage 
                  alt="Reach Us Illustration" 
                  className="w-full h-96"
                  gradient="bg-gradient-to-br from-violet-500/30 to-indigo-500/30 backdrop-blur-xl"
                  src={WhoWeAreImage4}
                  width={800}
                  height={653}
                />
              </div>

              {/* Right Content */}
              <div className="flex-1 space-y-6 text-center lg:text-left">
                <h2 className="text-5xl font-bold text-white mx-4">
                  <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                    Looking to scale your
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                    engineering efforts?
                  </span>
                </h2>
                
                <p className="text-white leading-relaxed mx-4">
                  We share common technology and strategies for scaling your product engineering 
                  and helping you to deliver <span className="text-violet-400 font-bold">high quality products</span>.
                </p>
                
                <div className="mx-4">
                  <Link
                    href="/contact/"
                    className="group relative inline-flex items-center px-6 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/25"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative flex items-center space-x-2">
                      <span>Get in touch</span>
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
                        <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
                      </svg>
                    </div>
                  </Link>
                </div>

                {/* Additional CTA features */}
                <div className="grid grid-cols-2 gap-4 pt-6 mx-4">
                  <div className="bg-violet-500/10 border border-violet-500/20 rounded-xl p-4 text-center hover:border-violet-500/40 transition-all duration-300">
                    <div className="text-2xl mb-2">📈</div>
                    <div className="text-white font-semibold">Scale Fast</div>
                  </div>
                  <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-4 text-center hover:border-indigo-500/40 transition-all duration-300">
                    <div className="text-2xl mb-2">🎯</div>
                    <div className="text-white font-semibold">Quality Focus</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}