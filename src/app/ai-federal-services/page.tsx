'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Shield, 
  TrendingUp, 
  Bot, 
  FileText, 
  Users, 
  DollarSign, 
  Brain,
  Lock,
  Settings,
  CheckCircle,
  AlertTriangle,
  Cpu,
  BarChart3,
  Eye,
  Clock,
  Network,
  Layers,
  Zap
} from 'lucide-react';
import Link from 'next/link';

const AIFederalServicesPage = () => {
  const [activeSection, setActiveSection] = useState('introduction');

  const applications = [
    {
      icon: Shield,
      title: "Regulatory Compliance & Risk Management",
      description: "AI models analyze large datasets to identify patterns, flag potential compliance issues, and predict risks while automating compliance processes.",
      features: ["Pattern Recognition", "Risk Prediction", "Automated Compliance"]
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics for Resource Optimization",
      description: "Forecast future needs and allocate resources efficiently in disaster response, budget planning, and logistical support scenarios.",
      features: ["Disaster Response", "Budget Planning", "Resource Allocation"]
    },
    {
      icon: Lock,
      title: "Fraud Detection & Cybersecurity",
      description: "Machine learning algorithms detect anomalies in real-time and identify patterns indicative of fraudulent activities.",
      features: ["Real-time Detection", "Pattern Analysis", "Threat Protection"]
    },
    {
      icon: Bot,
      title: "Natural Language Processing",
      description: "AI-powered NLP models improve communication through virtual assistants and chatbots for citizen services.",
      features: ["Virtual Assistants", "Query Processing", "Automated Support"]
    },
    {
      icon: FileText,
      title: "Document & Workflow Automation",
      description: "Automate document classification, data extraction, and workflow management processes to reduce manual errors.",
      features: ["Document Processing", "Data Extraction", "Workflow Management"]
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Increased Efficiency & Productivity",
      description: "Automate routine tasks and free federal employees to focus on strategic responsibilities."
    },
    {
      icon: DollarSign,
      title: "Cost Savings",
      description: "Optimize resources and reduce operational overhead within tight budget constraints."
    },
    {
      icon: Brain,
      title: "Improved Decision-Making",
      description: "Real-time data insights enable more informed decision-making and better crisis response."
    },
    {
      icon: BarChart3,
      title: "Scalability & Flexibility",
      description: "AI models easily scale to handle growing data volumes and complex workflows."
    }
  ];

  const challenges = [
    {
      icon: Lock,
      title: "Data Privacy & Security",
      description: "Robust security measures required for handling sensitive federal data while ensuring compliance."
    },
    {
      icon: Settings,
      title: "Legacy System Integration",
      description: "Complex integration with existing IT infrastructure and ensuring seamless data flow."
    },
    {
      icon: Eye,
      title: "Ethical & Transparent AI",
      description: "Maintaining explainable AI systems that adhere to ethical standards and public trust."
    },
    {
      icon: Users,
      title: "Skilled Workforce & Training",
      description: "Investment in training and collaboration with AI experts for successful implementation."
    }
  ];

  const considerations = [
    "Pilot Programs for Gradual Implementation",
    "Building AI-Driven Data Governance Frameworks",
    "Partnering with Experienced AI Vendors",
    "Ensuring Compliance with Federal Regulations"
  ];

  // AI Neural Network Animation Component
  const AINetworkGraphic = () => {
    const nodes = [
      { id: 1, x: 50, y: 30, size: 12, delay: 0 },
      { id: 2, x: 20, y: 50, size: 8, delay: 0.2 },
      { id: 3, x: 80, y: 50, size: 8, delay: 0.4 },
      { id: 4, x: 15, y: 70, size: 6, delay: 0.6 },
      { id: 5, x: 50, y: 70, size: 10, delay: 0.8 },
      { id: 6, x: 85, y: 70, size: 6, delay: 1.0 },
      { id: 7, x: 50, y: 90, size: 14, delay: 1.2 }
    ];

    const connections = [
      { from: 1, to: 2 }, { from: 1, to: 3 },
      { from: 2, to: 4 }, { from: 2, to: 5 }, { from: 3, to: 5 }, { from: 3, to: 6 },
      { from: 4, to: 7 }, { from: 5, to: 7 }, { from: 6, to: 7 }
    ];

    return (
      <div className="relative w-80 h-80">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
          {/* Connections */}
          {connections.map((conn, idx) => {
            const fromNode = nodes.find(n => n.id === conn.from);
            const toNode = nodes.find(n => n.id === conn.to);
             if (!fromNode || !toNode) return null;
            return (
              <motion.line
                key={idx}
                x1={fromNode.x}
                y1={fromNode.y}
                x2={toNode.x}
                y2={toNode.y}
                stroke="url(#connectionGradient)"
                strokeWidth="0.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{ delay: idx * 0.1, duration: 1 }}
              />
            );
          })}
          
          {/* Nodes */}
          {nodes.map((node, idx) => (
            <motion.circle
              key={node.id}
              cx={node.x}
              cy={node.y}
              r={node.size / 4}
              fill="url(#nodeGradient)"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: node.delay, duration: 0.6 }}
            />
          ))}

          {/* Gradients */}
          <defs>
            <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.8"/>
              <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.4"/>
            </linearGradient>
            <radialGradient id="nodeGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#60A5FA"/>
              <stop offset="100%" stopColor="#3B82F6"/>
            </radialGradient>
          </defs>
        </svg>

        {/* Floating Particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            style={{
              left: `${20 + (i * 137) % 60}%`,
              top: `${20 + (i * 197) % 60}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 1, 0.3]
            }}
            transition={{
              duration: 2 + (i % 3),
              repeat: Infinity,
              delay: i * 0.2
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Navigation - Fixed at top */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10"
      >
        <div className="container mx-auto px-6 py-4">
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white border border-white/20 hover:bg-white/20 transition-all"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </motion.button>
          </Link>
        </div>
      </motion.div>

      {/* Hero Section - Redesigned */}
      <div className="relative overflow-hidden pt-20">
        {/* Enhanced Background Animation */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ 
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
            className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"
            style={{
              backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.3) 0%, transparent 25%), radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.3) 0%, transparent 25%)'
            }}
          />
          
          {/* Geometric Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(30deg,rgba(59,130,246,0.1)_12%,transparent_12.5%,transparent_87%,rgba(59,130,246,0.1)_87.5%,rgba(59,130,246,0.1)),linear-gradient(150deg,rgba(59,130,246,0.1)_12%,transparent_12.5%,transparent_87%,rgba(59,130,246,0.1)_87.5%,rgba(59,130,246,0.1)),linear-gradient(30deg,rgba(59,130,246,0.1)_12%,transparent_12.5%,transparent_87%,rgba(59,130,246,0.1)_87.5%,rgba(59,130,246,0.1)),linear-gradient(150deg,rgba(59,130,246,0.1)_12%,transparent_12.5%,transparent_87%,rgba(59,130,246,0.1)_87.5%,rgba(59,130,246,0.1))] bg-[size:80px_140px]"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Side - Content */}
            <div className="space-y-8">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-full text-blue-300 text-sm font-medium border border-blue-400/30"
              >
                <Brain className="w-5 h-5 mr-2" />
                Federal AI Solutions Whitepaper
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="text-6xl lg:text-7xl font-bold text-white leading-tight"
              >
                AI Models for
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent block">
                  Federal Services
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-300 leading-relaxed"
              >
                A comprehensive guide to revolutionizing federal operations through advanced AI solutions, 
                streamlining processes, and enhancing citizen services with cutting-edge technology.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4 items-center text-blue-300"
              >
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  6 minutes read
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  Federal Agencies
                </div>
                <div className="flex items-center">
                  <Shield className="w-4 h-4 mr-2" />
                  Security Focused
                </div>
              </motion.div>
            </div>

            {/* Right Side - AI Network Graphic */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="flex justify-center"
            >
              <div className="relative">
                {/* Main AI Network */}
                <div className="relative bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl p-8 backdrop-blur-sm border border-blue-400/20">
                  <AINetworkGraphic />
                  
                  {/* Corner Badges */}
                  <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full p-3">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-8 -left-8 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl p-4 backdrop-blur-sm border border-purple-400/30"
                >
                  <Network className="w-8 h-8 text-purple-400" />
                </motion.div>

                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -bottom-8 -right-8 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl p-4 backdrop-blur-sm border border-cyan-400/30"
                >
                  <Layers className="w-8 h-8 text-cyan-400" />
                </motion.div> 
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content - Enhanced spacing and typography */}
      <div className="container mx-auto px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          
          {/* Introduction - Redesigned */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mb-24"
          >
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-10 border border-white/10 shadow-2xl">
              <div className="flex items-center mb-8">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-4 mr-6">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-white">Introduction</h2>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Artificial Intelligence (AI) is revolutionizing the way federal agencies operate, offering unprecedented 
                opportunities to streamline processes, enhance decision-making, and improve citizen services. As the 
                federal sector continues to embrace digital transformation, AI models are playing a critical role in 
                addressing challenges such as data management, regulatory compliance, security, and resource optimization.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: FileText, text: "Data Processing & Management" },
                  { icon: BarChart3, text: "Predictive Analytics for Policy" },
                  { icon: Bot, text: "Automating Routine Tasks" },
                  { icon: Users, text: "Enhancing Public Service Delivery" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl p-6 border border-blue-400/20 text-center"
                  >
                    <item.icon className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                    <p className="text-white font-medium text-sm">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Key Applications - Enhanced layout */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="mb-24"
          >
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6">
                Key Applications of AI Models
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {applications.map((app, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-blue-400/30 transition-all duration-300 shadow-lg"
                >
                  <div className="flex items-start mb-6">
                    <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-4 mr-6 group-hover:scale-110 transition-transform">
                      <app.icon className="w-8 h-8 text-blue-400" />
                    </div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      0{index + 1}
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{app.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{app.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {app.features.map((feature, idx) => (
                      <span key={idx} className="px-4 py-2 bg-blue-500/10 text-blue-300 text-sm rounded-full border border-blue-400/20">
                        {feature}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Benefits - Enhanced visual hierarchy */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            className="mb-24"
          >
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6">Benefits of AI Models</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 + index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-3xl p-8 border border-green-400/20 text-center shadow-lg"
                >
                  <benefit.icon className="w-12 h-12 text-green-400 mx-auto mb-6" />
                  <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Challenges */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="mb-24"
          >
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6">Implementation Challenges</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-400 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {challenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.6 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-8 border border-orange-400/20 shadow-lg"
                >
                  <div className="flex items-center mb-6">
                    <challenge.icon className="w-10 h-10 text-orange-400 mr-6" />
                    <h3 className="text-2xl font-semibold text-white">{challenge.title}</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{challenge.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Key Considerations */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7 }}
            className="mb-24"
          >
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6">Key Implementation Considerations</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto rounded-full"></div>
            </div>
            
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-10 border border-white/10 shadow-2xl">
              <div className="grid md:grid-cols-2 gap-6">
                {considerations.map((consideration, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.8 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-400/20"
                  >
                    <CheckCircle className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" />
                    <span className="text-white font-medium">{consideration}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Future Outlook */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.9 }}
            className="mb-20"
          >
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl p-12 border border-blue-400/20 text-center shadow-2xl">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="inline-block mb-8"
              >
                <Cpu className="w-20 h-20 text-blue-400" />
              </motion.div>
              <h2 className="text-4xl font-bold text-white mb-8">The Future of AI in Federal Services</h2>
              <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
                AI models are poised to revolutionize federal services by driving efficiency, reducing costs, 
                and enabling more effective decision-making. As AI technologies continue to evolve, federal 
                agencies must adopt strategic, ethical, and well-planned approaches to integrate AI models 
                into their operations. The successful implementation of AI will not only transform internal 
                processes but also enhance the quality of services delivered to citizens.
              </p>
            </div>
          </motion.section>

        </div>
      </div>
    </div>
  );
};

export default AIFederalServicesPage;