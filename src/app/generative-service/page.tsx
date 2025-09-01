'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ArrowLeft, Clock, User, Sparkles, Zap, Brain, Cpu, Eye, Rocket, ArrowRight, Download } from 'lucide-react';

const WhitepaperPage = () => {
  const [mounted, setMounted] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!mounted) return null;

  const applications = [
    {
      number: "01",
      title: "Content Creation",
      description: "Generative AI is transforming the creative industry by producing high-quality content, including articles, stories, marketing materials, and even social media posts. It enables brands to automate the creation of personalized content at scale, reducing time and costs.",
      icon: <Sparkles className="w-6 h-6" />,
      gradient: "from-pink-500 to-rose-500"
    },
    {
      number: "02", 
      title: "Design and Architecture",
      description: "Generative AI is used in design and architecture to create novel product designs, building layouts, and even urban planning. AI-generated designs can offer innovative solutions that human designers may not have considered, accelerating the design process while maintaining creativity.",
      icon: <Brain className="w-6 h-6" />,
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      number: "03",
      title: "Software Development & Automation", 
      description: "AI-generated code can streamline software development by automating repetitive coding tasks, debugging, and even proposing architectural solutions. Generative models can produce functional code snippets based on requirements, significantly reducing development time.",
      icon: <Cpu className="w-6 h-6" />,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      number: "04",
      title: "Healthcare & Drug Discovery",
      description: "In healthcare, generative AI is being used to design new drugs, create 3D models of proteins, and simulate complex biological processes. It accelerates the discovery of new therapies by generating viable candidates for further testing.",
      icon: <Zap className="w-6 h-6" />,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      number: "05",
      title: "Art, Music, and Media",
      description: "Generative AI is pushing the boundaries of art, music, and media creation. AI-generated artworks, music compositions, and video content are being used by creators to explore new artistic expressions. This technology opens up new opportunities for collaboration between humans and machines in the creative process.",
      icon: <Eye className="w-6 h-6" />,
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      number: "06",
      title: "Virtual Worlds and Game Development",
      description: "In game development and virtual reality (VR), generative AI is being used to create immersive virtual worlds, game levels, and characters. AI-generated content adds layers of complexity and realism to gaming environments, enhancing player experiences.",
      icon: <Rocket className="w-6 h-6" />,
      gradient: "from-red-500 to-pink-500"
    },
    {
      number: "07",
      title: "Synthetic Data Generation",
      description: "Generative AI can create synthetic data for training machine learning models, especially when real-world data is scarce, expensive, or poses privacy concerns. This helps organizations build more robust AI models while minimizing the risks associated with handling sensitive data.",
      icon: <Brain className="w-6 h-6" />,
      gradient: "from-teal-500 to-cyan-500"
    }
  ];

  const benefits = [
    {
      title: "Innovation at Scale",
      description: "Generative AI enables businesses to innovate faster by automating the creation of new ideas, designs, and solutions. It removes the limitations of human creativity by generating new possibilities that were previously unseen or unattainable.",
      icon: <Rocket className="w-8 h-8" />
    },
    {
      title: "Cost and Time Efficiency", 
      description: "Generative AI drastically reduces the time and costs associated with content creation, design, and development processes. Automation of these tasks enables teams to focus on higher-level strategic work, enhancing overall productivity.",
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "Enhanced Personalization",
      description: "In marketing, generative AI can create hyper-personalized content tailored to individual preferences, improving customer engagement and conversion rates. This personalization extends to product recommendations, targeted advertisements, and customer service interactions.",
      icon: <Eye className="w-8 h-8" />
    },
    {
      title: "Unlocking New Markets",
      description: "By using AI to generate products and services more efficiently, companies can tap into new markets and opportunities that were previously too expensive or time-consuming to explore.",
      icon: <Sparkles className="w-8 h-8" />
    }
  ];

  const challenges = [
    {
      title: "Ethical Concerns",
      description: "The ability of generative AI to create realistic content raises ethical concerns about deepfakes, misinformation, and the misuse of AI-generated media. Ensuring responsible AI use and building frameworks for ethical governance is essential to mitigate these risks."
    },
    {
      title: "Intellectual Property (IP) Issues",
      description: "The ownership of AI-generated content poses challenges for intellectual property rights. Establishing clear guidelines for who owns the outputs generated by AI models is crucial, especially in creative industries."
    },
    {
      title: "Data Quality and Bias",
      description: "Generative AI models are only as good as the data they are trained on. Poor-quality or biased data can result in flawed outputs. Addressing data bias and ensuring diversity in training datasets is necessary to improve the reliability of AI-generated results."
    },
    {
      title: "Integration and Infrastructure",
      description: "Implementing generative AI requires robust infrastructure, including computing power, data storage, and integration with existing workflows. Organizations must invest in the right technology stack and expertise to fully harness the potential of generative AI."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20"></div>
        
        {/* Floating Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full animate-float opacity-20 blur-sm`}
              style={{
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `linear-gradient(45deg, hsl(${Math.random() * 360}, 70%, 60%), hsl(${Math.random() * 360}, 70%, 80%))`,
                animationDuration: `${Math.random() * 10 + 8}s`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        {/* Mesh Gradient */}
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-cyan-500/10 animate-pulse"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="group flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-300">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <ArrowLeft className="w-4 h-4" />
              </div>
              <span className="font-medium">Back to Home</span>
            </Link>
            {/* <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              
            </div> */}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center space-y-12">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-500/30 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span className="text-sm font-medium bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Whitepapers
              </span>
            </div>
            
            {/* Main Title with Animation */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-8xl font-black leading-[0.9] tracking-tight">
                <span className="block bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                  Generative AI
                </span>
                <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                  Unlocking New
                </span>
                <span className="block bg-gradient-to-r from-pink-400 via-red-400 to-orange-400 bg-clip-text text-transparent">
                  Possibilities
                </span>
                <span className="block bg-gradient-to-r from-orange-400 via-yellow-400 to-green-400 bg-clip-text text-transparent">
                  for Innovation
                </span>
              </h1>
            </div>
            
            {/* Meta Info */}
            <div className="flex items-center justify-center gap-8 text-gray-400">
              <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <span className="font-medium">AIN Research</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm">
                <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full flex items-center justify-center">
                  <Clock className="w-4 h-4 text-white" />
                </div>
                <span className="font-medium">7 minutes read</span>
              </div>
            </div>

            {/* 3D Visual Element */}
            <div className="relative w-full h-80 flex items-center justify-center mt-16">
              <div className="relative">
                {/* Central AI Brain */}
                <div className="relative w-64 h-64 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full animate-spin opacity-30 blur-xl"></div>
                  <div className="absolute inset-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full animate-pulse opacity-50 blur-lg"></div>
                  <div className="absolute inset-8 bg-gradient-to-r from-white via-cyan-200 to-purple-200 rounded-full animate-bounce opacity-80"></div>
                  
                  {/* Neural Network Connections */}
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-ping"
                      style={{
                        top: `${50 + 40 * Math.cos(i * Math.PI / 4)}%`,
                        left: `${50 + 40 * Math.sin(i * Math.PI / 4)}%`,
                        animationDelay: `${i * 0.2}s`
                      }}
                    />
                  ))}
                </div>
                
                {/* Floating Data Particles */}
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-pulse"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 3}s`,
                      transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.05}px)`
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 pb-20">
          <div className="max-w-6xl mx-auto space-y-32">
            
            {/* Introduction */}
            <section className="relative">
              <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-2xl rounded-3xl p-12 border border-white/20">
                <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Introduction
                </h2>
                <p className="text-gray-300 leading-relaxed text-xl">
                  Generative AI is at the forefront of a technological revolution, enabling machines to create new content, 
                  designs, and solutions with minimal human input. From generating realistic images to producing human-like 
                  text and designing complex systems, generative AI is redefining innovation across industries. This white 
                  paper explores the concept of generative AI, its underlying technology, applications, potential benefits, 
                  and challenges, and how businesses can harness its transformative power to drive innovation and improve 
                  operational efficiency.
                </p>
              </div>
            </section>

            {/* Understanding Generative AI */}
            <section className="relative">
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-r from-pink-500/20 to-yellow-500/20 rounded-full blur-3xl animate-pulse"></div>
              <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
                Understanding Generative AI
              </h2>
              
              <div className="relative bg-gradient-to-br from-purple-900/30 to-cyan-900/30 rounded-3xl p-12 border border-purple-500/30 backdrop-blur-sm">
                <div className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl opacity-20 animate-spin"></div>
                
                <p className="text-gray-300 leading-relaxed text-xl mb-12">
                  Generative AI refers to a class of artificial intelligence models capable of generating new content 
                  based on the data they've been trained on. Unlike traditional AI models that are limited to identifying 
                  patterns or making predictions, generative AI can create original and meaningful outputs, such as text, 
                  images, music, and even entire software codebases.
                </p>
                
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="group bg-gradient-to-br from-blue-900/40 to-purple-900/40 rounded-2xl p-8 border border-blue-500/30 hover:border-blue-400/60 transition-all duration-500 hover:scale-105">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl mb-6 flex items-center justify-center">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-cyan-400 mb-4">Neural Networks and Deep Learning</h3>
                    <p className="text-gray-300 leading-relaxed">
                      An overview of the underlying technology that powers generative AI, including neural networks and 
                      deep learning techniques such as GANs, VAEs, and Transformer models like GPT.
                    </p>
                  </div>
                  
                  <div className="group bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-2xl p-8 border border-purple-500/30 hover:border-purple-400/60 transition-all duration-500 hover:scale-105">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl mb-6 flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-purple-400 mb-4">Generative Adversarial Networks</h3>
                    <p className="text-gray-300 leading-relaxed">
                      GANs involve two neural networks, a generator and a discriminator, that work together to produce 
                      realistic data outputs through dynamic competition.
                    </p>
                  </div>
                  
                  <div className="group bg-gradient-to-br from-cyan-900/40 to-green-900/40 rounded-2xl p-8 border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-500 hover:scale-105">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-green-400 rounded-xl mb-6 flex items-center justify-center">
                      <Cpu className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-cyan-400 mb-4">Transformer Models</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Transformers like GPT and BERT have revolutionized NLP by enabling AI to generate human-like text 
                      with exceptional context understanding.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Key Applications */}
            <section className="relative">
              <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Key Applications of Generative AI
              </h2>
              <div className="grid gap-8">
                {applications.map((app, index) => (
                  <div key={index} className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className={`relative flex gap-8 p-8 bg-gradient-to-br from-slate-800/60 to-slate-700/40 backdrop-blur-sm rounded-2xl border border-slate-600/30 hover:border-purple-500/50 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl`}>
                      <div className={`flex-shrink-0 w-20 h-20 bg-gradient-to-r ${app.gradient} rounded-2xl flex items-center justify-center font-bold text-2xl shadow-lg`}>
                        {app.number}
                      </div>
                      <div className="space-y-4 flex-1">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 bg-gradient-to-r ${app.gradient} rounded-xl flex items-center justify-center`}>
                            {app.icon}
                          </div>
                          <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                            {app.title}
                          </h3>
                        </div>
                        <p className="text-gray-300 leading-relaxed text-lg">
                          {app.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Benefits */}
            <section className="relative">
              <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-gradient-to-r from-green-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
              <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                Benefits of Generative AI
              </h2>
              <div className="grid lg:grid-cols-2 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative bg-gradient-to-br from-green-900/30 to-cyan-900/30 rounded-2xl p-8 border border-green-500/30 hover:border-green-400/60 transition-all duration-500 backdrop-blur-sm group-hover:scale-105">
                      <div className="flex items-start gap-6">
                        <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-cyan-400 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg animate-pulse">
                          {benefit.icon}
                        </div>
                        <div className="space-y-4">
                          <h3 className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors">
                            {benefit.title}
                          </h3>
                          <p className="text-gray-300 leading-relaxed">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Challenges */}
            <section className="relative">
              <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Challenges in Implementing Generative AI
              </h2>
              <div className="grid lg:grid-cols-2 gap-8">
                {challenges.map((challenge, index) => (
                  <div key={index} className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative bg-gradient-to-br from-red-900/20 to-orange-900/20 rounded-2xl p-8 border border-red-500/30 backdrop-blur-sm hover:border-red-400/60 transition-all duration-500 group-hover:scale-105">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-3 h-3 bg-gradient-to-r from-red-400 to-orange-400 rounded-full animate-pulse"></div>
                        <h3 className="text-xl font-bold text-red-400 group-hover:text-orange-400 transition-colors">
                          {challenge.title}
                        </h3>
                      </div>
                      <p className="text-gray-300 leading-relaxed ml-7">
                        {challenge.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Key Considerations */}
            <section className="relative">
              <div className="absolute -top-20 -left-20 w-60 h-60 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
              <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Key Considerations for Implementing Generative AI
              </h2>
              <div className="relative bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-3xl p-12 border border-purple-500/30 backdrop-blur-sm">
                <div className="absolute top-8 right-8 w-20 h-20 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-full animate-spin"></div>
                
                <div className="grid gap-8">
                  {[
                    "Implementing generative AI successfully requires teams with specialized knowledge in AI, machine learning, and data science.",
                    "Generative AI models are resource-intensive and require significant computational power. Cloud-based solutions such as AWS, Google Cloud, or Azure provide the scalability needed to support these models efficiently.",
                    "Building ethical AI governance frameworks that prioritize transparency, fairness, and accountability is essential. These frameworks should address concerns like data privacy, bias, and the responsible use of AI-generated content.",
                    "Generative AI should be seen as a collaborative tool that enhances human creativity rather than replacing it. Encouraging collaboration between AI and humans will drive better outcomes and foster innovative breakthroughs."
                  ].map((consideration, index) => (
                    <div key={index} className="group flex items-start gap-6 p-6 bg-gradient-to-r from-white/5 to-white/10 rounded-2xl border border-white/10 hover:border-purple-400/50 transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-cyan-400 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <div className="w-6 h-6 bg-white rounded-full"></div>
                      </div>
                      <p className="text-gray-300 leading-relaxed text-lg group-hover:text-white transition-colors duration-300">
                        {consideration}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <section className="relative">
              <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="relative bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-3xl p-12 border border-cyan-500/30 backdrop-blur-sm">
                <div className="text-center space-y-8">
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    The Future is Here
                  </h2>
                  <p className="text-gray-300 leading-relaxed text-xl max-w-4xl mx-auto">
                    Generative AI is transforming industries by pushing the boundaries of what's possible with machine learning. 
                    As the technology continues to evolve, businesses must be proactive in embracing this innovation while 
                    addressing the challenges that come with it. By leveraging generative AI responsibly and strategically, 
                    organizations can unlock new opportunities for growth, creativity, and operational efficiency in an 
                    increasingly competitive landscape.
                  </p>
                  
                  <div className="bg-gradient-to-r from-white/5 to-white/10 rounded-2xl p-8 backdrop-blur-sm border border-white/20 mt-12">
                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      Looking to scale your engineering efforts?
                    </h3>
                    <p className="text-gray-300 mb-8 text-lg">
                      We share common technology and strategies for building next-generation AI solutions that drive real business value.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <button className="group bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl flex items-center justify-center gap-3">
                        <Download className="w-5 h-5 group-hover:animate-bounce" />
                        Download Full Whitepaper
                      </button>
                      <Link href="/contact" passHref>
                      <button className="group bg-transparent border-2 border-purple-500 hover:bg-purple-500/20 text-purple-400 hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3">
                        Contact Our Team
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Additional Resources */}
            <section className="relative">
              <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Additional Resources
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="group bg-gradient-to-br from-yellow-900/30 to-orange-900/30 rounded-2xl p-8 border border-yellow-500/30 hover:border-yellow-400/60 transition-all duration-500 backdrop-blur-sm hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-xl mb-6 flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-yellow-400 mb-4">Research Papers</h3>
                  <p className="text-gray-300 mb-6">
                    Explore our latest research on generative AI models and their applications across various industries.
                  </p>
                  <button className="text-yellow-400 hover:text-yellow-300 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                    View Papers <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="group bg-gradient-to-br from-blue-900/30 to-cyan-900/30 rounded-2xl p-8 border border-blue-500/30 hover:border-blue-400/60 transition-all duration-500 backdrop-blur-sm hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-xl mb-6 flex items-center justify-center">
                    <Cpu className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-400 mb-4">Case Studies</h3>
                  <p className="text-gray-300 mb-6">
                    Discover how leading companies are implementing generative AI to solve complex business challenges.
                  </p>
                  <button className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                    Read Cases <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="group bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl p-8 border border-purple-500/30 hover:border-purple-400/60 transition-all duration-500 backdrop-blur-sm hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl mb-6 flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-purple-400 mb-4">Implementation Guide</h3>
                  <p className="text-gray-300 mb-6">
                    Step-by-step guidance for integrating generative AI into your existing technology stack and workflows.
                  </p>
                  <button className="text-purple-400 hover:text-purple-300 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                    Get Started <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(120deg); }
          66% { transform: translate(-20px, 20px) rotate(240deg); }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </div>
  );
};

export default WhitepaperPage;