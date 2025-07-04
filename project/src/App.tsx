import React, { useState } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { StarField } from './components/StarField';
import { Navigation } from './components/Navigation';
import { Header } from './components/Header';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className="relative min-h-screen bg-gray-900 overflow-x-hidden">
      <StarField />
      <Navigation />
      
      <main className="relative z-10">
        <div id="home">
          <Header />
        </div>
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="relative z-10 text-center py-8 px-6 text-gray-400 border-t border-gray-800">
        <p>&copy; 2024 Sunmeet Kaur | Full Stack Developer | Built with precision & passion.</p>
      </footer>
    </div>
  );
}

export default App;