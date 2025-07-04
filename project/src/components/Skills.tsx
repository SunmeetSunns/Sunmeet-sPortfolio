import React, { useState, useEffect } from 'react';
import { Code2, Database, Server, Smartphone, Globe, Shield } from 'lucide-react';

export const Skills: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code2 className="w-6 h-6" />,
      skills: ["React", "Angular", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"],
      color: "from-blue-400 to-cyan-400"
    },
    {
      title: "Backend",
      icon: <Server className="w-6 h-6" />,
      skills: ["Node.js", "Express.js", "REST APIs", "JWT", "Middleware", "API Design"],
      color: "from-green-400 to-teal-400"
    },
    {
      title: "Database",
      icon: <Database className="w-6 h-6" />,
      skills: ["MongoDB", "Mongoose", "Database Design", "Aggregation", "Indexing"],
      color: "from-purple-400 to-pink-400"
    },
    {
      title: "Mobile & Web",
      icon: <Smartphone className="w-6 h-6" />,
      skills: ["Progressive Web Apps", "Mobile-First Design", "Cross-Platform", "Performance Optimization"],
      color: "from-orange-400 to-red-400"
    },
    {
      title: "Integration",
      icon: <Globe className="w-6 h-6" />,
      skills: ["Razorpay Integration", "Email OTP", "Third-party APIs", "Webhooks"],
      color: "from-indigo-400 to-purple-400"
    },
    {
      title: "Tools & Deployment",
      icon: <Shield className="w-6 h-6" />,
      skills: ["GitHub", "Git", "Deployment", "CI/CD", "Testing", "Debugging"],
      color: "from-yellow-400 to-orange-400"
    }
  ];

  return (
    <section id="skills" className="relative py-20 px-6 text-white overflow-hidden">
      {/* Floating cosmic particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-16 left-16 w-3 h-3 bg-blue-400 rounded-full animate-pulse opacity-50"
          style={{ transform: `translateY(${scrollY * 0.08}px) rotate(${scrollY * 0.1}deg)` }}
        ></div>
        <div 
          className="absolute top-1/3 right-12 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-40"
          style={{ transform: `translateY(${scrollY * -0.12}px) rotate(${scrollY * -0.05}deg)` }}
        ></div>
        <div 
          className="absolute bottom-1/4 left-1/4 w-4 h-4 bg-cyan-400 rounded-full animate-pulse opacity-30"
          style={{ transform: `translateY(${scrollY * 0.15}px) rotate(${scrollY * 0.08}deg)` }}
        ></div>
        <div 
          className="absolute bottom-16 right-1/3 w-1 h-1 bg-pink-400 rounded-full animate-ping opacity-60"
          style={{ transform: `translateY(${scrollY * -0.1}px) rotate(${scrollY * -0.12}deg)` }}
        ></div>
        <div 
          className="absolute top-2/3 left-12 w-2 h-2 bg-yellow-400 rounded-full animate-pulse opacity-45"
          style={{ transform: `translateY(${scrollY * 0.06}px) rotate(${scrollY * 0.15}deg)` }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          style={{ transform: `translateY(${Math.max(0, (scrollY - 1800) * -0.1)}px)` }}
        >
          Technical Constellation
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:transform hover:scale-105"
              style={{ 
                transform: `translateY(${Math.max(0, (scrollY - 2000 - index * 50) * (index % 2 === 0 ? -0.02 : 0.02))}px)`,
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Floating skill card background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:rotate-12`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-700/50 transition-all duration-300 group/skill hover:transform hover:translateX-2"
                      style={{ 
                        animationDelay: `${(index * 100) + (skillIndex * 50)}ms`
                      }}
                    >
                      <div className="w-2 h-2 bg-blue-400 rounded-full group-hover/skill:bg-cyan-400 transition-colors group-hover/skill:animate-pulse"></div>
                      <span className="text-gray-300 group-hover/skill:text-white transition-colors">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating particles around skill cards */}
              <div className="absolute top-2 right-2 w-1 h-1 bg-blue-400 rounded-full animate-pulse opacity-40 group-hover:opacity-80"></div>
              <div className="absolute bottom-2 left-2 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-30 group-hover:opacity-60"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};