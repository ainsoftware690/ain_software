'use client';

import React, { useState, useEffect, useCallback } from 'react';
import testimonials from '../../utils/Images';
import { ChevronLeft, ChevronRight, Star, Quote, Play, Pause, Filter, Search, Download, Share2, Heart, Eye, TrendingUp } from 'lucide-react';


const categories = ["All", ...Array.from(new Set(testimonials.map(t => t.category)))];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [liked, setLiked] = useState<number[]>([]);
  const [viewed, setViewed] = useState<number[]>([]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Filtered testimonials
  const filteredTestimonials = testimonials.filter(testimonial => {
    const matchesCategory = selectedCategory === "All" || testimonial.category === selectedCategory;
    const matchesSearch = testimonial.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         testimonial.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         testimonial.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  useEffect(() => {
    setMounted(true);
    setViewed(prev => [...prev, testimonials[0].id]);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying || filteredTestimonials.length === 0) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => {
          const newIndex = (prev + 1) % filteredTestimonials.length;
          const testimonialId = filteredTestimonials[newIndex].id;
          setViewed(prevViewed => [...new Set([...prevViewed, testimonialId])]);
          return newIndex;
        });
        setIsTransitioning(false);
      }, 150);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, filteredTestimonials]);

  const nextTestimonial = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => {
        const newIndex = (prev + 1) % filteredTestimonials.length;
        const testimonialId = filteredTestimonials[newIndex].id;
        setViewed(prevViewed => [...new Set([...prevViewed, testimonialId])]);
        return newIndex;
      });
      setIsTransitioning(false);
    }, 150);
    setIsAutoPlaying(false);
  }, [filteredTestimonials]);

  const prevTestimonial = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => {
        const newIndex = (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length;
        const testimonialId = filteredTestimonials[newIndex].id;
        setViewed(prevViewed => [...new Set([...prevViewed, testimonialId])]);
        return newIndex;
      });
      setIsTransitioning(false);
    }, 150);
    setIsAutoPlaying(false);
  }, [filteredTestimonials]);

  const goToTestimonial = useCallback((index: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      const testimonialId = filteredTestimonials[index].id;
      setViewed(prevViewed => [...new Set([...prevViewed, testimonialId])]);
      setIsTransitioning(false);
    }, 150);
    setIsAutoPlaying(false);
  }, [filteredTestimonials]);

  const toggleLike = (testimonialId: number) => {
    setLiked(prev => 
      prev.includes(testimonialId) 
        ? prev.filter(id => id !== testimonialId)
        : [...prev, testimonialId]
    );
  };

  const resetFilters = () => {
    setSelectedCategory("All");
    setSearchTerm("");
    setCurrentIndex(0);
  };

  const currentTestimonial = filteredTestimonials[currentIndex];

  if (!mounted) {
    return <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />;
  }

  if (filteredTestimonials.length === 0) {
    return (
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h3 className="text-2xl text-white mb-4">No testimonials found</h3>
          <button 
            onClick={resetFilters}
            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white hover:shadow-lg transition-all duration-300"
          >
            Reset Filters
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-2xl animate-spin" style={{animationDuration: '20s'}}></div>
        
        {/* Moving gradient orbs */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full blur-xl animate-bounce" style={{animationDuration: '3s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-full blur-lg animate-pulse delay-500"></div>
      </div>

      {/* Dynamic Floating Elements */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => {
          const seed = i * 137.508;
          const left = (seed % 100);
          const top = ((seed * 2.7) % 100);
          const size = 1 + (seed % 3);
          const delay = (seed % 5);
          const duration = (3 + (seed % 4));
          
          return (
            <div
              key={i}
              className={`absolute bg-white/30 rounded-full animate-ping`}
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${left}%`,
                top: `${top}%`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`
              }}
            />
          );
        })}
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Enhanced Header with Controls */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/30 to-purple-500/30 border border-cyan-500/40 mb-6 backdrop-blur-sm">
            <TrendingUp className="w-4 h-4 text-cyan-300 animate-pulse" />
            <span className="text-cyan-300 text-sm font-medium tracking-wide uppercase">
              Success Stories 
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-cyan-100 to-purple-200 bg-clip-text text-transparent mb-6 animate-pulse">
            Trusted by Industry Leaders
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            We are dedicated to form meaningful and trusted partnerships with innovative 
            organizations and technology vendors for ensuring the success of client missions.
          </p>

          {/* Interactive Controls */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-4xl mx-auto mb-8">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search testimonials..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 transition-all duration-300"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg scale-105'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Playback Control */}
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="flex items-center gap-2 px-4 py-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-cyan-500/50"
            >
              {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              {isAutoPlaying ? 'Pause' : 'Play'}
            </button>
          </div>
        </div>

        {/* Enhanced Testimonial Card with Metrics */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className={`relative transition-all duration-300 ${isTransitioning ? 'scale-95 opacity-70' : 'scale-100 opacity-100'}`}>
            {/* Main Card */}
            <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl border border-white/30 rounded-3xl p-8 md:p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:border-cyan-500/50 group">
              {/* Animated Quote Icon */}
              <div className="absolute -top-6 left-8">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Quote className="w-6 h-6 text-white animate-pulse" />
                </div>
              </div>

              {/* Interactive Actions */}
              <div className="absolute -top-6 right-8 flex gap-2">
                <button
                  onClick={() => toggleLike(currentTestimonial.id)}
                  className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
                    liked.includes(currentTestimonial.id)
                      ? 'bg-red-500 text-white scale-110'
                      : 'bg-white/10 text-gray-400 hover:bg-white/20 hover:text-red-400'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${liked.includes(currentTestimonial.id) ? 'fill-current' : ''}`} />
                </button>
                <button className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center shadow-lg text-gray-400 hover:text-cyan-400 transition-all duration-300">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Content Section */}
                <div className="md:col-span-2">
                  {/* Category Badge with Animation */}
                  <div className="mb-6">
                    <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/40 to-purple-500/40 text-cyan-200 text-sm font-semibold border border-cyan-500/50 animate-pulse">
                      {currentTestimonial.category}
                    </span>
                  </div>

                  {/* Enhanced Content */}
                  <blockquote className="text-lg md:text-xl text-white/90 leading-relaxed mb-6 font-light">
                    "{currentTestimonial.content}"
                  </blockquote>

                  {/* Animated Rating */}
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-5 h-5 text-yellow-400 fill-current animate-pulse" 
                        style={{animationDelay: `${i * 0.1}s`}}
                      />
                    ))}
                    <span className="ml-2 text-gray-300">({currentTestimonial.rating}.0)</span>
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center text-white font-bold">
                      {currentTestimonial.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1">
                        {currentTestimonial.author}
                      </h4>
                      <p className="text-cyan-300 font-medium">
                        {currentTestimonial.position}
                        {currentTestimonial.company && (
                          <span className="text-gray-400"> • {currentTestimonial.company}</span>
                        )}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Metrics Dashboard */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-cyan-400" />
                    Impact Metrics
                  </h4>
                  
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl p-4 border border-green-500/30">
                      <div className="text-2xl font-bold text-green-400 mb-1">
                        {currentTestimonial.metrics?.improvement}
                      </div>
                      <div className="text-sm text-gray-300">Performance Boost</div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl p-4 border border-blue-500/30">
                      <div className="text-2xl font-bold text-blue-400 mb-1">
                        {currentTestimonial.metrics?.timeframe}
                      </div>
                      <div className="text-sm text-gray-300">Implementation Time</div>
                    </div>

                    <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-4 border border-purple-500/30">
                      <div className="text-2xl font-bold text-purple-400 mb-1">
                        {currentTestimonial.metrics?.satisfaction}%
                      </div>
                      <div className="text-sm text-gray-300">Client Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Navigation */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Eye className="w-4 h-4" />
                  {viewed.includes(currentTestimonial.id) ? 'Viewed' : 'New'}
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-400">
                    {currentIndex + 1} of {filteredTestimonials.length}
                  </span>
                  <button
                    onClick={prevTestimonial}
                    className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-cyan-500/40 flex items-center justify-center transition-all duration-300 backdrop-blur-sm group hover:scale-105"
                  >
                    <ChevronLeft className="w-5 h-5 text-white group-hover:text-cyan-300 transition-colors" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-cyan-500/40 flex items-center justify-center transition-all duration-300 backdrop-blur-sm group hover:scale-105"
                  >
                    <ChevronRight className="w-5 h-5 text-white group-hover:text-cyan-300 transition-colors" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Progress Indicators */}
        <div className="flex justify-center items-center gap-2 mb-12">
          {filteredTestimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => goToTestimonial(index)}
              className={`relative transition-all duration-300 group ${
                index === currentIndex
                  ? 'w-12 h-3'
                  : 'w-3 h-3'
              }`}
            >
              <div className={`w-full h-full rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-gradient-to-r from-cyan-400 to-purple-500 shadow-lg'
                  : viewed.includes(testimonial.id)
                    ? 'bg-white/50 hover:bg-white/70'
                    : 'bg-white/30 hover:bg-white/50'
              }`} />
              {liked.includes(testimonial.id) && (
                <Heart className="absolute -top-2 -right-2 w-3 h-3 text-red-400 fill-current animate-bounce" />
              )}
            </button>
          ))}
        </div>

        {/* Enhanced Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: '200+', label: 'Projects Delivered', icon: '🚀', gradient: 'from-blue-500 to-cyan-500' },
            { number: '50+', label: 'Happy Clients', icon: '😊', gradient: 'from-green-500 to-emerald-500' },
            { number: '99%', label: 'Success Rate', icon: '⭐', gradient: 'from-yellow-500 to-orange-500' },
            { number: '24/7', label: 'Support Available', icon: '🛟', gradient: 'from-purple-500 to-pink-500' }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-cyan-500/40 transition-all duration-300 hover:bg-white/15 hover:scale-105 hover:shadow-xl group-hover:animate-pulse`}>
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;