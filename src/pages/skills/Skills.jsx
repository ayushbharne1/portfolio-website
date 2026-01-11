import React from 'react';
import { Code, Database, Palette, GitBranch, Cloud, Cpu } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend Development',
      color: '#ffa116',
      skills: [
        { name: 'React.js', level: 95 },
        { name: 'Next.js', level: 90 },
        { name: 'JavaScript', level: 92 },
        { name: 'TypeScript', level: 88 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Tailwind CSS', level: 93 }
      ]
    },
    {
      icon: Database,
      title: 'Backend Development',
      color: '#00d9ff',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express.js', level: 88 },
        { name: 'MongoDB', level: 85 },
        { name: 'MySQL', level: 80 },
        // { name: 'PostgreSQL', level: 82 },
        { name: 'REST API', level: 90 },

        // { name: 'GraphQL', level: 78 }
      ]
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      color: '#ff6b9d',
      skills: [
        { name: 'Figma', level: 88 },
        // { name: 'Adobe XD', level: 82 },
        // { name: 'Photoshop', level: 80 },
        // { name: 'Illustrator', level: 75 },
        { name: 'Wireframing', level: 85 },
        { name: 'Prototyping', level: 87 }
      ]
    },
    {
      icon: GitBranch,
      title: 'Version Control',
      color: '#f14e32',
      skills: [
        { name: 'Git', level: 92 },
        { name: 'GitHub', level: 90 },
        { name: 'GitLab', level: 85 },
        // { name: 'Bitbucket', level: 50 },
        { name: 'Git Flow', level: 88 },
        { name: 'CI/CD', level: 82 }
      ]
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      color: '#4285f4',
      skills: [
        // { name: 'AWS', level: 80 },
        { name: 'Docker', level: 85 },
        // { name: 'Kubernetes', level: 75 },
        { name: 'Vercel', level: 90 },
        { name: 'Netlify', level: 88 },
        { name: 'Linux', level: 82 }
      ]
    },
    {
      icon: Cpu,
      title: 'Other Technologies',
      color: '#34a853',
      skills: [
        { name: 'Redux', level: 87 },
        { name: 'Gsap', level: 80 },
        // { name: 'Jest', level: 80 },
        { name: 'Webpack', level: 78 },
        // { name: 'Firebase', level: 85 },
        { name: 'Socket.io', level: 82 },
        { name: 'WebRTC', level: 75 }
      ]
    }
  ];

  const languages = [
    { name: 'English', level: 80 },
    { name: 'Hindi', level: 95 }
  ];

  const certifications = [
    {
      title: 'Java Algorithms and Data Structures',
      issuer: 'Sheryians',
      year: '2025'
    },
    {
      title: 'React js',
      issuer: 'Sheryians',
      year: '2024'
    },
    {
      title: 'Backend Development',
      issuer: 'Sheryians',
      year: '2024'
    },
    {
      title: 'Frontend Development',
      issuer: 'Sheryians',
      year: '2023'
    },
  ];

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-[#eff1f6] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Skills & Expertise
          </h1>
          <p className="text-lg text-[#b3b3b3] max-w-2xl mx-auto">
            A comprehensive overview of my technical skills, tools, and technologies I work with.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-[#1a1a1a] rounded-2xl p-6 border border-[#2d2d2d] hover:border-[#ffa116] transition-all group"
              >
                {/* Category Header */}
                
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${category.color}20` }}
                  >
                    <Icon size={24} style={{ color: category.color }} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>

                {/* Skills */}
                <div className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-2">
                        <span className="text-[#eff1f6] text-sm font-medium">
                          {skill.name}
                        </span>
                        <span className="text-[#ffa116] text-sm font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-[#2d2d2d] rounded-full h-2 overflow-hidden">
                        <div
                          className="h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: `${skill.level}%`,
                            backgroundColor: category.color
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Languages & Certifications Section */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Languages */}
          <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-[#2d2d2d]">
            <h3 className="text-2xl font-bold text-white mb-6">Languages</h3>
            <div className="space-y-6">
              {languages.map((lang, index) => (
                <div key={index} className="text-center">
                  <div className="relative inline-flex items-center justify-center mb-3">
                    <svg className="w-32 h-32 transform -rotate-90">
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="#2d2d2d"
                        strokeWidth="8"
                        fill="none"
                      />
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="#ffa116"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray={`${2 * Math.PI * 56}`}
                        strokeDashoffset={`${2 * Math.PI * 56 * (1 - lang.level / 100)}`}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute">
                      <span className="text-3xl font-bold text-[#ffa116]">{lang.level}%</span>
                    </div>
                  </div>
                  <p className="text-lg font-semibold text-white">{lang.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-[#2d2d2d]">
            <h3 className="text-2xl font-bold text-white mb-6">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-[#0a0a0a] p-4 rounded-lg border border-[#2d2d2d] hover:border-[#ffa116] transition-all"
                >
                  <h4 className="text-white font-semibold mb-1">{cert.title}</h4>
                  <div className="flex justify-between items-center">
                    <p className="text-[#b3b3b3] text-sm">{cert.issuer}</p>
                    <span className="text-[#ffa116] text-sm font-medium">{cert.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { value: '2+', label: 'Technologies' },
            { value: '5+', label: 'Projects Completed' },
            { value: 'Fresher', label: 'Experience' },
            { value: '5+', label: 'Certifications' }
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] rounded-2xl p-6 border border-[#2d2d2d] text-center hover:border-[#ffa116] transition-all"
            >
              <div className="text-4xl font-bold text-[#ffa116] mb-2">{stat.value}</div>
              <div className="text-[#b3b3b3] text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;