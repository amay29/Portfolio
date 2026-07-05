import { motion, useScroll, useSpring } from 'framer-motion';

import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Socials from './components/Socials';
import CustomCursor from './components/CustomCursor';
import StarBackground from './components/ParticleBackground';
import { Preloader } from './components/Preloader';
import { useState } from 'react';

function App() {
  const [introFinished, setIntroFinished] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const techStack = [
    "REACT", "TYPESCRIPT", "FRAMER MOTION", "UI/UX DESIGN", "NODE.JS", "VITE", "TAILWIND", "NEXT.JS"
  ];

  return (
    <>
      <CustomCursor />
      
      {!introFinished && <Preloader onComplete={() => setIntroFinished(true)} />}

      <StarBackground />

      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, var(--accent-cyan), var(--accent-purple))',
          transformOrigin: '0%',
          scaleX,
          zIndex: 1000
        }}
      />

      <div className="bg-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      <nav style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        padding: '20px 40px', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        background: 'rgba(6, 11, 25, 0.7)',
        backdropFilter: 'blur(10px)',
        zIndex: 100,
        borderBottom: '1px solid var(--glass-border)'
      }}>
        <div style={{ fontWeight: 'bold', fontSize: '1.5rem', color: 'var(--accent-cyan)' }}>MyPortfolio</div>
        <div style={{ display: 'flex', gap: '24px' }}>
          <a href="#about" style={{ fontWeight: 500 }}>About</a>
          <a href="#projects" style={{ fontWeight: 500 }}>Projects</a>
          <a href="#contact" style={{ fontWeight: 500 }}>Contact</a>
        </div>
      </nav>

      <main>
        <Hero />
        
        <div style={{ padding: '40px 0', background: 'rgba(10, 17, 40, 0.4)', borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)', transform: 'rotate(-2deg) scale(1.05)', margin: '40px 0', zIndex: 10, position: 'relative', overflow: 'hidden', display: 'flex', whiteSpace: 'nowrap' }}>
          <div className="marquee-content" style={{ display: 'flex', animation: 'scroll 20s linear infinite' }}>
            {[...techStack, ...techStack, ...techStack].map((tech, index) => (
              <div key={index} style={{ 
                margin: '0 40px', 
                fontSize: '2.5rem', 
                fontWeight: 800, 
                color: 'rgba(255, 255, 255, 0.05)',
                WebkitTextStroke: '1px rgba(0, 229, 255, 0.3)'
              }}>
                {tech}
              </div>
            ))}
          </div>
        </div>

        <AboutMe />
        <Projects />
        <Socials />
      </main>
      
      <footer style={{ 
        textAlign: 'center', 
        padding: '30px', 
        borderTop: '1px solid var(--glass-border)',
        color: 'var(--text-secondary)',
        marginTop: '60px'
      }}>
        <p>© {new Date().getFullYear()} My Interactive Portfolio. Built with React & Framer Motion.</p>
      </footer>
    </>
  );
}

export default App;
