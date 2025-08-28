"use client";
import React, { useState, useEffect } from 'react';
import { X, Settings, Cookie, Shield, Eye, Users } from 'lucide-react';

const ModernCookieConsent = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [showDetails, setShowDetails] = useState(false);
  const [animationPhase, setAnimationPhase] = useState('enter');

  useEffect(() => {
    // Simulate the cookie banner appearing after page load
    const timer = setTimeout(() => {
      setAnimationPhase('visible');
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleAcceptAll = () => {
    setAnimationPhase('exit');
    setTimeout(() => setIsVisible(false), 300);
  };

  const handleDeclineAll = () => {
    setAnimationPhase('exit');
    setTimeout(() => setIsVisible(false), 300);
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 pointer-events-none">
      {/* Cookie Consent Card */}
      <div 
        className={`
          relative max-w-sm w-80 pointer-events-auto
          bg-gradient-to-br from-gray-900/95 to-gray-800/95
          backdrop-blur-xl border border-gray-700/50
          rounded-2xl shadow-2xl overflow-hidden
          transform transition-all duration-700 ease-out
          ${animationPhase === 'enter' ? 'translate-x-full opacity-0 scale-95' : 
            animationPhase === 'visible' ? 'translate-x-0 opacity-100 scale-100' :
            'translate-x-full opacity-0 scale-95'}
        `}
      >
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-purple-500/30 rounded-full blur-2xl animate-pulse delay-1000" />
        </div>

        {/* Header */}
        <div className="relative p-5 pb-3">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-blue-500/20 rounded-lg">
                <Cookie className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <h3 className="text-md font-bold text-white">This website uses cookies</h3>
                <p className="text-xs text-gray-400 mt-0.5">We value your privacy</p>
              </div>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="p-1 hover:bg-gray-700/50 rounded-lg transition-colors"
            >
              <X className="w-4 h-4 text-gray-400" />
            </button>
          </div>

          <p className="text-gray-300 text-xs leading-relaxed">
            This website uses cookies to improve user experience. By using our website you 
            consent to all cookies in accordance with our Cookie Policy.
          </p>
        </div>

        {/* Details Section */}
        <div className={`
          relative overflow-hidden transition-all duration-500 ease-out
          ${showDetails ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
        `}>
          <div className="px-5 pb-3 space-y-2">
            <div className="grid gap-2">
              <div className="flex items-center gap-2 p-2 bg-gray-800/50 rounded-lg">
                <Shield className="w-4 h-4 text-green-400" />
                <div className="flex-1">
                  <p className="text-xs font-medium text-white">Essential Cookies</p>
                  <p className="text-xs text-gray-400">Required for basic functionality</p>
                </div>
                <div className="w-7 h-4 bg-green-500 rounded-full relative">
                  <div className="w-2.5 h-2.5 bg-white rounded-full absolute top-0.5 right-0.5" />
                </div>
              </div>

              <div className="flex items-center gap-2 p-2 bg-gray-800/50 rounded-lg">
                <Eye className="w-4 h-4 text-blue-400" />
                <div className="flex-1">
                  <p className="text-xs font-medium text-white">Analytics Cookies</p>
                  <p className="text-xs text-gray-400">Help us improve our services</p>
                </div>
                <div className="w-7 h-4 bg-gray-600 rounded-full relative cursor-pointer">
                  <div className="w-2.5 h-2.5 bg-white rounded-full absolute top-0.5 left-0.5 transition-transform" />
                </div>
              </div>

              <div className="flex items-center gap-2 p-2 bg-gray-800/50 rounded-lg">
                <Users className="w-4 h-4 text-purple-400" />
                <div className="flex-1">
                  <p className="text-xs font-medium text-white">Marketing Cookies</p>
                  <p className="text-xs text-gray-400">Personalized content and ads</p>
                </div>
                <div className="w-7 h-4 bg-gray-600 rounded-full relative cursor-pointer">
                  <div className="w-2.5 h-2.5 bg-white rounded-full absolute top-0.5 left-0.5 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="relative p-5 pt-2">
          <div className="flex flex-col gap-2">
            {/* Toggle Details Button */}
            <button
              onClick={toggleDetails}
              className="flex items-center justify-center gap-2 py-2 px-3 text-xs font-medium text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 rounded-lg transition-all duration-200"
            >
              <Settings className="w-3 h-3" />
              {showDetails ? 'Hide Details' : 'Show Details'}
            </button>

            {/* Main Action Buttons */}
            <div className="flex gap-2">
              <button
                onClick={handleDeclineAll}
                className="flex-1 py-2.5 px-3 text-xs font-semibold text-gray-300 hover:text-white bg-gray-700/50 hover:bg-gray-700 rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                Decline All
              </button>
              <button
                onClick={handleAcceptAll}
                className="flex-1 py-2.5 px-3 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>

        {/* Powered by text */}
        <div className="relative px-5 pb-3">
          <p className="text-xs text-gray-500 text-center">
            Powered by <span className="font-medium text-gray-400">CookieScript</span>
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-60" />
        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-sm" />
      </div>
    </div>
  );
};

export default ModernCookieConsent;