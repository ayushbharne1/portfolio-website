import React from 'react'
import { Download } from 'lucide-react'

const Sidebar = () => {
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
    <aside className="w-80 rounded-md h-[98vh] flex flex-col bg-neutral-900 border-r border-neutral-800 text-slate-100">

      {/* Profile (Sticky) */}
      <div className="shrink-0 p-8 border-b border-neutral-800">
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-amber-400 shadow-[0_0_20px_rgba(255,161,22,0.3)]">
            <img src="" alt="" />
          </div>
          <h1 className="text-xl font-semibold mb-2">Ayush Bharne</h1>
          <p className="text-sm font-medium text-amber-400">
            MERN Stack Developer
          </p>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-hide">
        <div className="p-6">

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
                <span className="text-sm text-neutral-400 font-medium">
                  {label}
                </span>
                <span className="text-sm">{value}</span>
              </div>
            ))}
          </div>

          {/* Languages */}
          <div className="mb-6 pt-2">
            <h2 className="text-sm font-semibold mb-4 uppercase tracking-wide text-amber-400">
              Languages
            </h2>

            <div className="flex justify-around p-4 rounded bg-neutral-800 border border-neutral-700">
              {languages.map((lang) => {
                const circumference = 2 * Math.PI * 32
                return (
                  <div key={lang.name} className="flex flex-col items-center">
                    <div className="relative w-20 h-20 mb-2">
                      <svg className="-rotate-90 w-20 h-20">
                        <circle
                          cx="40"
                          cy="40"
                          r="32"
                          stroke="#2d2d2d"
                          strokeWidth="6"
                          fill="none"
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
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-sm font-semibold text-amber-400">
                          {lang.percentage}%
                        </span>
                      </div>
                    </div>
                    <span className="text-sm font-medium">{lang.name}</span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Skills */}
          <div className="mb-6 pt-2">
            <h2 className="text-sm font-semibold mb-4 uppercase tracking-wide text-amber-400">
              Skills & Expertise
            </h2>

            <div className="p-4 rounded bg-neutral-800 border border-neutral-700 space-y-4">
              {expertises.map((exp) => (
                <div key={exp.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">{exp.name}</span>
                    <span className="text-sm text-amber-400">
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
            <h2 className="text-sm font-semibold mb-4 uppercase tracking-wide text-amber-400">
              Tools & Technologies
            </h2>

            <div className="p-4 rounded bg-neutral-800 border border-neutral-700">
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="
                      px-3 py-1.5 rounded text-xs font-medium
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
            <h2 className="text-sm font-semibold mb-3 uppercase tracking-wide text-amber-400">
              Contact
            </h2>

            <div className="p-4 rounded bg-neutral-800 border border-neutral-700">
              <p className="text-xs uppercase tracking-wide text-neutral-400 mb-1">
                Email
              </p>
              <p className="text-sm wrap-break-word">
                ayushbharne@gmail.com
              </p>
            </div>
          </div>

          {/* Resume */}
          <button
            className="
              w-full py-3 px-4 mb-4
              rounded font-semibold
              flex items-center justify-center gap-2
              bg-amber-400 text-neutral-900
              transition-all
              hover:bg-amber-300 hover:-translate-y-0.5
            "
          >
            Download Resume
            <Download size={16} />
          </button>

        </div>
      </div>
    </aside>
  )
}

export default Sidebar
