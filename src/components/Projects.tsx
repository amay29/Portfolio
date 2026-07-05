import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import project1Pic from '../assets/project_1.png';
import project2Pic from '../assets/project_2.png';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Tirta Asri Hub',
      desc: 'A web-based neighborhood (RT) community management platform designed to digitize monthly residency fees, ensure financial cash flow transparency, and streamline administrative services efficiently and securely.',
      image: project1Pic,
      tags: ['Next.js', 'API Routes', 'jose', 'PostgreSQL', 'Prisma ORM'],
      demo: '#',
      github: '#'
    },
    {
      title: 'Lumiere E-commerce',
      desc: 'A creative and interactive e-commerce platform with neon accents and sleek product displays.',
      image: project2Pic,
      tags: ['Next.js', 'Tailwind', 'Stripe', 'Zustand'],
      demo: '#',
      github: '#'
    }
  ];

  return (
    <section id="projects" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="gradient-text">Featured Projects</span>
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
          {projects.map((project, index) => (
            <Tilt key={index} tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2000}>
              <motion.div
                className="glass-card"
                style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', overflow: 'hidden', padding: '30px' }}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div style={{ order: index % 2 === 0 ? 1 : 2, overflow: 'hidden', borderRadius: '16px' }}>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px' }}
                  />
                </div>
                <div style={{ order: index % 2 === 0 ? 2 : 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h3 style={{ fontSize: '2rem', marginBottom: '20px' }}>{project.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '25px' }}>{project.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '30px' }}>
                    {project.tags.map(tag => (
                      <span key={tag} style={{ background: 'rgba(0, 229, 255, 0.1)', color: 'var(--accent-cyan)', padding: '6px 12px', borderRadius: '20px', fontSize: '0.9rem' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div style={{ display: 'flex', gap: '16px' }}>
                    <a href={project.demo} className="btn btn-primary" style={{ flex: 1 }}>
                      <ExternalLink size={18} /> Live Demo
                    </a>
                    <a href={project.github} className="btn btn-outline" style={{ flex: 1 }}>
                      <FaGithub size={18} /> Source Code
                    </a>
                  </div>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
