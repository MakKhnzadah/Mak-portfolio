import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Import components
import NavigationBar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

// Import utilities
import { initSectionAnimations } from './utils/animations';

function App() {
  useEffect(() => {
    // Initialize section animations when component mounts
    initSectionAnimations();
  }, []);

  return (
    <div className="App">
      <LoadingScreen />
      <NavigationBar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
      </main>
      <Footer />
    </div>
  );
}

export default App;
