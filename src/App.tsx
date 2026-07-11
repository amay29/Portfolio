import { motion, useScroll, useSpring } from 'framer-motion';

import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Socials from './components/Socials';
import CustomCursor from './components/CustomCursor';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <CustomCursor />

      {/* Progress Bar */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '6px',
          background: 'var(--accent-primary)',
          transformOrigin: '0%',
          scaleX,
          zIndex: 1000
        }}
      />

      {/* Brutalist Navigation */}
      <nav style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        padding: '24px 5%', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        background: 'var(--bg-primary)',
        zIndex: 100,
        borderBottom: '2px solid var(--text-primary)'
      }}>
        <div style={{ fontFamily: 'var(--font-serif)', fontWeight: 900, fontSize: '1.8rem', letterSpacing: '-0.02em' }}>
          DAMAR.
        </div>
        <div style={{ display: 'flex', gap: '32px', fontFamily: 'var(--font-sans)', fontWeight: 600, textTransform: 'uppercase', fontSize: '0.9rem' }}>
          <a href="#about" style={{ color: 'var(--text-primary)' }}>About</a>
          <a href="#projects" style={{ color: 'var(--text-primary)' }}>Projects</a>
          <a href="#contact" style={{ color: 'var(--text-primary)' }}>Contact</a>
        </div>
      </nav>

      <main>
        <Hero />
        <AboutMe />
        <Projects />
        <Socials />
      </main>
      
      {/* Editorial Footer */}
      <footer style={{ 
        padding: '60px 5%', 
        borderTop: '2px solid var(--text-primary)',
        background: 'var(--text-primary)',
        color: 'var(--bg-primary)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '40px' }}>
          <div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '3rem', color: 'var(--bg-primary)', marginBottom: '0' }}>Let's build something.</h2>
            <p style={{ fontFamily: 'var(--font-sans)', opacity: 0.7, marginTop: '10px' }}>Based in Indonesia. Available globally.</p>
          </div>
          <div style={{ textAlign: 'right', fontFamily: 'var(--font-sans)', fontSize: '0.9rem' }}>
            <p>© {new Date().getFullYear()} Damar Alam.</p>
            <p style={{ opacity: 0.5 }}>Designed with precision.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
