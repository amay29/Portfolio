import React from 'react';
import { motion } from 'framer-motion';

const AboutMe: React.FC = () => {
  const skills = [
    "TypeScript", "React", "Next.js", "Node.js", 
    "Framer Motion", "Tailwind", "PostgreSQL", "UI/UX"
  ];

  return (
    <section id="about" className="section-container border-t">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px', paddingBottom: '60px' }}>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.02em', textTransform: 'uppercase', marginBottom: '20px' }}>
            The Architect <br />
            <span style={{ color: 'var(--accent-primary)', textShadow: '1px 1px 0 var(--text-primary), -1px -1px 0 var(--text-primary), 1px -1px 0 var(--text-primary), -1px 1px 0 var(--text-primary)' }}>
              of Experience
            </span>
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', marginTop: '40px' }}>
            <div style={{ fontSize: '1.25rem', lineHeight: 1.6, fontWeight: 400 }}>
              <p style={{ marginBottom: '20px' }}>
                I am not just writing code. I am crafting digital ecosystems. With a background in both design and robust backend architecture, I bridge the gap between aesthetics and performance.
              </p>
              <p>
                Every pixel is considered. Every animation is intentional. I believe that a website should not only inform, but it should provoke a feeling. That's what I build.
              </p>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ border: '2px solid var(--text-primary)', padding: '24px', position: 'relative', background: 'var(--bg-primary)' }}>
                {/* Brutalist tape detail */}
                <div style={{ position: 'absolute', top: -10, left: 20, width: 60, height: 20, background: 'var(--accent-primary)', border: '1px solid var(--text-primary)', transform: 'rotate(-5deg)' }}></div>
                
                <h3 style={{ fontFamily: 'var(--font-sans)', textTransform: 'uppercase', fontSize: '1rem', borderBottom: '1px solid var(--text-primary)', paddingBottom: '10px', marginBottom: '20px' }}>
                  The Arsenal
                </h3>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {skills.map((skill, i) => (
                    <span key={i} style={{ 
                      padding: '8px 16px', 
                      background: 'var(--text-primary)', 
                      color: 'var(--bg-primary)', 
                      fontSize: '0.9rem', 
                      fontWeight: 'bold',
                      textTransform: 'uppercase'
                    }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
