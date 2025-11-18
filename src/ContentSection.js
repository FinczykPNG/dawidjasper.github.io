// src/ContentSection.js
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Przykładowe importy - PAMIĘTAJ, aby dodać swoje GIFY/ZDJĘCIA do src/assets/
// Utwórz folder 'src/assets' i tam wrzucaj swoje pliki
// import dawidGif1 from './assets/dawid-gif1.gif';
// import dawidPic1 from './assets/dawid-pic1.jpg';
// import dawidVideoThumb from './assets/dawid-video-thumb.jpg';


const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.7, 
      staggerChildren: 0.2 // Animuje elementy dzieci po kolei
    } 
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { 
      type: 'spring', 
      stiffness: 80, 
      damping: 10 
    } 
  },
};

const ContentSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    // Tu możesz dodawać więcej swoich contentu
    const contentItems = [
        { 
            type: 'image', 
            src: 'https://via.placeholder.com/600x400/FF4500/FFFFFF?text=Twoj+GIF+1', // Zastąp URL prawdziwym GIF-em/zdjęciem
            alt: 'Dawid Jasper Gaming GIF',
            caption: 'Niesamowity frag w CS 1.6!' 
        },
        { 
            type: 'image', 
            src: 'https://via.placeholder.com/600x400/00BFFF/FFFFFF?text=Twoje+Zdjecie+1', // Zastąp URL prawdziwym zdjęciem
            alt: 'Dawid Jasper na streamie',
            caption: 'Skupienie na live, jak zawsze.' 
        },
        { 
            type: 'video', 
            thumbnail: 'https://via.placeholder.com/600x337/222/FFFFFF?text=Link+do+Wideo', // Miniaturka
            videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?si=r4h9fJd_8p2g0j0k', // Zastąp linkiem do wideo (embed YouTube)
            alt: 'Dawid Jasper - Najlepsze momenty',
            caption: 'Najlepsze momenty z ostatnich streamów!' 
        },
        { 
            type: 'image', 
            src: 'https://via.placeholder.com/600x400/8A2BE2/FFFFFF?text=Twoj+GIF+2',
            alt: 'Dawid Jasper Reacts GIF',
            caption: 'Klasyczna reakcja Dawida!' 
        },
    ];

    return (
        <motion.div
            ref={ref}
            variants={sectionVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            style={styles.contentContainer}
        >
            <h2 style={styles.contentHeading}>Mega Momenty & Galeria</h2>
            
            <div style={styles.grid}>
                {contentItems.map((item, index) => (
                    <motion.div 
                        key={index} 
                        variants={itemVariants} 
                        whileHover={{ scale: 1.03, boxShadow: '0 0 30px rgba(0, 191, 255, 0.5)' }}
                        style={styles.gridItem}
                    >
                        {item.type === 'image' && (
                            <img src={item.src} alt={item.alt} style={styles.media} />
                        )}
                        {item.type === 'video' && (
                            <div style={styles.videoWrapper}>
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={item.videoUrl}
                                    title={item.alt}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                    style={styles.iframe}
                                ></iframe>
                            </div>
                        )}
                        <p style={styles.caption}>{item.caption}</p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

const styles = {
    contentContainer: {
        padding: '80px 20px',
        backgroundColor: '#0d0d0d',
        color: 'white',
        textAlign: 'center',
        borderTop: '3px solid #00BFFF',
    },
    contentHeading: {
        fontSize: 'clamp(2rem, 5vw, 3rem)',
        marginBottom: '50px',
        color: '#FF4500',
        textShadow: '0 0 10px rgba(255, 69, 0, 0.5)',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', // Responsywna siatka
        gap: '40px',
        maxWidth: '1200px',
        margin: '0 auto',
    },
    gridItem: {
        backgroundColor: '#222',
        borderRadius: '15px',
        overflow: 'hidden',
        boxShadow: '0 10px 25px rgba(0,0,0,0.6)',
        transition: 'all 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
    },
    media: {
        width: '100%',
        height: '250px', // Stała wysokość dla obrazków
        objectFit: 'cover',
        display: 'block',
    },
    videoWrapper: {
        position: 'relative',
        paddingBottom: '56.25%', /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
        height: 0,
        overflow: 'hidden',
        maxWidth: '100%',
        background: '#000',
    },
    iframe: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
    },
    caption: {
        padding: '20px',
        fontSize: '1.1rem',
        color: '#ccc',
        textAlign: 'center',
        flexGrow: 1, // Wypełnia dostępne miejsce
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
};

export default ContentSection;