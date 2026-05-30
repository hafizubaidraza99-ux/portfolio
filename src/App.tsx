import { useEffect, useRef } from 'react';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Experience from './components/Experience';
import InteractiveN8N from './components/InteractiveN8N';
import Testimonials from './components/Testimonials';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const haloRef = useRef<HTMLDivElement | null>(null);

  // Mouse follow effect implementation for the halo glow
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (haloRef.current) {
        haloRef.current.style.left = `${e.clientX}px`;
        haloRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div id="top" className="relative min-h-screen bg-[#09090b] text-zinc-100 overflow-x-hidden selection:bg-emerald-500/20 selection:text-emerald-300">
      
      {/* 1. Global Interactive Graphic Particle Nodes Background */}
      <ParticleBackground />

      {/* 2. Glow Mouse-Follower Halo */}
      <div 
        id="mouse-halo-glowing" 
        ref={haloRef} 
        className="glow-halo opacity-70 hidden sm:block" 
      />

      {/* 3. Global Fixed Navigation */}
      <Navbar />

      {/* 4. Structured Portfolio Modules */}
      <main id="portfolio-main">
        
        {/* Hero Area */}
        <Hero />

        {/* Dynamic Sandbox Playground */}
        <InteractiveN8N />

        {/* About Presentation */}
        <About />

        {/* Optimized Skill Lists */}
        <Skills />

        {/* Unified Technology Badge list */}
        <TechStack />

        {/* Active Projects Showcase */}
        <Projects />

        {/* Service Core Packages */}
        <Services />

        {/* Experience Milestone Timeline */}
        <Experience />

        {/* Social Proof Client Testimonials */}
        <Testimonials />

        {/* Direct Contact & Parameters Form */}
        <Contact />

      </main>

      {/* 5. Clean Footer */}
      <Footer />

    </div>
  );
}
