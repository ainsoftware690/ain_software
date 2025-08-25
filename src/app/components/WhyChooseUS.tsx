"use client";
import React, { useState, useEffect } from "react";
import { Handshake, Lightbulb, Cog } from "lucide-react";
import Link from "next/link";

const features = [
  {
    title: "Real-Time Collaboration",
    description:
      "At AIN, we promote open communication and teamwork, ensuring that our team is connected to achieve outstanding results.",
    icon: Handshake,
    gradient: "from-purple-500 to-pink-500",
    hoverGradient: "from-purple-600 to-pink-600",
    delay: "0ms",
  },
  {
    title: "Excellence & Innovation",
    description:
      "Our commitment to quality drives us to innovate continuously, delivering cutting-edge solutions that meet client needs.",
    icon: Lightbulb,
    gradient: "from-blue-500 to-cyan-500",
    hoverGradient: "from-blue-600 to-cyan-600",
    delay: "200ms",
  },
  {
    title: "Implementation Expertise",
    description:
      "With extensive experience, our professionals ensure efficient project execution, helping clients achieve their goals swiftly.",
    icon: Cog,
    gradient: "from-emerald-500 to-teal-500",
    hoverGradient: "from-emerald-600 to-teal-600",
    delay: "400ms",
  },
];

type FloatingParticleProps = {
  delay: string;
  duration: string;
  x: number;
  y: number;
};

const FloatingParticle: React.FC<FloatingParticleProps> = ({
  delay,
  duration,
  x,
  y,
}) => (
  <div
    className="absolute w-2 h-2 bg-white/10 rounded-full animate-pulse"
    style={{
      left: `${x}%`,
      top: `${y}%`,
      animationDelay: delay,
      animationDuration: duration,
    }}
  />
);

export default function ModernWhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false);
  const [particles, setParticles] = useState<
    { key: number; delay: string; duration: string; x: number; y: number }[]
  >([]);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);

    // ✅ Generate particles only on client (prevents hydration mismatch)
    const generated = Array.from({ length: 20 }).map((_, i) => ({
      key: i,
      delay: `${i * 200}ms`,
      duration: `${3 + i * 0.2}s`,
      x: Math.random() * 100,
      y: Math.random() * 100,
    }));
    setParticles(generated);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div
          className="absolute top-3/4 right-1/4 w-64 h-64 bg-pink-500/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Floating Particles */}
      {particles.map((particle) => (
        <FloatingParticle
          key={particle.key}
          delay={particle.delay}
          duration={particle.duration}
          x={particle.x}
          y={particle.y}
        />
      ))}

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Header Section */}
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <div className="inline-block">
            <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent mb-4 font-sans tracking-tight">
              Why Choose Us?
            </h2>
            <div className="flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
            </div>
          </div>
          <p className="text-gray-300 text-xl mt-6 max-w-2xl mx-auto leading-relaxed">
            Discover what sets us apart in delivering exceptional solutions
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              feature={feature}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Bottom CTA */}
           {/* Bottom CTA */}
        <div
          className={`text-center mt-20 transition-all duration-1000 delay-1000 transform ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <Link href="/contact " target="_blank">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:from-purple-700 hover:to-pink-700 hover:shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105">
              <span className="relative z-10">Get Started Today</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

type Feature = {
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  gradient: string;
  hoverGradient: string;
  delay: string;
};

type FeatureCardProps = {
  feature: Feature;
  index: number;
  isVisible: boolean;
};

const FeatureCard: React.FC<FeatureCardProps> = ({
  feature,
  index,
  isVisible,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = feature.icon;

  return (
    <div
      className={`transition-all duration-700 transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
      style={{ transitionDelay: feature.delay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="group relative h-full">
        {/* Card Background with Gradient Border */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 rounded-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
        <div className="relative bg-slate-800/90 backdrop-blur-xl rounded-2xl p-8 h-full border border-white/10 group-hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105">
          {/* Icon Container */}
          <div className="relative mb-6">
            <div
              className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.gradient} p-3 transform transition-all duration-300 ${
                isHovered ? "scale-110 rotate-3" : ""
              }`}
            >
              <Icon className="w-full h-full text-white" strokeWidth={1.5} />
            </div>
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur"></div>
          </div>
          {/* Content */}
          <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
            {feature.title}
          </h3>
          <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
            {feature.description}
          </p>
          {/* Hover Effect Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          {/* Bottom Accent Line */}
          <div
            className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
          ></div>
        </div>
      </div>
    </div>
  );
};
