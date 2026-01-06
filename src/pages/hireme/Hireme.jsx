import React, { useState } from 'react';
import { 
  Mail, 
  MessageSquare, 
  Send, 
  Clock, 
  CheckCircle, 
  Coffee, 
  Zap, 
  Globe,
  Linkedin,
  Github,
  Twitter
} from 'lucide-react';

const Hireme = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Project Inquiry',
    message: ''
  });

  const availability = [
    { icon: Clock, label: 'Availability', value: 'Open for Full-time / Freelance' },
    { icon: Globe, label: 'Timezone', value: 'GMT+5:30 (IST)' },
    { icon: MessageSquare, label: 'Response Time', value: 'Within 24 Hours' }
  ];

  const whyHireMe = [
    "Expertise in MERN Stack & Scalable Architecture",
    "Proven track record of 50+ successful projects",
    "Clean code advocate with strong documentation habits",
    "Excellent communication and team collaboration"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
  };

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-[#eff1f6] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Let's Build Something <span className="text-[#ffa116]">Great</span>
          </h1>
          <p className="text-lg text-[#b3b3b3] max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          
          {/* Left Side: Contact Info & Value Prop */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-[#1a1a1a] p-8 rounded-2xl border border-[#2d2d2d]">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Details</h3>
              
              <div className="space-y-6">
                {availability.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#2d2d2d] rounded-xl flex items-center justify-center">
                      <item.icon size={22} className="text-[#ffa116]" />
                    </div>
                    <div>
                      <p className="text-[#b3b3b3] text-xs uppercase tracking-wider">{item.label}</p>
                      <p className="text-white font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-10 border-t border-[#2d2d2d]">
                <h4 className="text-white font-bold mb-4 text-lg">Why Hire Me?</h4>
                <div className="space-y-3">
                  {whyHireMe.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-[#ffa116] mt-1 shrink-0" />
                      <span className="text-[#b3b3b3] text-sm">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {[
                { icon: Linkedin, link: '#', color: '#0077b5' },
                { icon: Github, link: '#', color: '#fff' },
                { icon: Twitter, link: '#', color: '#1da1f2' },
                { icon: Mail, link: 'mailto:ayush@example.com', color: '#ffa116' }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.link} 
                  className="w-14 h-14 bg-[#1a1a1a] border border-[#2d2d2d] rounded-xl flex items-center justify-center hover:border-[#ffa116] transition-all group"
                >
                  <social.icon size={24} className="text-[#b3b3b3] group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-[#1a1a1a] p-8 lg:p-10 rounded-2xl border border-[#2d2d2d] shadow-2xl">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-[#b3b3b3] mb-2">Full Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-[#0a0a0a] border border-[#2d2d2d] text-white rounded-xl px-4 py-3 focus:outline-none focus:border-[#ffa116] transition-colors"
                    placeholder="John Doe"
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#b3b3b3] mb-2">Email Address</label>
                  <input 
                    type="email" 
                    required
                    className="w-full bg-[#0a0a0a] border border-[#2d2d2d] text-white rounded-xl px-4 py-3 focus:outline-none focus:border-[#ffa116] transition-colors"
                    placeholder="john@example.com"
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-[#b3b3b3] mb-2">Subject</label>
                <select 
                  className="w-full bg-[#0a0a0a] border border-[#2d2d2d] text-white rounded-xl px-4 py-3 focus:outline-none focus:border-[#ffa116] transition-colors appearance-none"
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                >
                  <option>Project Inquiry</option>
                  <option>Full-time Role</option>
                  <option>Freelance Project</option>
                  <option>Just saying Hi!</option>
                </select>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium text-[#b3b3b3] mb-2">Message</label>
                <textarea 
                  rows="5"
                  required
                  className="w-full bg-[#0a0a0a] border border-[#2d2d2d] text-white rounded-xl px-4 py-3 focus:outline-none focus:border-[#ffa116] transition-colors resize-none"
                  placeholder="Tell me about your project..."
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-[#ffa116] hover:bg-[#ffb800] text-[#0a0a0a] py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] shadow-lg shadow-[#ffa116]/20"
              >
                Send Message <Send size={20} />
              </button>
            </form>

            {/* Quick Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
              <div className="flex items-center gap-3 text-[#b3b3b3] bg-[#1a1a1a] p-4 rounded-xl border border-[#2d2d2d]">
                <Zap size={18} className="text-[#ffa116]" />
                <span className="text-xs font-medium">Fast Feedback</span>
              </div>
              <div className="flex items-center gap-3 text-[#b3b3b3] bg-[#1a1a1a] p-4 rounded-xl border border-[#2d2d2d]">
                <Coffee size={18} className="text-[#ffa116]" />
                <span className="text-xs font-medium">Remote Ready</span>
              </div>
              <div className="hidden sm:flex items-center gap-3 text-[#b3b3b3] bg-[#1a1a1a] p-4 rounded-xl border border-[#2d2d2d]">
                <Globe size={18} className="text-[#ffa116]" />
                <span className="text-xs font-medium">Global Client Base</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hireme;