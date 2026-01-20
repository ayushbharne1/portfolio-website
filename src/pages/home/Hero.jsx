import React, { useState, useEffect } from "react";
import avatar from "../../assets/avatar.png";

const Hero = () => {
  const stats = [
    { value: "5+", label: "Completed Projects" },
    { value: "3+", label: "Freelance Clients" },
    { value: "5+", label: "Honors & Awards" },
    { value: "1+", label: "Opensource Projects" },
  ];

  const roles = [
    "MERN Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Engineer"
  ];

  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [letterIndex, setLetterIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[currentIndex];
    
    if (isTyping) {
      if (letterIndex < currentRole.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, letterIndex + 1));
          setLetterIndex(letterIndex + 1);
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (letterIndex > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, letterIndex - 1));
          setLetterIndex(letterIndex - 1);
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setCurrentIndex((currentIndex + 1) % roles.length);
        setIsTyping(true);
      }
    }
  }, [letterIndex, isTyping, currentIndex]);

  return (
    <div className="relative bg-[#0a0a0a] overflow-hidden min-h-[45vh] md:min-h-[60vh] lg:min-h-[55vh] flex items-center py-12 md:py-16 lg:py-20">
      {/* Gradient Background Effects */}
      <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 lg:w-125 lg:h-125 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 lg:w-125 lg:h-125 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 text-white leading-tight">
              Hello, Check This Out!
            </h1>
            
            <div className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 font-mono flex flex-wrap items-center justify-center lg:justify-start gap-1">
              <span className="text-[#ffa116]">&lt;div&gt;</span>
              <span className="text-white">I am a</span>
              <span className="text-white">{displayText}</span>
              <span className="inline-block w-0.5 h-5 md:h-6 bg-white animate-pulse"></span>
              <span className="text-[#ffa116]">&lt;/div&gt;</span>
            </div>
            
            <button className="bg-[#ffa116] hover:bg-[#ffb800] text-[#0a0a0a] font-semibold text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 rounded-xl transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-[#ffa116]/30">
              Explore
            </button>
          </div>

          {/* Right Content - Avatar */}
          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full blur-2xl opacity-20 bg-[#ffa116]"></div>
              
              {/* Avatar Circle */}
              <div className="relative shadow-amber-500 shadow-md overflow-hidden w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 rounded-full flex items-center justify-center text-6xl lg:text-8xl bg-gradient-to-br from-[#2d2d2d] to-[#1a1a1a] border border-[#2d2d2d]">
                <img 
                  src={avatar} 
                  alt="Avatar" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mt-12 md:mt-16 lg:mt-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center lg:text-left p-4 md:p-6 rounded-lg bg-[#1a1a1a]/50 backdrop-blur-sm border border-[#2d2d2d] hover:border-[#ffa116] transition-all">
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2 text-[#ffa116]">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm md:text-base text-white/80">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;