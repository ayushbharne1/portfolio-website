import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  ExternalLink, 
  CheckCircle2, 
  Code2, 
  Layers, 
  Globe, 
  Zap 
} from 'lucide-react';

const Experience = () => {
  const experiences = [
    // {
    //   period: '2024 - Present',
    //   role: 'Senior Full Stack Developer',
    //   company: 'Tech Solutions Inc.',
    //   location: 'Remote',
    //   description: 'Leading the development of enterprise-level SaaS applications. Focus on performance optimization and scalable architecture.',
    //   highlights: [
    //     'Reduced load times by 40% through code splitting',
    //     'Managed a team of 5 junior developers',
    //     'Implemented CI/CD pipelines using GitHub Actions'
    //   ]
    // },
    {
      period: '2025 - Present',
      role: 'React.js Intern',
      company: 'Talentrise Technokrate Pvt Ltd.',
      location: 'Nagpur, MH',
      description: 'Working on building dynamic and responsive web applications using React.js, focusing on component-based architecture and state management.Integrating RESTful APIs and optimizing performance for enhanced user experience.',
      highlights: [
        'Developed reusable React components to streamline UI development',
        'Collaborated with designers to implement responsive designs',
        'Optimized application performance through code splitting and lazy loading'
      ]
    },
    {
      period: '2023 - 2025',
      role: 'MERN Stack Development Trainee',
      company: 'Sheryians',
      location: 'Bhopal, MP',
      description: 'Completed an intensive training program focused on full stack web development using the MERN stack.',
      highlights: [
        'Developed responsive and user-friendly web applications',
        'Collaborated on team projects using Agile methodologies',
        'Gained hands-on experience with RESTful APIs and JWT authentication'
      ]
    }
  ];

  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code2,
      skills: ['React.js', 'Next.js', 'Tailwind CSS', 'Redux', 'TypeScript']
    },
    {
      title: 'Backend',
      icon: Layers,
      skills: ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Firebase']
    },
    {
      title: 'Tools & DevOps',
      icon: Zap,
      skills: ['Git', 'Docker', 'AWS', 'Vercel', 'Postman']
    }
  ];

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-[#eff1f6] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Professional Experience
          </h1>
          <p className="text-lg text-[#b3b3b3] max-w-2xl mx-auto">
            A chronological look at my professional journey and the technical expertise I've gained along the way.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Left Column: Skills Summary */}
          <div className="lg:col-span-1 space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Zap className="text-[#ffa116]" /> Technical Arsenal
            </h3>
            
            {skillCategories.map((category, idx) => {
              const Icon = category.icon;
              return (
                <div key={idx} className="bg-[#1a1a1a] p-6 rounded-2xl border border-[#2d2d2d]">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon size={20} className="text-[#ffa116]" />
                    <h4 className="font-bold text-white">{category.title}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="px-3 py-1 bg-[#2d2d2d] text-[#b3b3b3] text-sm rounded-md border border-[#3d3d3d]">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}

            {/* Resume Download CTA */}
            <div className="bg-linear-to-br from-[#ffa116] to-[#ffb800] p-6 rounded-2xl text-[#0a0a0a]">
              <h4 className="font-bold text-xl mb-2">Need a PDF?</h4>
              <p className="text-sm mb-4 font-medium opacity-90">Download my full resume for offline viewing.</p>
              <button className="w-full bg-[#0a0a0a] text-white py-3 rounded-xl font-bold hover:bg-black transition-colors flex items-center justify-center gap-2">
                Download Resume <ExternalLink size={16} />
              </button>
            </div>
          </div>

          {/* Right Column: Detailed Timeline */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="group relative">
                  {/* Vertical Line Connector */}
                  {index !== experiences.length - 1 && (
                    <div className="absolute left-6 top-16 -bottom-8 w-0.5 bg-[#2d2d2d] group-hover:bg-[#ffa116]/30 transition-colors"></div>
                  )}

                  <div className="flex gap-6">
                    {/* Icon Circle */}
                    <div className="relative z-10 shrink-0 w-12 h-12 bg-[#1a1a1a] border-2 border-[#2d2d2d] rounded-full flex items-center justify-center group-hover:border-[#ffa116] transition-colors">
                      <Briefcase size={20} className="text-[#ffa116]" />
                    </div>

                    {/* Content Card */}
                    <div className="bg-[#1a1a1a] border border-[#2d2d2d] p-6 rounded-2xl grow group-hover:border-[#ffa116]/50 transition-all">
                      <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-[#ffa116] transition-colors">{exp.role}</h3>
                          <p className="text-[#ffa116] font-medium">{exp.company}</p>
                        </div>
                        <div className="flex flex-col items-end">
                          <span className="flex items-center gap-1 text-sm text-[#b3b3b3]">
                            <Calendar size={14} /> {exp.period}
                          </span>
                          <span className="text-xs text-[#666] mt-1">{exp.location}</span>
                        </div>
                      </div>

                      <p className="text-[#b3b3b3] mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="grid sm:grid-cols-1 gap-3">
                        {exp.highlights.map((highlight, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-3 text-sm text-[#eff1f6]">
                            <CheckCircle2 size={16} className="text-[#ffa116] mt-0.5 shrink-0" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Services / What I Do */}
        <div className="mt-24">
          <h3 className="text-3xl font-bold text-white mb-12 text-center">Specialized Services</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Web Development', desc: 'Custom, responsive websites built with modern frameworks for optimal speed and SEO.', icon: Globe },
              { title: 'API Integration', desc: 'Seamlessly connecting your frontend with robust backends and 3rd party services.', icon: Layers },
              { title: 'Performance Tuning', desc: 'Analyzing and optimizing application bottlenecks for lightning-fast user experiences.', icon: Zap }
            ].map((service, i) => (
              <div key={i} className="bg-[#1a1a1a] p-8 rounded-2xl border border-[#2d2d2d] text-center hover:-translate-y-2 transition-transform">
                <div className="w-14 h-14 bg-[#2d2d2d] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <service.icon className="text-[#ffa116]" size={28} />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
                <p className="text-[#b3b3b3] text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;