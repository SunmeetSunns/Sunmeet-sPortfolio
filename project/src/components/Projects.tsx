import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Smartphone, Globe, DollarSign, Play } from 'lucide-react';

export const Projects: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "Wealth Sphere",
      description: "A sophisticated smart portfolio manager that helps users track, analyze, and optimize their investment portfolios with real-time market data and AI-driven insights.",
      technologies: ["Angular", "Node.js", "MongoDB", "Chart.js", "Real-time APIs"],
      icon: <DollarSign className="w-8 h-8" />,
      gradient: "from-green-400 to-blue-500",
      features: ["Real-time portfolio tracking", "Investment analytics", "Risk assessment", "Performance insights"],
      liveDemo: "https://deft-starship-250f12.netlify.app/",
      githubLink: "https://github.com/SunmeetSunns/wealthSphere"
    },
    {
      title: "EarnProjects",
      description: "A revolutionary no-bidding freelance platform that connects clients with developers seamlessly. Built complete frontend and backend architecture for optimal user experience.",
      technologies: ["Angular", "Node.js", "MongoDB", "JWT", "REST APIs"],
      icon: <Smartphone className="w-8 h-8" />,
      gradient: "from-purple-400 to-pink-500",
      features: ["No-bidding system", "Secure authentication", "Real-time messaging", "Project management"],
      liveDemo: "https://earnprojects.com",
      githubLink: "https://github.com/SunmeetSunns/EarnProjects"
    },
    {
      title: "Mayberry Investment Limited",
      description: "A comprehensive fintech solution designed for a Jamaican investment firm, featuring advanced portfolio management and client relationship tools.",
      technologies: ["Angular", "Node.js", "MongoDB", "Razorpay", "Email OTP"],
      icon: <Globe className="w-8 h-8" />,
      gradient: "from-cyan-400 to-blue-500",
      features: ["Investment management", "Client portal", "Payment integration", "Secure authentication"],
      liveDemo: "https://cmptraining.milnp.net/",
      githubLink: ""
    },
    {
      title: "Netflix Clone",
      description: "A pixel-perfect, modern replica of the Netflix streaming platform with responsive design, user authentication, and video streaming capabilities.",
      technologies: ["React", "Node.js", "MongoDB", "Video APIs", "Responsive Design"],
      icon: <Play className="w-8 h-8" />,
      gradient: "from-red-400 to-pink-500",
      features: ["Video streaming", "User profiles", "Search functionality", "Responsive design"],
      liveDemo: "https://lucent-piroshki-58d84e.netlify.app/",
      githubLink: "https://github.com/SunmeetSunns/CollegeProject_Netflix"
    }
  ];

  return (
    <section id="projects" className="relative py-20 px-6 text-white overflow-hidden">
      {/* Floating background particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-20 right-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60"
          style={{ transform: `translateY(${scrollY * 0.12}px)` }}
        ></div>
        <div 
          className="absolute top-1/2 left-10 w-3 h-3 bg-purple-400 rounded-full animate-ping opacity-40"
          style={{ transform: `translateY(${scrollY * -0.08}px)` }}
        ></div>
        <div 
          className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-pulse opacity-70"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        ></div>
        <div 
          className="absolute top-1/4 left-1/3 w-2 h-2 bg-pink-400 rounded-full animate-ping opacity-50"
          style={{ transform: `translateY(${scrollY * -0.1}px)` }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          style={{ transform: `translateY(${Math.max(0, (scrollY - 1000) * -0.1)}px)` }}
        >
          Cosmic Creations
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-blue-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 overflow-hidden hover:transform hover:scale-105"
              style={{ 
                transform: `translateY(${Math.max(0, (scrollY - 1200 - index * 100) * (index % 2 === 0 ? -0.03 : 0.03))}px)` 
              }}
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {project.icon}
                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-purple-400">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-400">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm border border-blue-500/30 hover:bg-blue-500/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-lg hover:border-blue-400 hover:text-blue-400 transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                </div>
              </div>

              {/* Enhanced particle effects */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-40"></div>
              <div className="absolute top-1/2 right-8 w-1 h-1 bg-cyan-400 rounded-full animate-pulse opacity-50"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
