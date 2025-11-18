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
    hover: {
        scale: 1.08,
        boxShadow: '0 0 40px rgba(0,191,255,0.7)',
        transition: { type: 'spring', stiffness: 300, damping: 15 }
    }
};

const ContentSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    // Tu możesz dodawać więcej swoich contentu
    const contentItems = [
        {
            type: 'image',
            src: 'https://media.tenor.com/GdquBTAQdIMAAAAM/dawid-jasper-jasper.gif',
            alt: 'Dawid Jasper GIF 1',
            caption: 'Dawid Jasper - klasyczny moment!'
        },
        {
            type: 'image',
            src: 'https://media.tenor.com/A5RFXCAPasgAAAAM/dawid-jasper.gif',
            alt: 'Dawid Jasper GIF 2',
            caption: 'Jasper w akcji!'
        },
        {
            type: 'image',
            src: 'https://i.makeagif.com/media/11-13-2022/yAD5iV.gif',
            alt: 'Dawid Jasper GIF 3',
            caption: 'Gamingowy vibe Dawida.'
        },
        {
            type: 'image',
            src: 'https://i.pinimg.com/originals/e5/10/c9/e510c9801ac3f68324af70dfc31069c2.gif',
            alt: 'Dawid Jasper GIF 4',
            caption: 'Legendarny Jasper!'
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
                        <motion.h2 
                            style={styles.contentHeading}
                            initial={{ opacity: 0, y: -40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, type: 'spring', stiffness: 80 }}
                        >
                            Mega Momenty & Galeria
                        </motion.h2>
            
            <div style={styles.grid}>
                {contentItems.map((item, index) => (
                    <motion.div 
                        key={index} 
                        variants={itemVariants} 
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        whileHover="hover"
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
        backgroundColor: 'rgba(20,20,30,0.85)',
        color: '#00BFFF',
        textAlign: 'center',
        borderTop: '2px solid #00BFFF',
        borderBottom: '2px solid #00BFFF',
        boxShadow: '0 2px 24px #00BFFF33',
        borderRadius: '18px',
        marginBottom: '40px',
        filter: 'none',
    },
    contentHeading: {
        fontSize: 'clamp(2rem, 5vw, 3rem)',
        marginBottom: '50px',
        color: '#00BFFF',
        textShadow: '0 0 18px #00BFFF',
        fontWeight: 900,
        letterSpacing: '2px',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', // Responsywna siatka
        gap: '40px',
        maxWidth: '1200px',
        margin: '0 auto',
    },
    gridItem: {
        backgroundColor: '#e5e5e5',
        borderRadius: '15px',
        overflow: 'hidden',
        boxShadow: '0 6px 18px #8888',
        transition: 'all 0.5s cubic-bezier(0.77,0,0.175,1)',
        display: 'flex',
        flexDirection: 'column',
        border: '2px solid #bbb',
        filter: 'none',
    },
    media: {
        width: '100%',
        height: '250px',
        objectFit: 'cover',
        display: 'block',
        filter: 'none',
        transition: 'filter 0.5s',
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
        fontSize: '1rem',
        color: '#00BFFF',
        textAlign: 'center',
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontStyle: 'italic',
        letterSpacing: '1px',
        textShadow: '0 0 8px #00BFFF',
    },
};

export default ContentSection;