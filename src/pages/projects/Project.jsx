import React, { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import RefokusThambnail from '../../assets/RefokusThambnail.png';
import BeyondWhatUSee from '../../assets/beyondWhatUSee.png';
import buyWix from '../../assets/buy-wix.png';
import portfolio from '../../assets/portfolio.png';
const Project = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Web App', 'Mobile', 'UI/UX', 'Open Source'];

  const projects = [
    {
      id: 1,
      title: 'Beyond-What-You-See',
      description: 'A visually captivating web experience that leverages advanced scroll-triggered animations to create an immersive storytelling journey. GreenSock Animation Platform (GSAP) is utilized for smooth and intricate animations that respond to user scroll behavior, enhancing engagement and interactivity.',
      image: BeyondWhatUSee,
      category: 'Web App',
      technologies: ['HTML', 'CSS', 'JavaScript', 'GreenSock Animation', 'Scroll-trigger'],
      github: 'https://github.com/ayushbharne1/Beyond-What-You-See',
      demo: 'https://beyond-what-you-see.vercel.app'
    },
    {
      id: 2,
      title: 'Task Management Dashboard',
      description: 'Modern dashboard for task and project management with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
      category: 'Web App',
      technologies: ['React', 'Firebase', 'Material-UI', 'Redux'],
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      id: 3,
      title: 'Social Media App',
      description: 'Mobile-first social networking application with features like posts, stories, real-time messaging, and user profiles.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
      category: 'Mobile',
      technologies: ['React Native', 'Node.js', 'Socket.io', 'AWS'],
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      id: 4,
      title: 'Portfolio Template',
      description: 'Modern and responsive portfolio template with dark mode, smooth animations, and customizable sections for developers and designers.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
      category: 'UI/UX',
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      id: 5,
      title: 'Open Source Library',
      description: 'A lightweight React component library with customizable UI components, comprehensive documentation, and TypeScript support.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
      category: 'Open Source',
      technologies: ['React', 'TypeScript', 'Storybook', 'NPM'],
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      id: 6,
      title: 'Weather Forecast App',
      description: 'Real-time weather application with location-based forecasts, interactive maps, and weather alerts for multiple cities.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80',
      category: 'Web App',
      technologies: ['React', 'Weather API', 'Chart.js', 'Geolocation'],
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    
    {
      id: 7,
      title: 'Refokus',
      description: 'Animated landing page built with React, Lenis for smooth scrolling, Tailwind CSS for styling, and Framer Motion for engaging animations.',
      image: RefokusThambnail,
      category: 'Web App',
      technologies: ['React', "Lenis", 'tailwindcss', 'Framer Motion'],
      github: 'https://github.com/ayushbharne1/Refokus',
      demo: 'https://refokus-rho-flame.vercel.app'
    }, 
       {
      id: 8,
      title: 'Buy-Wix Landing Page',
      description: 'Animated landing page built with HTML, CSS, and JavaScript, showcasing modern design and interactive elements.',
      image: buyWix,
      category: 'Web App',
      technologies: ['HTML', "CSS", 'JavaScript'],
      github: 'https://github.com/ayushbharne1/BuyWix-Website',
      demo: 'https://buy-wix-website.vercel.app/'
    },
       {
      id: 9,
      title: 'Portfolio Website',
      description: 'Portfolio website built with React, Tailwind CSS, and EmailJS for contact form integration. Responsive design for various screen sizes. Showcases projects, skills, and experience effectively.',
      image: portfolio,
      category: 'Web App',
      technologies: ['React', "Tailwind CSS", 'EmailJS'],
      github: 'https://github.com/ayushbharne1/portfolio-website',
      demo: 'https://portfolio-website-6ifvrj8ml-ayush-bharnes-projects.vercel.app/'
    },
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-[#eff1f6] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            My Projects
          </h1>
          <p className="text-lg text-[#b3b3b3] max-w-2xl mx-auto">
            A collection of my recent work and personal projects showcasing my skills in web development, design, and problem-solving.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <div className="flex items-center gap-2 text-[#b3b3b3]">
            <Filter size={20} />
            <span className="text-sm font-medium">Filter:</span>
          </div>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-lg font-medium text-sm transition-all ${
                selectedCategory === category
                  ? 'bg-[#ffa116] text-[#0a0a0a]'
                  : 'bg-[#1a1a1a] text-[#b3b3b3] hover:bg-[#2d2d2d] hover:text-white border border-[#2d2d2d]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#1a1a1a] rounded-2xl overflow-hidden border border-[#2d2d2d] hover:border-[#ffa116] transition-all hover:transform hover:scale-[1.02] group"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-[#2d2d2d]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#1a1a1a] to-transparent opacity-60"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#ffa116] transition-colors">
                    {project.title}
                  </h3>
                  <span className="px-3 py-1 bg-[#2d2d2d] text-[#ffa116] text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                </div>

                <p className="text-[#b3b3b3] text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[#0a0a0a] text-[#b3b3b3] text-xs font-medium rounded border border-[#2d2d2d]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#2d2d2d] hover:bg-[#3d3d3d] text-white rounded-lg transition-colors text-sm font-medium"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#ffa116] hover:bg-[#ffb800] text-[#0a0a0a] rounded-lg transition-colors text-sm font-medium"
                  >
                    <ExternalLink size={16} />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-[#b3b3b3] text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;