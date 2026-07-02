import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Socials: React.FC = () => {
  const socials = [
    { icon: <FaGithub size={24} />, link: '#', name: 'GitHub' },
    { icon: <FaLinkedin size={24} />, link: '#', name: 'LinkedIn' },
    { icon: <FaTwitter size={24} />, link: '#', name: 'Twitter' },
    { icon: <FaInstagram size={24} />, link: '#', name: 'Instagram' }
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
            <motion.a
              key={index}
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
          ))}
        </div>

        <motion.a
          href="mailto:hello@example.com"
          className="btn btn-primary"
          style={{ padding: '15px 40px', fontSize: '1.2rem' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Mail size={20} /> Say Hello
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Socials;
