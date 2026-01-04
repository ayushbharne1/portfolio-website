import React, { useState } from 'react';
import { Menu, X, Home, User, Briefcase, Mail, Code, Award } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', icon: Home, href: '/' },
    { name: 'About', icon: User, href: '#about' },
    { name: 'Skills', icon: Code, href: '#skills' },
    { name: 'Projects', icon: Briefcase, href: '/projects' },
    { name: 'Experience', icon: Award, href: '#experience' },
    { name: 'Contact', icon: Mail, href: '/contact' }
  ];

  return (
    <nav className="bg-[#1a1a1a] ml-2 rounded-md border-b border-[#2d2d2d] sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="shrink-0">
            <a href="#home" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-linear-to-br from-[#ffa116] to-[#ffb800] rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform">
                <span className="text-[#0a0a0a] font-bold text-xl">AB</span>
              </div>
              <span className="text-white font-bold text-xl hidden sm:block">Ayush Bharne</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.name}
                    onClick={() => window.location.href = item.href}
                    className="text-[#b3b3b3] hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all hover:bg-[#2d2d2d] flex items-center gap-2 group"
                  >
                    <Icon size={16} className="group-hover:text-[#ffa116] transition-colors" />
                    <span>{item.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="bg-[#ffa116] hover:bg-[#ffb800] text-[#0a0a0a] px-6 py-2 rounded-lg font-semibold text-sm transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-[#ffa116]/30"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#b3b3b3] hover:text-white p-2 rounded-lg hover:bg-[#2d2d2d] transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-[#1a1a1a] border-t border-[#2d2d2d]">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-[#b3b3b3] hover:text-white flex px-4 py-3 rounded-lg text-base font-medium transition-all hover:bg-[#2d2d2d] items-center gap-3"
                >
                  <Icon size={20} className="text-[#ffa116]" />
                  <span>{item.name}</span>
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="bg-[#ffa116] hover:bg-[#ffb800] text-[#0a0a0a] block px-4 py-3 rounded-lg font-semibold text-base text-center mt-4 transition-all"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;