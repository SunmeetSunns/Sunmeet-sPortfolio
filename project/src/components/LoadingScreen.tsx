import React, { useState, useEffect } from 'react';
import { Code, Star, Sparkles, Rocket } from 'lucide-react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [showRocket, setShowRocket] = useState(false);

  const loadingTexts = [
    'Initializing cosmic systems...',
    'Loading stellar components...',
    'Connecting to the galaxy...',
    'Preparing portfolio data...',
    'Calibrating animations...',
    'Almost ready to launch...'
  ];

  useEffect(() => {
    const duration = 4000; // 4 seconds total loading time
    const interval = 50; // Update every 50ms
    const increment = 100 / (duration / interval);

    const progressTimer = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + increment;
        if (newProgress >= 100) {
          clearInterval(progressTimer);
          setShowRocket(true);
          setTimeout(() => {
            onLoadingComplete();
          }, 1000);
          return 100;
        }
        return newProgress;
      });
    }, interval);

    return () => clearInterval(progressTimer);
  }, [onLoadingComplete]);

  useEffect(() => {
    const textIndex = Math.floor((progress / 100) * loadingTexts.length);
    const currentLoadingText = loadingTexts[Math.min(textIndex, loadingTexts.length - 1)];
    
    let charIndex = 0;
    const typeText = () => {
      if (charIndex < currentLoadingText.length) {
        setCurrentText(currentLoadingText.slice(0, charIndex + 1));
        charIndex++;
        setTimeout(typeText, 30);
      }
    };
    
    setCurrentText('');
    typeText();
  }, [Math.floor((progress / 100) * loadingTexts.length)]);

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-gray-950 via-slate-900 to-gray-900 flex items-center justify-center overflow-hidden">
      {/* Subtle Animated Background Stars */}
      <div className="absolute inset-0">
        {[...Array(150)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              width: `${Math.random() * 2 + 0.5}px`,
              height: `${Math.random() * 2 + 0.5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
              opacity: Math.random() * 0.6 + 0.2
            }}
          />
        ))}
      </div>

      {/* Subtle Floating Cosmic Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-300 rounded-full animate-bounce opacity-30" 
             style={{ animationDelay: '0s', animationDuration: '4s' }} />
        <div className="absolute top-40 right-32 w-1 h-1 bg-purple-300 rounded-full animate-bounce opacity-25" 
             style={{ animationDelay: '1s', animationDuration: '3.5s' }} />
        <div className="absolute bottom-40 left-1/3 w-3 h-3 bg-slate-400 rounded-full animate-bounce opacity-20" 
             style={{ animationDelay: '0.5s', animationDuration: '5s' }} />
        <div className="absolute bottom-20 right-20 w-1 h-1 bg-gray-400 rounded-full animate-bounce opacity-35" 
             style={{ animationDelay: '1.5s', animationDuration: '3s' }} />
      </div>

      {/* Main Loading Content */}
      <div className="relative z-10 text-center max-w-lg mx-auto px-6">
        {/* Subtle Logo Animation */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div 
              className="w-20 h-20 bg-gradient-to-br from-slate-600 via-gray-600 to-slate-700 rounded-full flex items-center justify-center shadow-2xl animate-spin border border-gray-600"
              style={{ animationDuration: '4s' }}
            >
              <Code className="w-10 h-10 text-gray-200" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-slate-600 via-gray-600 to-slate-700 rounded-full animate-pulse opacity-20"></div>
            
            {/* Subtle Orbiting Elements */}
            <div className="absolute inset-0 animate-spin" style={{ animationDuration: '6s' }}>
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-400 rounded-full opacity-40" />
              <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-1 h-1 bg-slate-400 rounded-full opacity-50" />
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-500 rounded-full opacity-30" />
              <div className="absolute top-1/2 -left-1 transform -translate-y-1/2 w-1 h-1 bg-slate-500 rounded-full opacity-40" />
            </div>
          </div>
        </div>

        {/* Portfolio Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-gray-300 via-slate-200 to-gray-400 bg-clip-text text-transparent">
          Sunmeet's Portfolio
        </h1>

        {/* Loading Text with Typewriter Effect */}
        <div className="mb-8 h-8 flex items-center justify-center">
          <p className="text-base text-gray-400 font-medium">
            {currentText}
            <span className="animate-pulse text-gray-300 ml-1">|</span>
          </p>
        </div>

        {/* Subtle Progress Bar */}
        <div className="mb-6">
          <div className="w-full bg-gray-800 rounded-full h-1 overflow-hidden border border-gray-700">
            <div 
              className="h-full bg-gradient-to-r from-gray-500 via-slate-400 to-gray-500 rounded-full transition-all duration-300 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-slate-300 animate-pulse opacity-30"></div>
            </div>
          </div>
          <p className="text-center text-xs text-gray-500 mt-2">
            {Math.round(progress)}%
          </p>
        </div>

        {/* Subtle Sparkles Animation */}
        <div className="flex justify-center gap-4 mb-4">
          <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce opacity-40" style={{ animationDelay: '0s' }} />
          <div className="w-1 h-1 bg-slate-400 rounded-full animate-bounce opacity-50" style={{ animationDelay: '0.2s' }} />
          <div className="w-1 h-1 bg-gray-500 rounded-full animate-bounce opacity-30" style={{ animationDelay: '0.4s' }} />
          <div className="w-1 h-1 bg-slate-500 rounded-full animate-bounce opacity-45" style={{ animationDelay: '0.6s' }} />
        </div>

        {/* Subtle Rocket Launch Animation */}
        {showRocket && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-rocket-launch">
              <Rocket className="w-12 h-12 text-gray-300 transform rotate-45" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-400 to-transparent opacity-20 animate-pulse"></div>
            </div>
          </div>
        )}
      </div>

      {/* Subtle Cosmic Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gray-500 rounded-full animate-float opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Subtle Nebula Effect */}
      <div className="absolute inset-0 bg-gradient-radial from-slate-800/10 via-transparent to-transparent pointer-events-none"></div>
    </div>
  );
};