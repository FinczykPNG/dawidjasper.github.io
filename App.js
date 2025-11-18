// src/App.js
import React from 'react';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ContentSection from './ContentSection'; // Nowa sekcja na Gify/Fotki

import './App.css'; // Domyślny plik CSS z create-react-app, możesz go edytować dla globalnych stylów

function App() {
  return (
    <div className="App" style={styles.appContainer}>
      {/* 1. Sekcja powitalna z animacją tekstu */}
      <HeroSection />
      
      {/* 2. Sekcja "O Dawidzie" */}
      <AboutSection />
      
      {/* 3. Sekcja z dynamiczną zawartością (Gify, zdjęcia, wideo) */}
      <ContentSection />
      
      {/* Możesz tu dodać więcej sekcji, np. kontakt, FAQ itp. */}

      <footer style={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Strona Fana Dawida Jaspera. Wszystkie prawa zastrzeżone.</p>
      </footer>
    </div>
  );
}

// Globalne style dla tła i fontów (możesz przenieść do App.css)
const styles = {
  appContainer: {
    fontFamily: "'Roboto', sans-serif", // Użyj czcionki, która pasuje do "gamingowego" klimatu
    backgroundColor: '#111', // Ciemniejsze tło dla całej strony
    color: '#eee', // Jasny kolor tekstu
    overflowX: 'hidden', // Zapobiega poziomemu przewijaniu od animacji
  },
  footer: {
    padding: '40px 20px',
    textAlign: 'center',
    backgroundColor: '#0a0a0a',
    fontSize: '0.9rem',
    color: '#888',
    marginTop: '50px',
  },
};

export default App;