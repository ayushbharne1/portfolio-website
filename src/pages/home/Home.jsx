import React from 'react'
import Hero from './Hero'
import { Mail } from 'lucide-react'

const PortfolioPage = () => {

  const expertise = [
    {
      title: 'Full Stack Development',
      description:
        'I am a skilled MERN stack developer with extensive experience in building robust web applications using MongoDB, Express.js, React.js, and Node.js. I possess a strong understanding of server-side rendering, API integration, and database management. With my expertise, I can deliver dynamic and efficient web solutions tailored to meet the unique requirements of clients.',
    },
    // {
    //   title: 'Scrum and Jira',
    //   description:
    //     "As a developer, I'm proficient in Jira and Scrum methodologies. I use Jira to simplify project management tasks like task assignment, prioritization, and progress tracking. Scrum has improved my teamwork, utilizing daily stand-ups, sprint planning, and retrospectives. My expertise ensures high-quality software products are delivered promptly.",
    // },
    {
      title: 'Designing (UI/UX)',
      description:
        'I am proficient in using design software such as Figma, Adobe XD, and Adobe Illustrator. Through participating in hackathons and freelance work, I have gained practical experience in UI/UX design and graphic design. Designing is my passion, and it has allowed me to continue to develop my creative skills and grow in the field.',
    },
    {
      title: 'Github',
      description:
        'GitHub is essential for version control and collaboration. I use it to manage code, track changes, and collaborate with teams through pull requests and code reviews.',
    },
    {
      title: 'Open Source Contributor',
      description:
        'Open Source is the future. I usually take part in open source activities and contribute to various projects on GitHub.',
    },
  ]

  return (
    <div className="min-h-screen bg-neutral-950 text-slate-100 scrollbar-hide">
      
      {/* Hero */}
      <Hero />

      {/* Expertise */}
      <section className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-white">
          My Expertise
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {expertise.map((item, index) => (
            <div
              key={index}
              className="
                p-8 rounded-2xl cursor-pointer
                bg-neutral-900 border border-neutral-800
                transition-all duration-300
                hover:-translate-y-1
                hover:border-amber-400
                hover:shadow-[0_10px_30px_rgba(255,161,22,0.2)]
              "
            >
              <h3 className="text-2xl font-bold mb-4 text-white">
                {item.title}
              </h3>
              <p className="text-base leading-relaxed text-neutral-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-400">

            <div className="flex items-center gap-2">
              <span className="text-lg">©</span>
              <span>2025 All Rights Reserved.</span>
            </div>

            <div className="flex items-center gap-2">
              <span>Made with</span>
              <span className="text-red-500">❤️</span>
              <span>by</span>
              <span className="text-slate-100 font-medium">Ayush</span>
            </div>

            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>ayushbharne@gmail.com</span>
            </div>

          </div>
        </div>
      </footer>
    </div>
  )
}

export default PortfolioPage
