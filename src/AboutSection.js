// src/AboutSection.js
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const aboutVariants = {
  hidden: { opacity: 0, x: -100 }, 
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      type: 'spring', 
      stiffness: 50,
      staggerChildren: 0.2 
    } 
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const AboutSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <motion.div
            ref={ref}
            variants={aboutVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            style={styles.aboutContainer}
        >
            <motion.h2 variants={itemVariants} style={styles.aboutHeading}>
                Kim jest Dawid Jasper?
            </motion.h2>
            
            <motion.p variants={itemVariants} style={styles.aboutText}>
                Dawid Jasper (znany też jako Dawid Kamil) to charyzmatyczny streamer i twórca 
                internetowy, który podbił serca fanów swoją autentycznością i gamingowymi przygodami.
                Jego kanały to centrum rozrywki, gdzie znajdziesz niezapomniane momenty
                z gier, zabawne wyzwania i interakcje z mega-społecznością.
            </motion.p>
            
            <motion.p variants={itemVariants} style={styles.aboutText}>
                Od legendarnych streamów z CS 1.6 po różnorodne treści, Dawid Jasper
                buduje unikalną więź ze swoimi widzami. Jego styl to mieszanka humoru, 
                spontaniczności i prawdziwej pasji do gier.
            </motion.p>

            <motion.div variants={itemVariants} style={styles.socials}>
                <motion.a 
                    href="https://www.youtube.com/@DawidJasperlive" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={styles.socialButton}
                    whileHover={{ scale: 1.1, backgroundColor: '#FF0000', boxShadow: '0 0 15px rgba(255, 0, 0, 0.7)' }}
                >
                    YouTube (Live)
                </motion.a>
                <motion.a 
                    href="https://www.youtube.com/@dawidjaspertv3279" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={styles.socialButton}
                    whileHover={{ scale: 1.1, backgroundColor: '#c4302b', boxShadow: '0 0 15px rgba(196, 48, 43, 0.7)' }}
                >
                    YouTube (TV)
                </motion.a>
                {/* Możesz dodać tu inne linki do mediów społecznościowych */}
            </motion.div>
        </motion.div>
    );
};

const styles = {
    aboutContainer: {
        padding: '80px 40px',
        backgroundColor: '#1B1B1B', 
        color: 'white',
        overflow: 'hidden',
        borderTop: '3px solid #FF4500',
        borderBottom: '3px solid #00BFFF',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
    },
    aboutHeading: {
        fontSize: 'clamp(2rem, 5vw, 3rem)',
        marginBottom: '25px',
        color: '#00BFFF',
        textShadow: '0 0 10px rgba(0, 191, 255, 0.5)',
    },
    aboutText: {
        fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
        lineHeight: '1.7',
        maxWidth: '900px',
        marginBottom: '20px',
    },
    socials: {
        marginTop: '40px',
        display: 'flex',
        gap: '20px',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    socialButton: {
        padding: '12px 25px',
        fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
        fontWeight: 'bold',
        textDecoration: 'none',
        borderRadius: '30px',
        background: '#333',
        color: 'white',
        cursor: 'pointer',
        border: 'none',
        transition: 'all 0.3s ease',
        boxShadow: '0 5px 15px rgba(0,0,0,0.4)',
    }
};

export default AboutSection;