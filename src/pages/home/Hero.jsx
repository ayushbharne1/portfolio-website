import React, { useState, useEffect } from "react";

const Hero = () => {
  const stats = [
    { value: "10+", label: "Completed Projects" },
    { value: "8+", label: "Freelance Clients" },
    { value: "5+", label: "Honors & Awards" },
    { value: "10+", label: "Opensource Projects" },
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
    <div className="relative bg-[#0a0a0a] overflow-hidden h-[50vh] flex items-center">
      {/* Gradient Background Effects */}
      <div className="absolute top-0 right-0 w-100 h-150 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-100 h-150 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 py-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-3xl lg:text-5xl font-bold mb-4 text-white leading-tight">
              Hello, Check This Out!
            </h1>
            
            <div className="text-lg lg:text-2xl mb-6 font-mono flex flex-wrap items-center gap-1">
              <span className="text-[#ffa116]">&lt;div&gt;</span>
              <span className="text-white">I am a {displayText}</span>
              <span className="inline-block w-0.5 h-6 bg-white animate-pulse ml-1"></span>
              <span className="text-[#ffa116]">&lt;/div&gt;</span>
            </div>
            
            <button className="bg-[#ffa116] hover:bg-[#ffb800] text-[#0a0a0a] font-semibold text-base px-8 py-3 rounded-xl transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-[#ffa116]/30">
              Explore
            </button>
          </div>

          {/* Right Content - Avatar */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full blur-2xl opacity-20 bg-[#ffa116]"></div>
              
              {/* Avatar Circle */}
              <div className="relative w-48 h-48 lg:w-64 lg:h-64 rounded-full flex items-center justify-center text-6xl lg:text-8xl bg-linear-to-br from-[#2d2d2d] to-[#1a1a1a] border border-[#2d2d2d]">
                👋
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-left">
              <div className="text-2xl lg:text-3xl font-bold mb-1 text-[#ffa116]">
                {stat.value}
              </div>
              <div className="text-xs lg:text-sm text-white">
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