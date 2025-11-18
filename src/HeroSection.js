// src/HeroSection.js
import React from 'react';
import { motion } from 'framer-motion';
import BlurText from './BlurText';

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
  // Scroll do sekcji 'Kim jest Dawid Jasper?'
  const handleScroll = () => {
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div style={styles.heroContainer}>
      <BlurText
        text={name}
        delay={120}
        animateBy="words"
        direction="top"
        className="text-4xl mb-8"
      />
      <motion.p
        variants={subtitleVariants}
        initial="hidden"
        animate="visible"
        style={styles.subtitle}
      >
        Kultowy streamer, pogromca gier i król polskiego internetu. 🎬
      </motion.p>
      <motion.button
        variants={buttonVariants}
        initial="hidden"
        animate="visible"
        whileHover={{ scale: 1.08, backgroundColor: '#00BFFF', color: '#fff', boxShadow: '0 0 25px #00BFFF' }}
        whileTap={{ scale: 0.95 }}
        style={styles.seeMoreButton}
        onClick={handleScroll}
      >
        Zobacz więcej ↓
      </motion.button>
      <motion.a
        href="https://www.youtube.com/@DawidJasperlive" 
        target="_blank"
        rel="noopener noreferrer"
        variants={buttonVariants}
        initial="hidden"
        animate="visible"
        whileHover={{ scale: 1.05, boxShadow: '0 0 25px #00BFFF' }}
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
      fontSize: 'clamp(3rem, 10vw, 7rem)',
      fontWeight: '900',
      marginBottom: '20px',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      color: '#00BFFF',
      textShadow: '0 0 18px #00BFFF',
    },
    letter: {
        display: 'inline-block',
        lineHeight: '1.2',
    },
    subtitle: {
      fontSize: 'clamp(1rem, 3vw, 1.8rem)',
      marginBottom: '40px',
      color: '#00BFFF',
      maxWidth: '800px',
      textShadow: '0 0 8px #00BFFF',
    },
    ctaButton: {
      padding: '15px 40px',
      fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
      fontWeight: 'bold',
      textDecoration: 'none',
      borderRadius: '50px',
      background: '#fff',
      color: '#00BFFF',
      cursor: 'pointer',
      border: '2px solid #00BFFF',
      boxShadow: '0 10px 30px #00BFFF44',
      transition: 'all 0.3s ease',
      marginTop: '18px',
    },
    seeMoreButton: {
      padding: '12px 32px',
      fontSize: 'clamp(1rem, 2vw, 1.2rem)',
      fontWeight: 'bold',
      borderRadius: '40px',
      background: '#00BFFF',
      color: '#fff',
      border: 'none',
      boxShadow: '0 6px 18px #00BFFF88',
      cursor: 'pointer',
      marginBottom: '10px',
      marginTop: '10px',
      transition: 'all 0.3s',
      outline: 'none',
    },
};

export default HeroSection;