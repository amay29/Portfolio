import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import profilePic from '../assets/profile.png';

const Hero: React.FC = () => {
  return (
    <section className="section-container" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center' }}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 style={{ color: 'var(--accent-cyan)', fontSize: '1.5rem', marginBottom: '10px' }}>Hello, I'm Damar</h2>
          <h1 className="gradient-text">A Creative Full-Stack Developer</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '30px', maxWidth: '500px' }}>
            I specialize in building interactive, beautiful, and engaging web experiences using modern technologies.
            Let's turn your ideas into digital reality.
          </p>
          <div style={{ display: 'flex', gap: '16px' }}>
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}
        >
          <div style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-purple))',
            borderRadius: '50%',
            filter: 'blur(60px)',
            opacity: 0.3,
            zIndex: -1,
            animation: 'float 6s infinite ease-in-out'
          }}></div>
          <img
            src={profilePic}
            alt="Profile"
            style={{
              width: '100%',
              maxWidth: '400px',
              borderRadius: '24px',
              border: '2px solid var(--glass-border)',
              boxShadow: 'var(--glass-shadow)',
              objectFit: 'cover'
            }}
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)' }}
      >
        <a href="#about" style={{ color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '0.9rem' }}>Scroll Down</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown size={20} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
