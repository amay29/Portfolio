import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Zap } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const AboutMe: React.FC = () => {
  const skills = [
    { icon: <Code size={32} />, title: 'Development', desc: 'Writing clean, efficient, and scalable code using modern JS/TS frameworks.' },
    { icon: <Palette size={32} />, title: 'UI/UX Design', desc: 'Crafting visually stunning and intuitive user interfaces that wow the users.' },
    { icon: <Zap size={32} />, title: 'Interactive', desc: 'Implementing smooth animations and micro-interactions to bring websites to life.' }
  ];

  return (
    <section id="about" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="gradient-text">About Me</span>
        </h2>
        
        <div className="glass-card" style={{ padding: '40px', marginBottom: '60px' }}>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.8, textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            I am a passionate frontend developer with a keen eye for aesthetics. 
            I love combining creativity with logic to build web applications that not only function flawlessly but also look breathtaking. 
            My expertise lies in React, modern CSS, and animation libraries to create immersive digital experiences.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {skills.map((skill, index) => (
            <Tilt key={index} tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05} transitionSpeed={2500}>
              <motion.div
                className="glass-card"
                style={{ padding: '30px', textAlign: 'center', height: '100%' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <div style={{ color: 'var(--accent-cyan)', marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                  {skill.icon}
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>{skill.title}</h3>
                <p style={{ color: 'var(--text-secondary)' }}>{skill.desc}</p>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
