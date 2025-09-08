'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, MapPin, Phone, Mail, Send, CheckCircle, Sparkles } from 'lucide-react';

export default function ModernContact() {
  const [form, setForm] = useState({
    full_name: '',
    email: '',
    type_of_service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  // Fix hydration: generate particles only on client
  type Particle = { left: number; top: number; delay: number; duration: number; size: number };
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 25 }).map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 3 + Math.random() * 4,
      size: 2 + Math.random() * 3,
    }));
    setParticles(generated);
    
    // Trigger animations after mount
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);

  //   // Simulate API call
  //   await new Promise(resolve => setTimeout(resolve, 2000));

  //   setIsSubmitting(false);
  //   setIsSubmitted(true);

  //   // Reset after 4 seconds
  //   setTimeout(() => {
  //     setIsSubmitted(false);
  //     setForm({
  //       full_name: '',
  //       email: '',
  //       type_of_service: '',
  //       message: '',
  //     });
  //   }, 4000);
  // };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    // send form data to API
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form), // sending your form state
    });

    if (!res.ok) throw new Error("Failed to send message");

    // success: show confirmation
    setIsSubmitted(true);
  } catch (error) {
    console.error("Error submitting form:", error);
    alert("Something went wrong. Please try again.");
  } finally {
    setIsSubmitting(false);

    // reset form after 4 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setForm({
        full_name: '',
        email: '',
        type_of_service: '',
        message: '',
      });
    }, 4000);
  }
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large floating orbs */}
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-pulse"></div>
        <div className="absolute top-1/4 -right-32 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/3 w-72 h-72 bg-gradient-to-r from-pink-400 to-red-500 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-pulse animation-delay-4000"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-20 animate-float"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 mt-24">
            <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
              <div className="flex items-center justify-center gap-3 mb-6">
                <Sparkles className="text-yellow-400 animate-pulse" size={32} />
                <h1 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                  Let's Connect
                </h1>
                <Sparkles className="text-yellow-400 animate-pulse animation-delay-1000" size={32} />
              </div>
              <p className="text-2xl text-gray-300 max-w-3xl mx-auto font-light">
                Ready to transform your vision into reality? Drop us a message and let's create something extraordinary together.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch px-4 ">
            {/* Contact Form - Slides in from left */}
            <div className={`lg:col-span-7 transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}`}>
              <div className="relative h-full">
                {/* Animated border */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-3xl blur-sm opacity-30 animate-pulse"></div>
                
                {/* Glass Card */}
                <div className="relative backdrop-blur-2xl bg-white/10 rounded-3xl p-10 shadow-2xl border border-white/20 overflow-hidden h-full">
                  {/* Card glow animation */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 rounded-3xl animate-gradient"></div>
                  
                  <div className="relative z-10 h-full flex flex-col">
                    {!isSubmitted ? (
                      <div className="flex-1">
                        <div className="mb-8">
                          <h2 className="text-3xl font-bold text-white mb-2">Send us a message</h2>
                          <p className="text-gray-300">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-8">
                          {/* Service Type */}
                          <div className="group">
                            <label className="block text-sm font-semibold text-gray-200 mb-3 transition-colors group-hover:text-white uppercase tracking-wide">
                              Service Type <span className="text-pink-400">*</span>
                            </label>
                            <div className="relative">
                              <select
                                name="type_of_service"
                                required
                                value={form.type_of_service}
                                onChange={handleChange}
                                onFocus={() => setFocusedField('service')}
                                onBlur={() => setFocusedField('')}
                                className={`w-full p-5 rounded-2xl bg-white/5 border-2 text-white placeholder-gray-400 transition-all duration-500 focus:outline-none backdrop-blur-sm text-lg ${
                                  focusedField === 'service' 
                                    ? 'border-cyan-400 bg-white/15 shadow-lg shadow-cyan-500/30 scale-105' 
                                    : 'border-white/20 hover:border-white/40 hover:bg-white/10'
                                }`}
                              >
                                <option value="" className="bg-slate-900">Choose your service</option>
                                <option value="Enterprise Services" className="bg-slate-900">Enterprise Services</option>
                                <option value="Solutions" className="bg-slate-900">Solutions</option>
                                <option value="Certifications" className="bg-slate-900">Certifications</option>
                                <option value="Federal Government" className="bg-slate-900">Federal Government</option>
                                <option value="Other" className="bg-slate-900">Other</option>
                              </select>
                              {focusedField === 'service' && (
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/20 to-purple-400/20 pointer-events-none animate-pulse"></div>
                              )}
                            </div>
                          </div>

                          {/* Name and Email Grid */}
                          <div className="grid md:grid-cols-2 gap-6">
                            {/* Full Name */}
                            <div className="group">
                              <label className="block text-sm font-semibold text-gray-200 mb-3 transition-colors group-hover:text-white uppercase tracking-wide">
                                Full Name <span className="text-pink-400">*</span>
                              </label>
                              <input
                                type="text"
                                name="full_name"
                                required
                                value={form.full_name}
                                onChange={handleChange}
                                onFocus={() => setFocusedField('name')}
                                onBlur={() => setFocusedField('')}
                                placeholder="Your full name"
                                className={`w-full p-5 rounded-2xl bg-white/5 border-2 text-white placeholder-gray-400 transition-all duration-500 focus:outline-none backdrop-blur-sm text-lg ${
                                  focusedField === 'name' 
                                    ? 'border-purple-400 bg-white/15 shadow-lg shadow-purple-500/30 scale-105' 
                                    : 'border-white/20 hover:border-white/40 hover:bg-white/10'
                                }`}
                              />
                            </div>

                            {/* Email */}
                            <div className="group">
                              <label className="block text-sm font-semibold text-gray-200 mb-3 transition-colors group-hover:text-white uppercase tracking-wide">
                                Email <span className="text-pink-400">*</span>
                              </label>
                              <input
                                type="email"
                                name="email"
                                required
                                value={form.email}
                                onChange={handleChange}
                                onFocus={() => setFocusedField('email')}
                                onBlur={() => setFocusedField('')}
                                placeholder="your.email@domain.com"
                                className={`w-full p-5 rounded-2xl bg-white/5 border-2 text-white placeholder-gray-400 transition-all duration-500 focus:outline-none backdrop-blur-sm text-lg ${
                                  focusedField === 'email' 
                                    ? 'border-pink-400 bg-white/15 shadow-lg shadow-pink-500/30 scale-105' 
                                    : 'border-white/20 hover:border-white/40 hover:bg-white/10'
                                }`}
                              />
                            </div>
                          </div>

                          {/* Message */}
                          <div className="group">
                            <label className="block text-sm font-semibold text-gray-200 mb-3 transition-colors group-hover:text-white uppercase tracking-wide">
                              Project Details
                            </label>
                            <textarea
                              name="message"
                              rows={5}
                              value={form.message}
                              onChange={handleChange}
                              onFocus={() => setFocusedField('message')}
                              onBlur={() => setFocusedField('')}
                              placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                              className={`w-full p-5 rounded-2xl bg-white/5 border-2 text-white placeholder-gray-400 transition-all duration-500 focus:outline-none backdrop-blur-sm resize-none text-lg ${
                                focusedField === 'message' 
                                  ? 'border-yellow-400 bg-white/15 shadow-lg shadow-yellow-500/30 scale-105' 
                                  : 'border-white/20 hover:border-white/40 hover:bg-white/10'
                              }`}
                            />
                          </div>

                          {/* Submit Button */}
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full relative overflow-hidden group rounded-2xl p-6 font-bold text-lg text-white transition-all duration-500 ${
                              isSubmitting 
                                ? 'bg-gray-600 cursor-not-allowed' 
                                : 'bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:from-cyan-600 hover:via-purple-600 hover:to-pink-600 hover:shadow-2xl hover:shadow-purple-500/40 hover:-translate-y-2 hover:scale-105'
                            }`}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                            <div className="relative flex items-center justify-center gap-3">
                              {isSubmitting ? (
                                <>
                                  <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                                  <span className="animate-pulse">Sending your message...</span>
                                </>
                              ) : (
                                <>
                                  <Send size={24} className="group-hover:rotate-12 group-hover:scale-110 transition-transform duration-500" />
                                  <span>Send Message</span>
                                  <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform duration-500" />
                                </>
                              )}
                            </div>
                          </button>
                        </form>
                      </div>
                    ) : (
                      /* Success State */
                      <div className="flex-1 flex items-center justify-center">
                        <div className="text-center animate-fade-in">
                          <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce shadow-lg shadow-green-500/40">
                            <CheckCircle size={48} className="text-white" />
                          </div>
                          <h3 className="text-4xl font-bold text-white mb-4">Message Delivered!</h3>
                          <p className="text-xl text-gray-300 mb-6">
                            Thanks for reaching out! We'll get back to you within 24 hours.
                          </p>
                          <div className="flex items-center justify-center gap-2 text-gray-400">
                            <Sparkles size={16} className="animate-pulse" />
                            <span className="text-sm">Expect something amazing</span>
                            <Sparkles size={16} className="animate-pulse animation-delay-1000" />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info - Slides in from right */}
            <div className={`lg:col-span-5 transition-all duration-1000 ease-out delay-500 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}>
              <div className="space-y-8">
                {/* Contact Info Header */}
                <div className="text-center lg:text-left mb-8">
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent mb-3">
                    Connect With Us
                  </h2>
                  <p className="text-gray-300 text-lg">Multiple ways to reach our team</p>
                </div>

                {/* Contact Info Cards */}
                <div className="space-y-6">
                  {/* Address Card */}
                  <div className={`backdrop-blur-xl bg-white/10 rounded-2xl p-8 border border-white/20 group hover:bg-white/15 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl delay-600 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500 shadow-lg shadow-cyan-500/30">
                        <MapPin size={24} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">Visit Our Office</h3>
                        <p className="text-gray-300 text-lg">30 Summer St, Hagerstown, MD 21740, USA</p>
                        <p className="text-gray-400 text-sm mt-2">📍 Open Monday - Friday, 9AM - 6PM</p>
                      </div>
                    </div>
                  </div>

                  {/* Phone Card */}
                  <div className={`backdrop-blur-xl bg-white/10 rounded-2xl p-8 border border-white/20 group hover:bg-white/15 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl delay-700 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500 shadow-lg shadow-purple-500/30">
                        <Phone size={24} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                        <p className="text-gray-300 text-lg">+1 (555) 123-4567</p>
                        <p className="text-gray-400 text-sm mt-2">📞 Available 24/7 for support</p>
                      </div>
                    </div>
                  </div>

                  {/* Email Card */}
                  <div className={`backdrop-blur-xl bg-white/10 rounded-2xl p-8 border border-white/20 group hover:bg-white/15 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl delay-800 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500 shadow-lg shadow-pink-500/30">
                        <Mail size={24} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                        <p className="text-gray-300 text-lg">helpdesk@earthconntravels.com</p>
                        <p className="text-gray-400 text-sm mt-2">✉️ We respond within 2 hours</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map Section */}
                <div className={`transition-all duration-1000 ease-out delay-900 ${isLoaded ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-12 scale-95'}`}>
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-white mb-2">Find Us Here</h3>
                    <p className="text-gray-300">Located in the heart of Hagerstown</p>
                  </div>
                  
                  <div className="backdrop-blur-xl bg-white/10 rounded-2xl overflow-hidden border border-white/20 group hover:shadow-2xl transition-all duration-500 hover:scale-105 relative">
                    {/* Map overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 z-10 pointer-events-none group-hover:from-cyan-500/20 group-hover:to-purple-500/20 transition-all duration-500"></div>
                    
                    {/* Animated corner elements */}
                    <div className="absolute top-4 left-4 w-3 h-3 bg-cyan-400 rounded-full animate-pulse z-20"></div>
                    <div className="absolute top-4 right-4 w-3 h-3 bg-purple-400 rounded-full animate-pulse animation-delay-1000 z-20"></div>
                    <div className="absolute bottom-4 left-4 w-3 h-3 bg-pink-400 rounded-full animate-pulse animation-delay-2000 z-20"></div>
                    <div className="absolute bottom-4 right-4 w-3 h-3 bg-yellow-400 rounded-full animate-pulse animation-delay-4000 z-20"></div>
                    
                    <div className="aspect-video relative">
                      <iframe
                        className="w-full h-full transition-all duration-500 group-hover:scale-105"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3072.16342316556!2d-77.73743122513844!3d39.64603650218744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c9ed5ac0b9c957%3A0x1fdec20a030709e8!2s30%20Summer%20St%2C%20Hagerstown%2C%20MD%2021740%2C%20USA!5e0!3m2!1sen!2sin!4v1747666391814!5m2!1sen!2sin"
                        loading="lazy"
                        allowFullScreen
                        title="Our Location - 30 Summer St, Hagerstown"
                        style={{ filter: 'grayscale(20%) contrast(130%) brightness(110%) saturate(110%)' }}
                      />
                    </div>
                    
                    {/* Map label overlay */}
                    <div className="absolute bottom-6 left-6 backdrop-blur-sm bg-black/30 rounded-lg p-3 z-20">
                      <p className="text-white text-sm font-semibold">📍 Our Headquarters</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.2; }
          33% { transform: translateY(-15px) rotate(120deg); opacity: 0.4; }
          66% { transform: translateY(5px) rotate(240deg); opacity: 0.1; }
        }

        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(30px) scale(0.9); }
          100% { opacity: 1; transform: translateY(0px) scale(1); }
        }

        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .animate-float {
          animation: float ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-gradient {
          animation: gradient 8s ease infinite;
          background-size: 200% 200%;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
        }

        .border-3 {
          border-width: 3px;
        }

        /* Scrollbar styling */
        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(45deg, #06b6d4, #8b5cf6, #ec4899);
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(45deg, #0891b2, #7c3aed, #db2777);
        }
      `}</style>
    </div>
  );
}