import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';

const DecodeText: React.FC<{ text: string, delay?: number, className?: string, style?: React.CSSProperties }> = ({ text, delay = 0, className, style }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    let interval: ReturnType<typeof setInterval>;

    timeout = setTimeout(() => {
      let iteration = 0;
      
      interval = setInterval(() => {
        setDisplayText(text.split('').map((char, index) => {
          if (index < iteration) {
            return text[index];
          }
          if (char === ' ') return ' ';
          return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
        }).join(''));
        
        if (iteration >= text.length) {
          clearInterval(interval);
        }
        
        iteration += 1 / 3; 
      }, 30);
    }, delay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, delay]);

  return (
    <span className={className} style={style}>
      {displayText || text.replace(/./g, ' ')}
    </span>
  );
};

export const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setStage(1), 2000); // After decode finishes
    const t2 = setTimeout(() => {
      setStage(2);
      setTimeout(onComplete, 1000); // Wait for fade out
    }, 2800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {stage < 2 && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: '-100vh' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'var(--bg-primary)',
            zIndex: 999999,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'var(--accent-cyan)'
          }}
        >
          <div style={{ fontSize: '2rem', fontWeight: 'bold', letterSpacing: '0.5em', fontFamily: 'monospace' }}>
            <DecodeText text="SYSTEM_ONLINE" delay={200} />
          </div>
          
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: stage >= 1 ? '300px' : '0px' }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            style={{ 
              height: '2px', 
              backgroundColor: 'var(--accent-cyan)',
              marginTop: '20px',
              boxShadow: '0 0 10px var(--accent-cyan)'
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DecodeText;
