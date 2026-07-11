import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import profilePic from '../assets/profile.png';
import Magnetic from './Magnetic';

const Hero: React.FC = () => {
  return (
    <section className="section-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: '160px', position: 'relative' }}>
      
      <div style={{ position: 'relative', zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        >
          <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '20px', fontWeight: 600 }}>
            <span style={{ display: 'inline-block', width: '40px', height: '2px', background: 'var(--text-primary)', verticalAlign: 'middle', marginRight: '16px' }}></span>
            Damar Alam
          </h2>
          
          {/* Giant Brutalist Typography */}
          <h1 style={{ 
            fontSize: 'clamp(4rem, 12vw, 15rem)', 
            lineHeight: 0.9, 
            textTransform: 'uppercase', 
            letterSpacing: '-0.03em', 
            margin: '0 0 20px -5px',
            wordWrap: 'break-word'
          }}>
            CREATIVE <br />
            <span style={{ color: 'var(--accent-primary)', textShadow: '2px 2px 0 var(--text-primary), -1px -1px 0 var(--text-primary), 1px -1px 0 var(--text-primary), -1px 1px 0 var(--text-primary), 1px 1px 0 var(--text-primary)' }}>
              DEVELOPER
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'flex-start', marginTop: '40px' }}
        >
          <p style={{ maxWidth: '400px', fontSize: '1.1rem', fontWeight: 500, lineHeight: 1.5 }}>
            I engineer digital experiences that are functional, fast, and visually striking. Refusing to settle for ordinary.
          </p>
          
          <div style={{ display: 'flex', gap: '16px' }}>
            <Magnetic>
              <a href="#projects" className="btn">View Work</a>
            </Magnetic>
          </div>
        </motion.div>
      </div>

      {/* Accent Profile Picture */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 5 }}
        transition={{ duration: 1, delay: 0.8, type: 'spring' }}
        style={{
          position: 'absolute',
          right: '5%',
          top: '30%',
          width: '250px',
          height: '320px',
          zIndex: 1,
          display: 'none' // We'll show it only on larger screens via media queries in standard CSS, but inline for now we can just display it.
        }}
        className="hero-image-wrapper"
      >
        <img
          src={profilePic}
          alt="Damar Alam"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            border: '2px solid var(--text-primary)',
            boxShadow: '10px 10px 0 var(--accent-primary)',
            filter: 'grayscale(100%) contrast(1.2)'
          }}
        />
        {/* Decorative Tape/Sticker */}
        <div style={{
          position: 'absolute',
          top: '-15px',
          left: '-20px',
          background: 'var(--text-primary)',
          color: 'var(--bg-primary)',
          padding: '5px 15px',
          fontFamily: 'var(--font-sans)',
          fontWeight: 'bold',
          transform: 'rotate(-15deg)',
          fontSize: '0.8rem',
          textTransform: 'uppercase'
        }}>
          EST. 2026
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{ position: 'absolute', bottom: '40px', left: '5%' }}
      >
        <a href="#about" style={{ color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', fontWeight: 600, textTransform: 'uppercase', fontSize: '0.9rem' }}>
          <span>Scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <ArrowDown size={24} />
          </motion.div>
        </a>
      </motion.div>
      
      {/* Responsive styles hack using a style tag since it's a small tweak */}
      <style>{`
        @media (min-width: 1024px) {
          .hero-image-wrapper { display: block !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
