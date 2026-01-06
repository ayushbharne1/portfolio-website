import React from 'react';
import { Calendar, MapPin, Briefcase, GraduationCap, Award, Heart, Coffee, Music, Camera, Book } from 'lucide-react';

const About = () => {
  const personalInfo = [
    { icon: Calendar, label: 'Age', value: '23 Years' },
    { icon: MapPin, label: 'Location', value: 'Balaghat, India' },
    { icon: Briefcase, label: 'Experience', value: '5+ Years' },
    { icon: GraduationCap, label: 'Education', value: 'B.Tech in CSE' }
  ];

  const achievements = [
    { icon: Award, title: '50+ Projects', description: 'Successfully delivered' },
    { icon: Briefcase, title: '30+ Clients', description: 'Satisfied worldwide' },
    { icon: GraduationCap, title: '15+ Certifications', description: 'Professional credentials' },
    { icon: Coffee, title: '1000+ Cups', description: 'Of coffee consumed' }
  ];

  const interests = [
    { icon: Music, name: 'Music', color: '#ff6b9d' },
    { icon: Camera, name: 'Photography', color: '#ffa116' },
    { icon: Book, name: 'Reading', color: '#00d9ff' },
    { icon: Coffee, name: 'Coffee', color: '#34a853' },
    { icon: Heart, name: 'Traveling', color: '#f14e32' }
  ];

  const timeline = [
    {
      year: '2024',
      title: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      description: 'Leading a team of 5 developers, architecting scalable solutions, and mentoring junior developers.'
    },
    {
      year: '2022',
      title: 'Full Stack Developer',
      company: 'Digital Innovations',
      description: 'Developed multiple web applications using MERN stack, improved performance by 40%.'
    },
    {
      year: '2020',
      title: 'Frontend Developer',
      company: 'Creative Agency',
      description: 'Built responsive websites and web applications using React.js and modern CSS frameworks.'
    },
    {
      year: '2019',
      title: 'Bachelor of Technology',
      company: 'University Name',
      description: 'Graduated with honors in Computer Science and Engineering with a focus on web technologies.'
    }
  ];

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-[#eff1f6] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            About Me
          </h1>
          <p className="text-lg text-[#b3b3b3] max-w-2xl mx-auto">
            Get to know more about my journey, skills, and what drives my passion for development.
          </p>
        </div>

        {/* Profile Section */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Profile Image & Info */}
          <div className="lg:col-span-1">
            <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-[#2d2d2d] sticky top-24">
              <div className="w-48 h-48 mx-auto rounded-full bg-linear-to-br from-[#ffa116] to-[#ffb800] flex items-center justify-center text-6xl mb-6">
                👨‍💻
              </div>
              <h2 className="text-2xl font-bold text-white text-center mb-2">
                Ayush Bharne
              </h2>
              <p className="text-[#ffa116] text-center mb-6 font-medium">
                MERN Stack Developer
              </p>
              
              {/* Personal Info */}
              <div className="space-y-4">
                {personalInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#2d2d2d] rounded-lg flex items-center justify-center">
                        <Icon size={18} className="text-[#ffa116]" />
                      </div>
                      <div>
                        <p className="text-[#b3b3b3] text-xs">{info.label}</p>
                        <p className="text-white font-medium">{info.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Bio */}
            <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-[#2d2d2d]">
              <h3 className="text-2xl font-bold text-white mb-4">My Story</h3>
              <div className="space-y-4 text-[#b3b3b3] leading-relaxed">
                <p>
                  Hello! I'm Ayush Bharne, a passionate MERN Stack Developer with over 5 years of experience in building robust and scalable web applications. My journey in web development started during my college years when I discovered the power of creating interactive and dynamic websites.
                </p>
                <p>
                  I specialize in full-stack development using MongoDB, Express.js, React.js, and Node.js. Throughout my career, I've had the opportunity to work on diverse projects ranging from e-commerce platforms to social networking applications, always focusing on delivering high-quality, user-centric solutions.
                </p>
                <p>
                  I'm constantly learning and staying updated with the latest technologies and best practices in web development. When I'm not coding, you'll find me contributing to open-source projects, writing technical blogs, or exploring new frameworks and tools.
                </p>
              </div>
            </div>

            {/* Achievements Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div
                    key={index}
                    className="bg-[#1a1a1a] rounded-2xl p-6 border border-[#2d2d2d] hover:border-[#ffa116] transition-all"
                  >
                    <Icon size={32} className="text-[#ffa116] mb-3" />
                    <h4 className="text-xl font-bold text-white mb-1">
                      {achievement.title}
                    </h4>
                    <p className="text-[#b3b3b3] text-sm">
                      {achievement.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            My Journey
          </h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#2d2d2d] hidden md:block"></div>
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="relative md:pl-20">
                  {/* Timeline Dot */}
                  <div className="absolute left-5 top-2 w-6 h-6 bg-[#ffa116] rounded-full border-4 border-[#0a0a0a] hidden md:block"></div>
                  
                  <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-[#2d2d2d] hover:border-[#ffa116] transition-all">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="px-4 py-1 bg-[#ffa116] text-[#0a0a0a] rounded-full text-sm font-bold">
                        {item.year}
                      </span>
                      <h4 className="text-xl font-bold text-white">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-[#ffa116] font-medium mb-2">{item.company}</p>
                    <p className="text-[#b3b3b3]">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Interests */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Interests & Hobbies
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {interests.map((interest, index) => {
              const Icon = interest.icon;
              return (
                <div
                  key={index}
                  className="bg-[#1a1a1a] rounded-2xl p-6 border border-[#2d2d2d] hover:border-[#ffa116] transition-all text-center group cursor-pointer"
                >
                  <div
                    className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-3 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${interest.color}20` }}
                  >
                    <Icon size={28} style={{ color: interest.color }} />
                  </div>
                  <p className="text-white font-medium">{interest.name}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-linear-to-r from-[#1a1a1a] to-[#2d2d2d] rounded-2xl p-8 lg:p-12 border border-[#2d2d2d] text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Let's Work Together
          </h3>
          <p className="text-[#b3b3b3] mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#contact"
              className="bg-[#ffa116] hover:bg-[#ffb800] text-[#0a0a0a] px-8 py-3 rounded-xl font-semibold transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-[#ffa116]/30"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="bg-[#2d2d2d] hover:bg-[#3d3d3d] text-white px-8 py-3 rounded-xl font-semibold transition-all"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;