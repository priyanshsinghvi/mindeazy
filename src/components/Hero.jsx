import React, { useEffect } from 'react';
import { MessageCircle, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  useEffect(() => {
    const fadeIn = () => {
      const hero = document.querySelector('.hero-content');
      hero.style.opacity = '1';
      hero.style.transform = 'translateY(0)';
    };
    fadeIn();
  }, []);

  return (
    <div id="home" className="min-h-screen flex items-center justify-center bg-gradient-animate px-4 py-16 sm:py-24">
      <div className="w-full px-3 sm:px-4 lg:px-5">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="hero-content opacity-0 transform translate-y-4 transition-all duration-1000 space-y-8 md:pr-6 lg:pr-12">
            <h1 className="text-4xl md:text-6xl font-bold text-[#1D3557] leading-tight">
              Your Companion for Mental Wellness & Emotional Balance
            </h1>
            <p className="text-xl text-[#457B9D] md:text-2xl">
              Begin your journey to better mental health with personalized support and guidance
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/chat" 
                className="group flex items-center justify-center gap-2 bg-[#1D3557] text-white px-8 py-3 rounded-full hover:bg-[#457B9D] transition-all hover:scale-105 hover:-translate-y-1 active:scale-95"
              >
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Start Chatting
              </Link>
              <Link
                to="/challenges"
                className="group flex items-center justify-center gap-2 bg-white text-[#1D3557] px-8 py-3 rounded-full hover:bg-[#F1FAEE] transition-all hover:scale-105 hover:-translate-y-1 active:scale-95"
              >
                <Users className="w-5 h-5 group-hover:scale-110 transition-transform" />
                View Challenges
              </Link>
            </div>

            <div className="p-6 md:p-8 bg-white/30 backdrop-blur-md rounded-2xl transform hover:scale-102 transition-transform shadow-sm">
              <p className="italic text-[#1D3557] text-lg">
                "The journey of a thousand miles begins with a single step towards mental wellness."
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="hidden md:flex justify-center items-center">
            <div className="relative w-full max-w-md transform hover:scale-105 transition-transform duration-500 ml-0 md:ml-6 lg:ml-10">
              <div className="absolute inset-0 bg-[#A8DADC]/20 rounded-full filter blur-3xl"></div>
              <img
                src="https://raw.githubusercontent.com/priyanshsinghz/mindfulspace/main/meditation.png"
                alt="Peaceful meditation illustration"
                className="relative z-10 w-full h-auto drop-shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;