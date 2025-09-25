'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChatbotProps, Message, predefinedResponses, quickReplies } from '@/utils/Images';
import { MessageCircle, X, Send, User, Bot, Minimize2, Maximize2, Settings, Download, Trash2, Mic, MicOff, Volume2, VolumeX, Copy, ThumbsUp, ThumbsDown, Sparkles, Zap, Brain, Clock, Star, Check } from 'lucide-react';


const Chatbot: React.FC<ChatbotProps> = ({ position = 'bottom-right' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm your AI assistant. I'm here to help you learn about our services and answer any questions you might have. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [fontSize, setFontSize] = useState<'small' | 'medium' | 'large'>('medium');
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  const getRandomResponse = (category: string): string => {
    const responses = predefinedResponses[category as keyof typeof predefinedResponses];
    if (responses) {
      return responses[Math.floor(Math.random() * responses.length)];
    }
    return "I'd be happy to help! Could you tell me more about what you're looking for?";
  };

  const analyzeMessage = (message: string): string => {
    const lowerMessage = message.toLowerCase();
    
    // Greetings
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey') || 
        lowerMessage.includes('good morning') || lowerMessage.includes('good afternoon')) {
      return getRandomResponse('greeting');
    }
    
    // Services & Work
    if (lowerMessage.includes('service') || lowerMessage.includes('what do you do') || 
        lowerMessage.includes('offerings') || lowerMessage.includes('work') || 
        lowerMessage.includes('development') || lowerMessage.includes('build')) {
      return getRandomResponse('services');
    }
    
    // Portfolio & Projects
    if (lowerMessage.includes('portfolio') || lowerMessage.includes('projects') || 
        lowerMessage.includes('examples') || lowerMessage.includes('case studies') || 
        lowerMessage.includes('previous work') || lowerMessage.includes('experience')) {
      return getRandomResponse('portfolio');
    }
    
    // Technologies
    if (lowerMessage.includes('technology') || lowerMessage.includes('tech stack') || 
        lowerMessage.includes('programming') || lowerMessage.includes('languages') ||
        lowerMessage.includes('framework') || lowerMessage.includes('tools')) {
      return getRandomResponse('technologies');
    }
    
    // Team
    if (lowerMessage.includes('team') || lowerMessage.includes('developers') || 
        lowerMessage.includes('who are you') || lowerMessage.includes('staff') ||
        lowerMessage.includes('expertise') || lowerMessage.includes('skills')) {
      return getRandomResponse('team');
    }
    
    // About & Company
    if (lowerMessage.includes('about') || lowerMessage.includes('company') || 
        lowerMessage.includes('business') || lowerMessage.includes('history') ||
        lowerMessage.includes('background')) {
      return getRandomResponse('about');
    }
    
    // Contact Information
    if (lowerMessage.includes('contact') || lowerMessage.includes('reach') || 
        lowerMessage.includes('phone') || lowerMessage.includes('email') || 
        lowerMessage.includes('address') || lowerMessage.includes('location')) {
      return getRandomResponse('contact');
    }
    
    // Pricing & Cost
    if (lowerMessage.includes('price') || lowerMessage.includes('cost') || 
        lowerMessage.includes('quote') || lowerMessage.includes('budget') || 
        lowerMessage.includes('rate') || lowerMessage.includes('fee')) {
      return getRandomResponse('pricing');
    }
    
    // Security
    if (lowerMessage.includes('security') || lowerMessage.includes('secure') || 
        lowerMessage.includes('compliance') || lowerMessage.includes('privacy') ||
        lowerMessage.includes('protection') || lowerMessage.includes('safe')) {
      return getRandomResponse('security');
    }
    
    // Process & How we work
    if (lowerMessage.includes('process') || lowerMessage.includes('how do you work') || 
        lowerMessage.includes('methodology') || lowerMessage.includes('approach') ||
        lowerMessage.includes('timeline') || lowerMessage.includes('steps')) {
      return getRandomResponse('process');
    }
    
    // Support & Maintenance
    if (lowerMessage.includes('support') || lowerMessage.includes('maintenance') || 
        lowerMessage.includes('help') || lowerMessage.includes('assistance') ||
        lowerMessage.includes('after launch') || lowerMessage.includes('post launch')) {
      return getRandomResponse('support');
    }
    
    // Demo & Meeting
    if (lowerMessage.includes('demo') || lowerMessage.includes('meeting') || 
        lowerMessage.includes('consultation') || lowerMessage.includes('call') ||
        lowerMessage.includes('discuss') || lowerMessage.includes('schedule')) {
      return "I'd love to help you schedule a consultation! We offer:\n• Free 30-minute discovery calls\n• Technical deep-dive sessions\n• Live project demos\n• Requirement gathering meetings\n\nWhen would be a good time for you? I can connect you with our team right away!";
    }
    
    // Web Development specific
    if (lowerMessage.includes('website') || lowerMessage.includes('web app') || 
        lowerMessage.includes('web development') || lowerMessage.includes('frontend') ||
        lowerMessage.includes('backend')) {
      return "We specialize in modern web development! Our services include:\n• Responsive websites with custom design\n• Progressive web applications (PWA)\n• E-commerce platforms\n• Content management systems\n• API development & integration\n• Performance optimization\n\nUsing technologies like React, Node.js, Python, and cloud hosting. What type of web solution do you need?";
    }
    
    // Mobile Development
    if (lowerMessage.includes('mobile') || lowerMessage.includes('app') || 
        lowerMessage.includes('ios') || lowerMessage.includes('android')) {
      return "We create amazing mobile experiences! Our mobile services:\n• Native iOS & Android apps\n• Cross-platform development (React Native/Flutter)\n• App Store optimization & deployment\n• Push notifications & real-time features\n• Offline functionality\n• App maintenance & updates\n\nWe've launched 50+ apps with 4.8+ star ratings. What's your mobile app idea?";
    }
    
    // E-commerce
    if (lowerMessage.includes('ecommerce') || lowerMessage.includes('e-commerce') || 
        lowerMessage.includes('online store') || lowerMessage.includes('shop')) {
      return "We build powerful e-commerce solutions! Features include:\n• Custom shopping cart & checkout\n• Payment gateway integration (Stripe, PayPal)\n• Inventory management\n• Order tracking & notifications\n• Admin dashboard\n• Mobile-responsive design\n• SEO optimization\n\nWould you like to discuss your online store requirements?";
    }
    
    // AI/ML
    if (lowerMessage.includes('ai') || lowerMessage.includes('artificial intelligence') || 
        lowerMessage.includes('machine learning') || lowerMessage.includes('chatbot')) {
      return "We're at the forefront of AI technology! Our AI services:\n• Custom chatbots & virtual assistants\n• Machine learning model development\n• Natural language processing\n• Computer vision applications\n• Predictive analytics\n• AI integration into existing systems\n\nLike this chatbot you're talking to! What AI solution interests you?";
    }
    
    // Generic helpful response for unmatched queries
    return "That's a great question! I'd be happy to help you with that. Our expertise covers:\n\n🔧 Custom Software Development\n📱 Mobile & Web Applications\n☁️ Cloud Solutions\n🤖 AI/ML Integration\n🛡️ Cybersecurity\n\nCould you tell me more about your specific project or challenge? I can provide detailed information and connect you with our specialists!";
  };

  const sendMessage = useCallback(async (messageText?: string) => {
    const text = messageText || inputMessage.trim();
    if (!text) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: text,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: analyzeMessage(text),
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);

      // Text-to-speech for bot responses (if not muted)
      if (!isMuted && 'speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(botResponse.content);
        utterance.rate = 0.8;
        utterance.pitch = 1.1;
        speechSynthesis.speak(utterance);
      }
    }, 1000 + Math.random() * 1500);
  }, [inputMessage, isMuted]);

  const handleQuickReply = (key: string) => {
    const response = getRandomResponse(key);
    const botMessage: Message = {
      id: Date.now().toString(),
      content: response,
      sender: 'bot',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, botMessage]);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const toggleVoiceInput = () => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      alert('Speech recognition not supported in this browser');
      return;
    }

    if (isListening) {
      setIsListening(false);
      return;
    }

    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';
    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);
    
    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setInputMessage(transcript);
    };

    recognition.start();
  };

  const copyMessage = (messageId: string, content: string) => {
    navigator.clipboard.writeText(content).then(() => {
      setMessages(prev => prev.map(msg => 
        msg.id === messageId ? { ...msg, copied: true } : msg
      ));
      
      // Reset copied state after 2 seconds
      setTimeout(() => {
        setMessages(prev => prev.map(msg => 
          msg.id === messageId ? { ...msg, copied: false } : msg
        ));
      }, 2000);
    });
  };

  const rateMessage = (messageId: string, type: 'like' | 'dislike') => {
    setMessages(prev => prev.map(msg => 
      msg.id === messageId 
        ? { ...msg, liked: type === 'like' ? true : false, disliked: type === 'dislike' ? true : false }
        : msg
    ));
  };

  const clearChat = () => {
    setMessages([{
      id: '1',
      content: "Chat cleared! How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }]);
  };

  const exportChat = () => {
    const chatData = messages.map(msg => 
      `[${msg.timestamp.toLocaleTimeString()}] ${msg.sender.toUpperCase()}: ${msg.content}`
    ).join('\n');
    
    const blob = new Blob([chatData], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `chat-export-${new Date().toISOString().slice(0, 10)}.txt`;
    a.click();
  };
 
  const positionClasses = {
    'bottom-right': 'bottom-4 right-4', 
    'bottom-left': 'bottom-4 left-4',
    'center': 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
  };

  return (
    <div className={`fixed ${positionClasses[position]} z-50 font-sans`}>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-110 animate-pulse"
        >
          <MessageCircle className="w-8 h-8 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          
          {/* Notification Badge */}
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-bounce">
            <Sparkles className="w-3 h-3" />
          </div>
          
          {/* Ripple Effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 animate-ping opacity-20"></div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className={`bg-gradient-to-br ${theme === 'dark' ? 'from-slate-900/95 to-purple-900/95' : 'from-white/95 to-gray-100/95'} backdrop-blur-xl border ${theme === 'dark' ? 'border-white/20' : 'border-gray-300'} rounded-3xl shadow-2xl transition-all duration-500 ${isMinimized ? 'h-16 w-80' : 'h-[600px] w-96'} max-h-[80vh] overflow-visible flex flex-col`}>
          
          {/* Header */}
          <div className={`flex items-center ustify-between p-4 ${theme === 'dark' ? 'bg-gradient-to-r from-cyan-600/20 to-purple-600/20' : 'bg-gradient-to-r from-cyan-100 to-purple-100'} backdrop-blur-sm border-b ${theme === 'dark' ? 'border-white/10' : 'border-gray-200'}`}>
            <div className="flex items-center gap-5 pr-4">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
              </div>
              <div>
                <h3 className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>AI Assistant</h3>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className={`text-xs ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    {isTyping ? 'Typing...' : 'Online'}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-2 ">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className={`p-2 rounded-full ${theme === 'dark' ? 'hover:bg-white/10' : 'hover:bg-gray-200'} transition-colors`}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
              
              <button
                onClick={() => setShowSettings(!showSettings)}
                className={`p-2 rounded-full ${theme === 'dark' ? 'hover:bg-white/10' : 'hover:bg-gray-200'} transition-colors`}
              >
                <Settings className="w-4 h-4" />
              </button>
              
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className={`p-2 rounded-full ${theme === 'dark' ? 'hover:bg-white/10' : 'hover:bg-gray-200'} transition-colors`}
              >
                {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
              </button>
              
              <button
                onClick={() => setIsOpen(false)}
                className={`p-2 rounded-full ${theme === 'dark' ? 'hover:bg-white/10 text-gray-300 hover:text-white' : 'hover:bg-gray-200 text-gray-600 hover:text-gray-800'} transition-colors`}
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Settings Panel */}
              {showSettings && (
                <div className={`p-4 ${theme === 'dark' ? 'bg-black/20' : 'bg-gray-50'} border-b ${theme === 'dark' ? 'border-white/10' : 'border-gray-200'}`}>
                  <div className="space-y-3">
                    <div>
                      <label className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Theme</label>
                      <div className="flex gap-2 mt-1">
                        <button
                          onClick={() => setTheme('dark')}
                          className={`px-3 py-1 rounded-full text-xs ${theme === 'dark' ? 'bg-cyan-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                        >
                          Dark
                        </button>
                        <button
                          onClick={() => setTheme('light')}
                          className={`px-3 py-1 rounded-full text-xs ${theme === 'light' ? 'bg-cyan-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                        >
                          Light
                        </button>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <button onClick={clearChat} className="flex items-center gap-1 px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-xs hover:bg-red-500/30 transition-colors">
                        <Trash2 className="w-3 h-3" />
                        Clear
                      </button>
                      <button onClick={exportChat} className="flex items-center gap-1 px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs hover:bg-blue-500/30 transition-colors">
                        <Download className="w-3 h-3" />
                        Export
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Messages Area */}
              <div 
                ref={chatContainerRef}
                className={`flex-1 overflow-y-auto p-4 space-y-4 ${showSettings ? 'h-64' : 'h-80'}`}
                style={{ scrollbarWidth: 'thin' }}
              >
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fadeIn`}
                  >
                    <div className={`max-w-[80%] ${message.sender === 'user' ? 'order-2' : 'order-1'}`}>
                      <div className={`flex items-start gap-2 ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                        {/* Avatar */}
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          message.sender === 'user' 
                            ? 'bg-gradient-to-br from-green-500 to-teal-600' 
                            : 'bg-gradient-to-br from-cyan-500 to-purple-600'
                        }`}>
                          {message.sender === 'user' ? 
                            <User className="w-4 h-4 text-white" /> : 
                            <Bot className="w-4 h-4 text-white" />
                          }
                        </div>
                        
                        {/* Message Bubble */}
                        <div className={`relative px-4 py-3 rounded-2xl ${
                          message.sender === 'user'
                            ? `bg-gradient-to-br from-cyan-500 to-purple-600 text-white ${message.sender === 'user' ? 'rounded-tr-md' : ''}`
                            : `${theme === 'dark' ? 'bg-white/10 text-white' : 'bg-gray-100 text-gray-800'} ${message.sender === 'bot' ? 'rounded-tl-md' : ''}`
                        } backdrop-blur-sm border ${theme === 'dark' ? 'border-white/10' : 'border-gray-200'}`}>
                          <p className={`${fontSize === 'small' ? 'text-sm' : fontSize === 'large' ? 'text-base' : 'text-sm'} leading-relaxed whitespace-pre-line`}>
                            {message.content}
                          </p>
                          
                          {message.sender === 'bot' && (
                            <div className="flex items-center gap-2 mt-2 pt-2 border-t border-white/20">
                              <button
                                onClick={() => copyMessage(message.id, message.content)}
                                className={`p-1.5 rounded-md transition-all duration-200 ${
                                  message.copied 
                                    ? 'bg-green-500/20 text-green-400' 
                                    : `${theme === 'dark' ? 'hover:bg-white/10 text-gray-300 hover:text-white' : 'hover:bg-gray-200 text-gray-500 hover:text-gray-700'}`
                                } flex items-center gap-1`}
                                title={message.copied ? "Copied!" : "Copy message"}
                              >
                                {message.copied ? (
                                  <>
                                    <Check className="w-3 h-3" />
                                    <span className="text-xs">Copied</span>
                                  </>
                                ) : (
                                  <>
                                    <Copy className="w-3 h-3" />
                                    <span className="text-xs">Copy</span>
                                  </>
                                )}
                              </button>
                              
                              <button
                                onClick={() => rateMessage(message.id, 'like')}
                                className={`p-1.5 rounded-md transition-all duration-200 ${
                                  message.liked 
                                    ? 'bg-green-500/20 text-green-400' 
                                    : `${theme === 'dark' ? 'hover:bg-white/10 text-gray-300 hover:text-white' : 'hover:bg-gray-200 text-gray-500 hover:text-gray-700'}`
                                }`}
                                title="Like this response"
                              >
                                <ThumbsUp className="w-3 h-3" />
                              </button>
                              
                              <button
                                onClick={() => rateMessage(message.id, 'dislike')}
                                className={`p-1.5 rounded-md transition-all duration-200 ${
                                  message.disliked 
                                    ? 'bg-red-500/20 text-red-400' 
                                    : `${theme === 'dark' ? 'hover:bg-white/10 text-gray-300 hover:text-white' : 'hover:bg-gray-200 text-gray-500 hover:text-gray-700'}`
                                }`}
                                title="Dislike this response"
                              >
                                <ThumbsDown className="w-3 h-3" />
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      {/* Timestamp */}
                      <div className={`flex items-center gap-1 mt-1 px-2 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <Clock className="w-3 h-3 text-gray-500" />
                        <span className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex justify-start animate-fadeIn">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                      <div className={`px-4 py-3 rounded-2xl rounded-tl-md ${theme === 'dark' ? 'bg-white/10' : 'bg-gray-100'} backdrop-blur-sm`}>
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Replies */}
              <div className={`px-4 py-2 border-t ${theme === 'dark' ? 'border-white/10' : 'border-gray-200'}`}>
                <div className="flex flex-wrap gap-2">
                  {quickReplies.slice(0, 4).map((reply) => (
                    <button
                      key={reply.key}
                      onClick={() => handleQuickReply(reply.key)}
                      className={`px-3 py-1 rounded-full text-xs ${theme === 'dark' ? 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-800'} transition-all duration-200 hover:scale-105`}
                    >
                      {reply.text}
                    </button>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {quickReplies.slice(4).map((reply) => (
                    <button
                      key={reply.key}
                      onClick={() => handleQuickReply(reply.key)}
                      className={`px-3 py-1 rounded-full text-xs ${theme === 'dark' ? 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-800'} transition-all duration-200 hover:scale-105`}
                    >
                      {reply.text}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input Area */}
              <div className={`p-4 border-t ${theme === 'dark' ? 'border-white/10' : 'border-gray-200'}`}>
                <div className="flex items-end gap-2">
                  <div className="flex-1 relative">
                    <input
                      ref={inputRef}
                      type="text"
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Type your message..."
                      className={`w-full px-4 py-3 pr-12 rounded-2xl ${theme === 'dark' ? 'bg-white/10 text-white placeholder-gray-400 border-white/20' : 'bg-white text-gray-800 placeholder-gray-500 border-gray-300'} border backdrop-blur-sm focus:outline-none focus:border-cyan-500/50 transition-all duration-200`}
                    />
                    <button
                      onClick={toggleVoiceInput}
                      className={`absolute right-3 top-1/2 transform -translate-y-1/2 p-1 rounded-full ${isListening ? 'bg-red-500 text-white animate-pulse' : `${theme === 'dark' ? 'hover:bg-white/10 text-gray-400 hover:text-white' : 'hover:bg-gray-100 text-gray-500 hover:text-gray-700'}`} transition-colors`}
                    >
                      {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                    </button>
                  </div>
                  
                  <button
                    onClick={() => sendMessage()}
                    disabled={!inputMessage.trim()}
                    className="p-3 bg-gradient-to-br from-cyan-500 to-purple-600 text-white rounded-2xl hover:shadow-lg hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-200 group"
                  >
                    <Send className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Chatbot;