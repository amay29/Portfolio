import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Magnetic from './Magnetic';

const Socials: React.FC = () => {
  const socials = [
    { icon: <FaGithub size={24} />, link: 'https://github.com/amay29', name: 'GitHub' },
    { icon: <FaLinkedin size={24} />, link: 'https://www.linkedin.com/in/damar-alam-65b577397?utm_source=share_via&utm_content=profile&utm_medium=member_android', name: 'LinkedIn' },
    { icon: <FaInstagram size={24} />, link: 'https://www.instagram.com/_dmramy_/', name: 'Instagram' }
  ];

  return (
    <section id="contact" className="section-container" style={{ textAlign: 'center', paddingBottom: '40px' }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 style={{ marginBottom: '20px' }}>
          <span className="gradient-text">Let's Connect</span>
        </h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '40px', fontSize: '1.1rem' }}>
          Feel free to reach out for collaborations or just a friendly hello!
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '60px' }}>
          {socials.map((social, index) => (
            <Magnetic key={index}>
              <motion.a
                href={social.link}
                className="glass-card"
                style={{ width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-primary)', borderRadius: '50%' }}
                whileHover={{ y: -5, scale: 1.1, background: 'var(--accent-blue)', color: '#fff' }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                title={social.name}
              >
                {social.icon}
              </motion.a>
            </Magnetic>
          ))}
        </div>

        <Magnetic>
          <motion.a 
            href="mailto:hello@example.com"
            className="btn btn-primary"
            style={{ padding: '15px 40px', fontSize: '1.2rem', display: 'inline-flex' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail size={20} style={{ marginRight: '8px' }} /> Say Hello
          </motion.a>
        </Magnetic>
      </motion.div>
    </section>
  );
};

export default Socials;
