import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Code, Sparkles } from 'lucide-react';

export const Header: React.FC = () => {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  const skills = [
    "Angular Developer",
     "MongoDB Architect",
    "Full Stack Engineer",
    "REST API Designer",
    "React Specialist", 
    "Node.js Expert",
    "UI/UX Developer",
    "JavaScript Ninja",
    "TypeScript Pro",
    "Fintech Developer"
  ];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const currentSkill = skills[currentSkillIndex];
    let timeoutId: NodeJS.Timeout;

    if (isTyping) {
      // Typing effect
      if (displayedText.length < currentSkill.length) {
        timeoutId = setTimeout(() => {
          setDisplayedText(currentSkill.slice(0, displayedText.length + 1));
        }, 100); // Typing speed
      } else {
        // Pause before erasing
        timeoutId = setTimeout(() => {
          setIsTyping(false);
        }, 2000); // Pause duration
      }
    } else {
      // Erasing effect
      if (displayedText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 50); // Erasing speed (faster than typing)
      } else {
        // Move to next skill
        setCurrentSkillIndex((prev) => (prev + 1) % skills.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [displayedText, isTyping, currentSkillIndex, skills]);

  return (
    <header className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Enhanced animated background elements with scroll parallax */}
      <div className="absolute inset-0 z-10">
        <div 
          className="absolute top-20 left-20 w-4 h-4 bg-blue-400 rounded-full animate-pulse opacity-70"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        ></div>
        <div 
          className="absolute top-40 right-32 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-60"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        ></div>
        <div 
          className="absolute bottom-40 left-1/3 w-3 h-3 bg-cyan-400 rounded-full animate-pulse opacity-50"
          style={{ transform: `translateY(${scrollY * -0.2}px)` }}
        ></div>
        <div 
          className="absolute bottom-20 right-20 w-2 h-2 bg-pink-400 rounded-full animate-ping opacity-70"
          style={{ transform: `translateY(${scrollY * -0.4}px)` }}
        ></div>
        <div 
          className="absolute top-1/3 left-10 w-1 h-1 bg-yellow-400 rounded-full animate-pulse opacity-80"
          style={{ transform: `translateY(${scrollY * 0.6}px)` }}
        ></div>
        <div 
          className="absolute top-2/3 right-10 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-40"
          style={{ transform: `translateY(${scrollY * -0.3}px)` }}
        ></div>
      </div>

      <div className="relative z-20 text-center max-w-4xl mx-auto px-6">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div 
              className="w-32 h-32 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 rounded-full flex items-center justify-center shadow-2xl"
              style={{ transform: `translateY(${scrollY * -0.1}px)` }}
            >
              <Code className="w-16 h-16 text-white" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 rounded-full animate-pulse opacity-50"></div>
          </div>
        </div>

        <h1 
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
          style={{ transform: `translateY(${scrollY * -0.05}px)` }}
        >
          Full Stack Developer
        </h1>
        
        <p 
          className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto leading-relaxed"
          style={{ transform: `translateY(${scrollY * -0.03}px)` }}
        >
          Crafting digital experiences across the universe of web development
        </p>

        <div 
          className="flex justify-center items-center gap-6 mb-12"
          style={{ transform: `translateY(${scrollY * -0.02}px)` }}
        >
          <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
          <div className="text-lg text-gray-400 min-h-[28px] flex items-center min-w-[280px]"
           style={{ display: 'flex', justifyContent: 'center' }}>
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">
              {displayedText}
              <span className="animate-pulse text-blue-400">|</span>
            </span>
          </div>
          <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
        </div>

        <div 
          className="flex justify-center gap-6"
          style={{ transform: `translateY(${scrollY * -0.01}px)` }}
        >
          <a
            href="#contact"
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Get In Touch
          </a>
          <a
            href="#projects"
            className="px-8 py-3 border-2 border-cyan-400 rounded-full font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
          >
            View Projects
          </a>
        </div>

        <div 
          className="flex justify-center gap-6 mt-8"
          style={{ transform: `translateY(${scrollY * 0.01}px)` }}
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 hover:scale-110 group"
          >
            <Github className="w-6 h-6 group-hover:text-blue-400" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 hover:scale-110 group"
          >
            <Linkedin className="w-6 h-6 group-hover:text-blue-400" />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 hover:scale-110 group"
          >
            <Mail className="w-6 h-6 group-hover:text-blue-400" />
          </a>
        </div>
      </div>

      {/* Enhanced floating geometric shapes with scroll parallax */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div 
          className="absolute top-1/4 left-1/4 w-16 h-16 border border-blue-400 transform rotate-45 animate-spin opacity-20" 
          style={{ 
            animationDuration: '10s',
            transform: `rotate(45deg) translateY(${scrollY * 0.2}px)`
          }}
        ></div>
        <div 
          className="absolute top-3/4 right-1/4 w-12 h-12 border border-purple-400 transform rotate-45 animate-spin opacity-20" 
          style={{ 
            animationDuration: '15s',
            transform: `rotate(45deg) translateY(${scrollY * -0.15}px)`
          }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/6 w-8 h-8 border border-cyan-400 transform rotate-45 animate-spin opacity-15" 
          style={{ 
            animationDuration: '12s',
            transform: `rotate(45deg) translateY(${scrollY * 0.25}px)`
          }}
        ></div>
        <div 
          className="absolute bottom-1/3 right-1/6 w-6 h-6 border border-pink-400 transform rotate-45 animate-spin opacity-25" 
          style={{ 
            animationDuration: '8s',
            transform: `rotate(45deg) translateY(${scrollY * -0.1}px)`
          }}
        ></div>
      </div>
    </header>
  );
};