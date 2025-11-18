// src/App.js
import React from 'react';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ContentSection from './ContentSection'; // Nowa sekcja na Gify/Fotki

import './App.css'; // Domyślny plik CSS z create-react-app, możesz go edytować dla globalnych stylów
import './cursor.css';
import { useEffect } from 'react';

function App() {
    // Custom cursor
    useEffect(() => {
      const cursor = document.createElement('div');
      cursor.className = 'cursor-stroke';
      document.body.appendChild(cursor);

      const moveCursor = e => {
        cursor.style.transform = `translate3d(${e.clientX - 20}px, ${e.clientY - 20}px, 0)`;
      };
      document.addEventListener('mousemove', moveCursor);

      document.body.style.scrollBehavior = 'smooth';

      return () => {
        document.removeEventListener('mousemove', moveCursor);
        if (cursor) document.body.removeChild(cursor);
      };
    }, []);
  return (
    <div className="App" style={styles.appContainer}>
      {/* Animacja fade-in dla całej aplikacji */}
      <div style={styles.fadeIn}>
        <HeroSection />
        <AboutSection />
        <ContentSection />
      </div>
      <div style={styles.copyright}>
        &copy; {new Date().getFullYear()} Strona Fana Dawida Jaspera
      </div>
    </div>
  );
}

// Globalne style dla tła i fontów (możesz przenieść do App.css)
const styles = {
  appContainer: {
    fontFamily: "'Roboto', 'Montserrat', 'Orbitron', sans-serif",
    minHeight: '100vh',
    background: 'url(https://i.makeagif.com/media/10-22-2021/duabW9.gif) center center / cover no-repeat fixed',
    color: '#fff',
    overflowX: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    filter: 'grayscale(1)',
    transition: 'none',
  },
  fadeIn: {
    animation: 'fadeIn 1.8s cubic-bezier(0.77,0,0.175,1)',
    width: '100%',
  },
  // Usunięto stopkę, copyright jest w rogu
  copyright: {
    position: 'fixed',
    right: '18px',
    bottom: '10px',
    fontSize: '0.75rem',
    color: '#888',
    background: 'rgba(20,20,20,0.7)',
    padding: '6px 14px',
    borderRadius: '12px',
    zIndex: 10,
    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
    pointerEvents: 'none',
    userSelect: 'none',
  },
  // Animacja fade-in
  '@keyframes fadeIn': {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
};

export default App;