// src/HeroSection.js
import React from 'react';
import { motion } from 'framer-motion';

// --- Zmienne Animacji ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08, 
      delayChildren: 0.5,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 12, 
      stiffness: 100, 
    },
  },
};

const subtitleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { delay: 1.2, duration: 0.8 } },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 1.5 } },
};

const HeroSection = () => {
  const name = "DAWID JASPER";
  
  return (
    <div style={styles.heroContainer}>
      <motion.h1
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={styles.title}
      >
        {name.split("").map((char, index) => (
          <motion.span 
            key={index} 
            variants={letterVariants}
            style={styles.letter}
          >
            {char === " " ? "\u00A0" : char} 
          </motion.span>
        ))}
      </motion.h1>
      
      <motion.p
        variants={subtitleVariants}
        initial="hidden"
        animate="visible"
        style={styles.subtitle}
      >
        Kultowy streamer, pogromca gier i król polskiego internetu. 🎬
      </motion.p>

      <motion.a
        href="https://www.youtube.com/@DawidJasperlive" 
        target="_blank"
        rel="noopener noreferrer"
        variants={buttonVariants}
        initial="hidden"
        animate="visible"
        whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(0, 191, 255, 0.6)' }}
        whileTap={{ scale: 0.95 }}
        style={styles.ctaButton}
      >
        Oglądaj na Żywo! ⚡
      </motion.a>
    </div>
  );
};

const styles = {
    heroContainer: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        background: 'linear-gradient(45deg, #1a1a1a, #0d0d0d)', // Gradientowe tło
        color: 'white',
        padding: '20px',
        overflow: 'hidden',
    },
    title: {
        fontSize: 'clamp(3rem, 10vw, 7rem)', // Responsywny rozmiar
        fontWeight: '900',
        marginBottom: '20px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        color: '#FF4500', // Energetyczny kolor
        textShadow: '0 0 15px rgba(255, 69, 0, 0.7)', // Efekt poświaty
    },
    letter: {
        display: 'inline-block',
        lineHeight: '1.2',
    },
    subtitle: {
        fontSize: 'clamp(1rem, 3vw, 1.8rem)',
        marginBottom: '40px',
        color: '#ccc',
        maxWidth: '800px',
    },
    ctaButton: {
        padding: '15px 40px',
        fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
        fontWeight: 'bold',
        textDecoration: 'none',
        borderRadius: '50px',
        background: '#00BFFF',
        color: '#111',
        cursor: 'pointer',
        border: 'none',
        boxShadow: '0 10px 30px rgba(0, 191, 255, 0.5)',
        transition: 'all 0.3s ease',
    }
};

export default HeroSection;