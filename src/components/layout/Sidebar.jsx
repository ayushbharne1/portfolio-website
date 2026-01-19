import React, { useState } from 'react'
import { Download, Linkedin, Github, Mail, Menu, X, ExternalLink } from 'lucide-react'
import profile from '../../assets/profileportfolio.png'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const languages = [
    { name: 'Hindi', percentage: 95 },
    { name: 'English', percentage: 80 },
  ]

  const expertises = [
    { name: 'MERN Stack Developer', percentage: 75 },
    { name: 'React Developer', percentage: 91 },
    { name: 'Backend Developer', percentage: 80 },
  ]

  const tools = [
    'JavaScript', 'ReactJS', 'NextJS', 'TypeScript',
    'NodeJS', 'Redux', 'CSS', 'SCSS',
    'TailwindCSS', 'Material UI',
    'Next UI', 'REST API', 'MongoDB', 'MySQL',
    'Git', 'GitHub', 'Figma',
  ]

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-5 z-100 w-12 h-12 bg-amber-400 text-neutral-900 rounded-full flex items-center justify-center shadow-lg hover:bg-amber-300 transition-colors"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/60 z-40 transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed md:relative
        w-72 md:w-72 lg:w-72
        rounded-none md:rounded-md
        h-screen md:h-[98vh]
        flex flex-col
        bg-neutral-900 border-r border-neutral-800 text-slate-100
        z-60
        transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>

        {/* Profile (Sticky) */}
        <div className="shrink-0 p-6 md:p-8 border-b border-yellow-600">
          <div className="flex flex-col items-center">
            <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden mb-4 border-4 border-amber-400 shadow-[0_0_20px_rgba(255,161,22,0.3)]">
              <img className='w-full h-full object-cover' src={profile} alt="Profile" />
            </div>
            <h1 className="text-lg md:text-xl font-semibold mb-2">Ayush Bharne</h1>
            <p className="text-xs md:text-sm font-medium text-amber-400">
              MERN Stack Developer
            </p>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-hide">
          <div className="p-4 md:p-6">

            {/* Personal Info */}
            <div className="mb-6 space-y-2">
              {[
                ['Residence', 'India'],
                ['City', 'Balaghat'],
                ['Age', '23'],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex justify-between py-2 border-b last:border-none border-neutral-800"
                >
                  <span className="text-xs md:text-sm text-neutral-400 font-medium">
                    {label}
                  </span>
                  <span className="text-xs md:text-sm">{value}</span>
                </div>
              ))}
            </div>

            {/* Languages */}
            <div className="mb-6 pt-2">
              <h2 className="text-xs md:text-sm font-semibold mb-4 uppercase tracking-wide text-amber-400">
                Languages
              </h2>

              <div className="flex justify-around p-3 md:p-4 rounded bg-neutral-800 border border-neutral-700">
                {languages.map((lang) => {
                  const circumference = 2 * Math.PI * 32
                  return (
                    <div key={lang.name} className="flex flex-col items-center">
                      <div className="relative w-16 h-16 md:w-20 md:h-20 mb-2">
                        <svg className="-rotate-90 w-16 h-16 md:w-20 md:h-20">
                          <circle
                            cx="32"
                            cy="32"
                            r="28"
                            stroke="#2d2d2d"
                            strokeWidth="5"
                            fill="none"
                            className="md:hidden"
                          />
                          <circle
                            cx="32"
                            cy="32"
                            r="28"
                            stroke="#ffa116"
                            strokeWidth="5"
                            fill="none"
                            strokeLinecap="round"
                            strokeDasharray={circumference}
                            strokeDashoffset={
                              circumference * (1 - lang.percentage / 100)
                            }
                            className="md:hidden"
                          />
                          <circle
                            cx="40"
                            cy="40"
                            r="32"
                            stroke="#2d2d2d"
                            strokeWidth="6"
                            fill="none"
                            className="hidden md:block"
                          />
                          <circle
                            cx="40"
                            cy="40"
                            r="32"
                            stroke="#ffa116"
                            strokeWidth="6"
                            fill="none"
                            strokeLinecap="round"
                            strokeDasharray={circumference}
                            strokeDashoffset={
                              circumference * (1 - lang.percentage / 100)
                            }
                            className="hidden md:block"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-xs md:text-sm font-semibold text-amber-400">
                            {lang.percentage}%
                          </span>
                        </div>
                      </div>
                      <span className="text-xs md:text-sm font-medium">{lang.name}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Skills */}
            <div className="mb-6 pt-2">
              <h2 className="text-xs md:text-sm font-semibold mb-4 uppercase tracking-wide text-amber-400">
                Skills & Expertise
              </h2>

              <div className="p-3 md:p-4 rounded bg-neutral-800 border border-neutral-700 space-y-3 md:space-y-4">
                {expertises.map((exp) => (
                  <div key={exp.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-xs md:text-sm font-medium">{exp.name}</span>
                      <span className="text-xs md:text-sm text-amber-400">
                        {exp.percentage}%
                      </span>
                    </div>

                    <div className="w-full h-2 rounded bg-neutral-700">
                      <div
                        className="h-2 rounded bg-amber-400 transition-all duration-500"
                        style={{ width: `${exp.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="mb-6 pt-2">
              <h2 className="text-xs md:text-sm font-semibold mb-4 uppercase tracking-wide text-amber-400">
                Tools & Technologies
              </h2>

              <div className="p-3 md:p-4 rounded bg-neutral-800 border border-neutral-700">
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {tools.map((tool) => (
                    <span
                      key={tool}
                      className="
                        px-2 md:px-3 py-1 md:py-1.5 rounded text-xs font-medium
                        bg-neutral-700 border border-neutral-600 text-slate-100
                        transition-colors
                        hover:bg-amber-400 hover:text-neutral-900 hover:border-amber-400
                      "
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="mb-6 pt-2">
              <h2 className="text-xs md:text-sm font-semibold mb-3 uppercase tracking-wide text-amber-400">
                Contact
              </h2>

              <div className="p-3 md:p-4 rounded bg-neutral-800 border border-neutral-700">
                <p className="text-xs uppercase tracking-wide text-neutral-400 mb-1">
                  Email
                </p>
                <p className="text-xs md:text-sm break-all">
                  ayushbharne@gmail.com
                </p>
              </div>
            </div>

            {/* Resume */}
<a
  href="/resume/resumenew.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="w-full py-2.5 md:py-3 px-4 mb-4
    rounded font-semibold text-sm md:text-base
    flex items-center justify-center gap-2
    bg-amber-400 text-neutral-900
    transition-all
    hover:bg-amber-300 hover:-translate-y-0.5"
>
  View Resume
  <ExternalLink size={16} />
</a>

          </div>
          
        </div>
        
        {/* Social Links - Sticky Footer */}
        <div className='sticky bottom-0 w-full z-5 h-12 md:h-14 py-2 border-t-2 border-yellow-600 bg-[#1a1a1a]'>
          <div className="flex gap-3 md:gap-4 w-full justify-center">
            {[
              { icon: Linkedin, link: 'https://www.linkedin.com/in/ayush-bharne-4462b9247/', color: '#0077b5' },
              { icon: Github, link: 'https://github.com/ayushbharne1', color: '#fff' },
              { icon: Mail, link: 'mailto:ayushbharne@gmail.com', color: '#ffa116' }
            ].map((social, i) => (
              <a 
                key={i} 
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 md:w-10 md:h-10 bg-[#1a1a1a] border border-[#2d2d2d] rounded-xl flex items-center justify-center hover:border-[#ffa116] transition-all group"
              >
                <social.icon size={20} className="md:w-6 md:h-6 text-[#b3b3b3] group-hover:text-white transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </aside>
    </>
  )
}

export default Sidebar