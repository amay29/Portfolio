import React, { useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import project1Pic from '../assets/project_1.png';
import project2Pic from '../assets/project_2.png';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Tirta Asri Hub',
      type: 'Community Platform',
      image: project1Pic,
      link: 'https://github.com/amay29/tirta-asri'
    },
    {
      title: 'Lumiere Shop',
      type: 'E-Commerce System',
      image: project2Pic,
      link: '#'
    }
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  // Mouse tracking for image reveal
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section id="projects" className="section-container border-t">
      <div style={{ marginBottom: '60px' }}>
        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.02em', textTransform: 'uppercase' }}>
          Selected Works
        </h2>
      </div>

      <div style={{ borderTop: '2px solid var(--text-primary)' }}>
        {projects.map((project, index) => (
          <a 
            key={index} 
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              padding: '40px 0',
              borderBottom: '2px solid var(--text-primary)',
              textDecoration: 'none',
              color: 'var(--text-primary)',
              position: 'relative'
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <motion.div 
              style={{ display: 'flex', flexDirection: 'column' }}
              animate={{ x: hoveredIndex === index ? 20 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 style={{ 
                fontSize: 'clamp(2rem, 4vw, 4rem)', 
                margin: 0, 
                textTransform: 'uppercase', 
                fontFamily: 'var(--font-sans)',
                fontWeight: 800,
                color: hoveredIndex === index ? 'var(--accent-primary)' : 'var(--text-primary)',
                textShadow: hoveredIndex === index ? '1px 1px 0 var(--text-primary), -1px -1px 0 var(--text-primary), 1px -1px 0 var(--text-primary), -1px 1px 0 var(--text-primary)' : 'none'
              }}>
                {project.title}
              </h3>
              <span style={{ fontSize: '1rem', textTransform: 'uppercase', fontWeight: 500 }}>
                {project.type}
              </span>
            </motion.div>
            
            <motion.div
              animate={{ rotate: hoveredIndex === index ? 45 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowUpRight size={48} strokeWidth={1.5} />
            </motion.div>
          </a>
        ))}
      </div>

      {/* Hover Image Reveal Container */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
          zIndex: 90,
          width: '350px',
          height: '250px',
          overflow: 'hidden',
          opacity: hoveredIndex !== null ? 1 : 0,
          scale: hoveredIndex !== null ? 1 : 0.8,
          boxShadow: '10px 10px 0 var(--text-primary)',
          border: '2px solid var(--text-primary)',
          background: 'var(--bg-primary)'
        }}
        transition={{ opacity: { duration: 0.2 }, scale: { duration: 0.3 } }}
      >
        <motion.div 
          style={{ width: '100%', height: '100%', position: 'relative' }}
          animate={{ y: hoveredIndex !== null ? `-${hoveredIndex * 100}%` : 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        >
          {projects.map((project, idx) => (
            <img 
              key={idx}
              src={project.image} 
              alt={project.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
