import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Socials: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = 'hello@damar.dev';

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const links = [
    { name: 'GitHub', url: 'https://github.com/amay29' },
    { name: 'LinkedIn', url: 'https://linkedin.com' },
    { name: 'Instagram', url: 'https://instagram.com' },
    { name: 'Twitter', url: 'https://twitter.com' }
  ];

  return (
    <section id="contact" className="section-container border-t">
      <div style={{ paddingBottom: '60px' }}>
        <h2 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 0.9, textTransform: 'uppercase', marginBottom: '40px', letterSpacing: '-0.03em' }}>
          Let's Work <br />
          <span style={{ color: 'var(--accent-primary)', textShadow: '2px 2px 0 var(--text-primary), -1px -1px 0 var(--text-primary), 1px -1px 0 var(--text-primary), -1px 1px 0 var(--text-primary), 1px 1px 0 var(--text-primary)' }}>
            Together
          </span>
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', marginTop: '60px' }}>
          <div>
            <h3 style={{ fontFamily: 'var(--font-sans)', textTransform: 'uppercase', fontSize: '1rem', marginBottom: '20px', fontWeight: 600 }}>Start a conversation</h3>
            <a 
              href={`mailto:${email}`}
              onClick={handleCopy}
              style={{ 
                fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', 
                fontWeight: 600, 
                color: 'var(--text-primary)', 
                textDecoration: 'none',
                borderBottom: '2px solid var(--text-primary)',
                display: 'inline-block',
                position: 'relative'
              }}
            >
              {copied ? 'EMAIL COPIED!' : email}
            </a>
            <p style={{ marginTop: '20px', color: 'var(--text-secondary)' }}>Click to copy email address.</p>
          </div>
          
          <div>
            <h3 style={{ fontFamily: 'var(--font-sans)', textTransform: 'uppercase', fontSize: '1rem', marginBottom: '20px', fontWeight: 600 }}>Socials</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {links.map((link, i) => (
                <motion.a 
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ 
                    fontSize: '1.5rem', 
                    color: 'var(--text-primary)', 
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}
                  whileHover={{ x: 10, color: 'var(--accent-secondary)' }}
                >
                  <span style={{ fontSize: '1rem' }}>↗</span> {link.name}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Socials;
