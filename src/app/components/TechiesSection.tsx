'use client';

import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

// Types
interface TechService {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
  gradient: string;
}

// Floating tech words component
const FloatingTechWords: React.FC = () => {
  const techWords = [
    'React', 'Node.js', 'Python', 'AI', 'ML', 'Docker', 'Kubernetes', 'AWS', 'GraphQL', 'TypeScript',
    'MongoDB', 'PostgreSQL', 'Redis', 'Microservices', 'DevOps', 'CI/CD', 'Terraform', 'Jenkins',
    'Blockchain', 'WebAssembly', 'Next.js', 'Vue.js', 'Angular', 'Svelte', 'FastAPI', 'Django'
  ];

  const [words, setWords] = useState<Array<{id: number, text: string, x: number, y: number, delay: number, duration: number, size: number}>>([]);

  useEffect(() => {
    const newWords = Array.from({length: 15}, (_, i) => ({
      id: i,
      text: techWords[Math.floor(Math.random() * techWords.length)],
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 15 + Math.random() * 10,
      size: 12 + Math.random() * 8
    }));
    setWords(newWords);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {words.map((word) => (
        <motion.div
          key={word.id}
          className="absolute font-mono font-bold opacity-10 select-none"
          style={{
            left: `${word.x}%`,
            top: `${word.y}%`,
            fontSize: `${word.size}px`,
            background: 'linear-gradient(135deg, #60a5fa, #a78bfa, #34d399)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
          animate={{
            x: [-30, 30, -30],
            y: [-40, 40, -40],
            rotate: [-5, 5, -5],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: word.duration,
            repeat: Infinity,
            delay: word.delay,
            ease: "easeInOut"
          }}
        >
          {word.text}
        </motion.div>
      ))}
    </div>
  );
};

// Floating particles component
const FloatingParticles: React.FC = () => {
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, size: number, delay: number, duration: number, color: string}>>([]);

  useEffect(() => {
    const colors = ['#60a5fa', '#a78bfa', '#34d399', '#f472b6', '#fb7185'];
    const newParticles = Array.from({length: 25}, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 8,
      duration: 8 + Math.random() * 4,
      color: colors[Math.floor(Math.random() * colors.length)]
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: `radial-gradient(circle, ${particle.color}40 0%, ${particle.color}20 50%, transparent 100%)`
          }}
          animate={{
            y: [-25, 25, -25],
            x: [-20, 20, -20],
            opacity: [0.2, 0.6, 0.2],
            scale: [0.8, 1.4, 0.8],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

// Enhanced animated background orbs
const BackgroundOrbs: React.FC = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Multiple animated gradient orbs */}
    <motion.div 
      className="absolute w-96 h-96 rounded-full"
      style={{
        background: 'radial-gradient(circle, rgba(96, 165, 250, 0.15) 0%, rgba(139, 92, 246, 0.08) 50%, transparent 100%)',
        top: '0%',
        right: '10%',
        filter: 'blur(40px)'
      }}
      animate={{
        scale: [1, 1.3, 1],
        opacity: [0.4, 0.7, 0.4],
        x: [-20, 20, -20],
        y: [-30, 30, -30],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
    
    <motion.div 
      className="absolute w-80 h-80 rounded-full"
      style={{
        background: 'radial-gradient(circle, rgba(52, 211, 153, 0.12) 0%, rgba(96, 165, 250, 0.06) 50%, transparent 100%)',
        bottom: '5%',
        left: '0%',
        filter: 'blur(35px)'
      }}
      animate={{
        scale: [1.2, 0.8, 1.2],
        opacity: [0.3, 0.6, 0.3],
        x: [15, -15, 15],
        y: [25, -25, 25],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 3
      }}
    />

    <motion.div 
      className="absolute w-64 h-64 rounded-full"
      style={{
        background: 'radial-gradient(circle, rgba(167, 139, 250, 0.1) 0%, rgba(244, 114, 182, 0.05) 50%, transparent 100%)',
        top: '40%',
        right: '20%',
        filter: 'blur(30px)'
      }}
      animate={{
        scale: [0.9, 1.4, 0.9],
        opacity: [0.2, 0.5, 0.2],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 6
      }}
    />

    <motion.div 
      className="absolute w-72 h-72 rounded-full"
      style={{
        background: 'radial-gradient(circle, rgba(34, 197, 94, 0.08) 0%, rgba(59, 130, 246, 0.04) 50%, transparent 100%)',
        top: '70%',
        left: '60%',
        filter: 'blur(25px)'
      }}
      animate={{
        scale: [1.1, 0.7, 1.1],
        opacity: [0.3, 0.6, 0.3],
        x: [-25, 25, -25],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1
      }}
    />
  </div>
);

// Icons as components
const AIIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456z" 
          stroke="currentColor" strokeWidth="1.5" fill="none"/>
  </svg>
);

const ReactIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="2" fill="currentColor"/>
    <path d="M12 1c-6.628 0-12 5.373-12 12 0 6.627 5.372 12 12 12 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12zm-.895 15.955c-1.747-.073-3.351-.778-4.532-1.963.18-.02.359-.042.538-.066 1.247-.167 2.504-.383 3.759-.641.253.903.548 1.787.883 2.642-.216.02-.432.025-.648.028zm1.79 0c-.216-.003-.432-.008-.648-.028.335-.855.63-1.739.883-2.642 1.255.258 2.512.474 3.759.641.179.024.358.046.538.066-1.181 1.185-2.785 1.89-4.532 1.963zm5.316-2.635c-.157-.02-.314-.041-.471-.062-1.29-.172-2.596-.397-3.903-.677-.24-.791-.518-1.57-.833-2.331 1.39-.755 2.747-1.571 4.045-2.449.688 1.899.94 3.9.162 5.519zm-12.422 0c-.778-1.619-.526-3.62.162-5.519 1.298.878 2.655 1.694 4.045 2.449-.315.761-.593 1.54-.833 2.331-1.307.28-2.613.505-3.903.677-.157.021-.314.042-.471.062zm-.541-6.199c.227-.156.458-.308.693-.455 1.331-.833 2.751-1.554 4.219-2.141-.337.86-.635 1.742-.892 2.642-1.215.255-2.419.548-3.606.881-.173-.031-.345-.063-.514-.096-.153.054-.306.108-.458.163-.001.002-.002.004-.003.006zm13.504 0c-.001-.002-.002-.004-.003-.006-.152-.055-.305-.109-.458-.163-.169.033-.341.065-.514.096-1.187-.333-2.391-.626-3.606-.881-.257-.9-.555-1.782-.892-2.642 1.468.587 2.888 1.308 4.219 2.141.235.147.466.299.693.455zm-6.752-3.932c.216.019.432.024.648.028.335.855.63 1.739.883 2.642-1.255-.258-2.512-.474-3.759-.641-.179-.024-.358-.046-.538-.066 1.181-1.185 2.785-1.89 4.532-1.963-.216.003-.432.008-.648.028z" 
          stroke="currentColor" strokeWidth="1" fill="none"/>
  </svg>
);

const KubernetesIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2l3.09 6.26L22 9l-6.91.74L12 16l-3.09-6.26L2 9l6.91-.74L12 2z" 
          stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <path d="M12 7v10M7 12h10" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
  </svg>
);

const BackendIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="6.5" cy="10.5" r="1.5" fill="currentColor"/>
    <circle cx="12" cy="10.5" r="1.5" fill="currentColor"/>
    <circle cx="17.5" cy="10.5" r="1.5" fill="currentColor"/>
    <path d="M5 7h14M5 13h14" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
  </svg>
);

const DataIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="12" cy="5" rx="9" ry="3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <path d="M21 12c0 1.66-4.03 3-9 3s-9-1.34-9-3" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <ellipse cx="12" cy="12" rx="7" ry="2" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
  </svg>
);

// New UI/UX Design Icon
const UIUXIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="4" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <path d="M7 8h4M7 10h2M15 8h2M15 10h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="12" cy="20" r="1" fill="currentColor"/>
    <path d="M8 16l4 2 4-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 12l3 2 3-2" stroke="currentColor" strokeWidth="1" opacity="0.5" strokeLinecap="round"/>
  </svg>
);

// Services data with gradients
const services: TechService[] = [
  {
    id: 'ai-ml',
    title: 'AI / ML',
    description: 'Cutting-edge artificial intelligence and machine learning solutions that transform data into intelligent decisions.',
    icon: <AIIcon />,
    delay: 0.1,
    gradient: 'from-blue-500 via-purple-500 to-pink-500'
  },
  {
    id: 'react-node',
    title: 'ReactJS, NodeJS',
    description: 'Modern full-stack development with React ecosystem and powerful backend architectures.',
    icon: <ReactIcon />,
    delay: 0.2,
    gradient: 'from-cyan-500 via-blue-500 to-indigo-500'
  },
  {
    id: 'kubernetes',
    title: 'Kubernetes',
    description: 'Scalable container orchestration and cloud-native infrastructure management solutions.',
    icon: <KubernetesIcon />,
    delay: 0.3,
    gradient: 'from-green-500 via-teal-500 to-cyan-500'
  },
  {
    id: 'backend',
    title: 'Backend Engineering',
    description: 'Robust server-side architecture and API development for enterprise-grade applications.',
    icon: <BackendIcon />,
    delay: 0.4,
    gradient: 'from-orange-500 via-red-500 to-pink-500'
  },
  {
    id: 'data-eng',
    title: 'Data Engineering',
    description: 'Advanced data pipeline architecture and analytics infrastructure for data-driven insights.',
    icon: <DataIcon />,
    delay: 0.5,
    gradient: 'from-purple-500 via-violet-500 to-indigo-500'
  },
  {
    id: 'ui/ux',
    title: 'UI/UX Design',
    description: 'Intuitive and engaging user interfaces with a focus on user experience and accessibility.',
    icon: <UIUXIcon />,
    delay: 0.6,
    gradient: 'from-pink-500 via-purple-500 to-indigo-500'
  }
];

// Enhanced Service card component with more animations
const ServiceCard: React.FC<{service: TechService}> = ({ service }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50, scale: 0.8, rotateY: -15 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1, rotateY: 0 } : {}}
      transition={{ 
        duration: 0.8, 
        delay: service.delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{ 
        y: -12,
        scale: 1.03,
        rotateY: 2,
        transition: { duration: 0.4, ease: "easeOut" }
      }}
      className="group relative perspective-1000"
    >
      {/* Enhanced glow effect */}
      <motion.div 
        className={`absolute -inset-1 bg-gradient-to-r ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-700`}
        whileHover={{ scale: 1.1, rotate: 2 }}
      />
      
      {/* Card background with glassmorphism */}
      <div className="relative bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 h-full hover:border-white/40 hover:bg-gradient-to-br hover:from-white/20 hover:via-white/15 hover:to-white/10 transition-all duration-700 overflow-hidden shadow-2xl">
        
        {/* Animated background pattern */}
        <div className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
          <div className={`w-full h-full bg-gradient-to-br ${service.gradient} rounded-full blur-3xl transform translate-x-8 -translate-y-8 group-hover:scale-125 transition-transform duration-700`} />
        </div>

        {/* Icon with enhanced animation */}
        <motion.div 
          className="relative z-10 mb-4"
          whileHover={{ 
            scale: 1.15, 
            rotate: [0, -5, 5, 0],
            transition: { duration: 0.5 }
          }}
        >
          <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.gradient} p-0.5 shadow-2xl shadow-black/25`}>
            <div className="w-full h-full bg-gray-900/95 rounded-xl flex items-center justify-center backdrop-blur-sm">
              <motion.div 
                className="text-white"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3 }}
              >
                {service.icon}
              </motion.div>
            </div>
          </div>
        </motion.div>
        
        {/* Title with gradient animation */}
        <motion.h3 
          className="relative z-10 text-lg font-bold text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-blue-100 group-hover:to-purple-100 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500"
          whileHover={{ scale: 1.02 }}
        >
          {service.title}
        </motion.h3>
        
        {/* Description with fade animation */}
        <motion.p 
          className="relative z-10 text-gray-900 text-sm leading-relaxed group-hover:text-gray-100 transition-all duration-500"
          initial={{ opacity: 0.8 }}
          whileHover={{ opacity: 1, y: -2 }}
        >
          {service.description}
        </motion.p>

        {/* Enhanced animated bottom border */}
        <motion.div 
          className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${service.gradient} w-0 group-hover:w-full transition-all duration-1000 ease-out shadow-lg`}
        />

        {/* Corner accent */}
        <div className="absolute top-2 right-2 w-2 h-2 bg-gradient-to-br from-white/40 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
};

// Main component with spectacular animations
const TechiesSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden px-4"
    >
      {/* Multi-layered animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/30" />
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/20 via-transparent to-pink-900/20" />
      <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-cyan-900/10 to-teal-900/20" />
      
      {/* Animated background elements */}
      <BackgroundOrbs />
      <FloatingParticles />
      <FloatingTechWords />

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='2' cy='2' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center px-4">
            
            {/* Left Content with spectacular typography */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -80, rotateY: -15 }}
              animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
              transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {/* Animated title with mixed colors */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <motion.h1 
                  className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.span  
                    className="block mb-3 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent"
                    animate={{ 
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{ 
                      duration: 5, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                    style={{ backgroundSize: '200% 200%' }}
                  >
                    Techies in{' '}
                    <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent font-extrabold">
                      Practice
                    </span>
                  </motion.span>
                  <motion.span 
                    className="block bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent"
                    animate={{ 
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: 1
                    }}
                    style={{ backgroundSize: '200% 200%' }}
                  >
                    and in{' '}
                    <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent font-extrabold">
                      Spirit
                    </span>
                  </motion.span>
                </motion.h1>
              </motion.div>
              
              {/* Multiple animated accent lines */}
              <motion.div className="space-y-2">
                <motion.div 
                  className="h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 shadow-lg shadow-blue-500/50 rounded-full"
                  initial={{ width: 0, opacity: 0 }}
                  animate={isInView ? { width: "5rem", opacity: 1 } : {}}
                  transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                />
                <motion.div 
                  className="h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 shadow-lg shadow-purple-500/50 rounded-full"
                  initial={{ width: 0, opacity: 0 }}
                  animate={isInView ? { width: "3rem", opacity: 1 } : {}}
                  transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
                />
              </motion.div>
              
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 1.2 }}
              >
                <p className="text-xl font-medium leading-relaxed">
                  <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent font-bold">
                    Over 5+ years of Proven Technology Experience
                  </span>
                  <br />
                  <span className="text-gray-300 font-normal">
                    in Both{' '}
                    <span className="text-cyan-400 font-semibold">Government</span>
                    {' '}&{' '}
                    <span className="text-pink-400 font-semibold">Commercial</span>
                    {' '}Markets.
                  </span>
                </p>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 1, delay: 1.4 }}
                >
                  <p className="text-gray-300 leading-relaxed text-lg">
                    Our teams are honed by{' '}
                    <span className="text-emerald-400 font-semibold">domain experts</span>
                    {' '}who help you make pragmatic decisions in selecting the right{' '}
                    <span className="text-violet-400 font-semibold">infrastructure</span>
                    {' '}and{' '}
                    <span className="text-amber-400 font-semibold">tools</span>
                    {' '}without losing sight of your{' '}
                    <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-bold">
                      mission
                    </span>
                    .
                  </p>
                </motion.div>

                {/* Call to action button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 1.6 }}
                >
                  <motion.button
                    className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl text-white font-bold text-lg shadow-2xl shadow-blue-500/25 hover:shadow-purple-500/40 transition-all duration-500 overflow-hidden"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(147, 51, 234, 0.4)"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10">Explore Our Solutions</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      animate={{
                        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      style={{ backgroundSize: '200% 200%' }}
                    />
                  </motion.button>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Content - Enhanced Services Grid */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 80, rotateY: 15 }}
              animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {/* Background glow for the grid */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-2xl opacity-60" />
              
              <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-6">
                {services.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 50, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{ 
                      duration: 0.8,
                      delay: 0.7 + (index * 0.1),
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                  >
                    <ServiceCard service={service} />
                  </motion.div>
                ))}
              </div>

              {/* Floating accent elements around the grid */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-60 blur-sm"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.6, 0.8, 0.6],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div
                className="absolute -bottom-6 -left-6 w-6 h-6 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full opacity-50 blur-sm"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0.7, 0.5],
                  x: [-10, 10, -10],
                  y: [-10, 10, -10],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              />

              <motion.div
                className="absolute top-1/2 -right-8 w-4 h-4 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full opacity-40 blur-sm"
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.4, 0.6, 0.4],
                  rotate: [0, -180, -360],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </motion.div>

          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none" />
    </section>
  );
};

export default TechiesSection;