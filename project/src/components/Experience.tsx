import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

export const Experience: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Novoinvent Software Pvt Ltd",
      period: "Oct 2023 - Present",
      type: "Full-time",
      description: "Leading full-stack development projects, architecting scalable solutions, and mentoring junior developers.",
      technologies: ["Angular", "React", "Node.js", "MongoDB", "REST APIs"]
    },
    {
      title: "Full Stack Developer Intern",
      company: "Novoinvent Software Pvt Ltd",
      period: "Mar 2023 - Sep 2023",
      type: "Internship",
      description: "Developed responsive web applications, implemented backend APIs, and gained hands-on experience in modern development practices.",
      technologies: ["Angular", "Node.js", "MongoDB", "JWT", "Razorpay Integration"]
    }
  ];

  return (
    <section id="experience" className="relative py-20 px-6 text-white overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-10 left-10 w-3 h-3 bg-blue-400 rounded-full animate-pulse opacity-40"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        ></div>
        <div 
          className="absolute top-1/3 right-20 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-30"
          style={{ transform: `translateY(${scrollY * -0.15}px)` }}
        ></div>
        <div 
          className="absolute bottom-20 left-1/4 w-4 h-4 bg-cyan-400 rounded-full animate-pulse opacity-50"
          style={{ transform: `translateY(${scrollY * 0.08}px)` }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto">
        <h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          style={{ transform: `translateY(${Math.max(0, (scrollY - 400) * -0.1)}px)` }}
        >
          Journey Through Space & Time
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 opacity-50"></div>

          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              style={{ 
                transform: `translateY(${Math.max(0, (scrollY - 600 - index * 200) * (index % 2 === 0 ? -0.05 : 0.05))}px)` 
              }}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg z-10">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse opacity-50"></div>
              </div>

              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-blue-400/50 group hover:transform hover:scale-105">
                  <div className="flex items-center gap-3 mb-4">
                    <Briefcase className="w-6 h-6 text-blue-400" />
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
                      {exp.type}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                    {exp.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 mb-2 text-gray-300">
                    <MapPin className="w-4 h-4" />
                    <span className="font-semibold">{exp.company}</span>
                  </div>

                  <div className="flex items-center gap-2 mb-4 text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>

                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm border border-purple-500/30 hover:bg-purple-500/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};