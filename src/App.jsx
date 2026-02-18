import { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatIDo from './components/WhatIDo';
import Career from './components/Career';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import './App.css';

export default function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <LoadingScreen onEnter={() => setLoaded(true)} />}
      {loaded && (
        <main>
          <Navbar />
          <Hero />
          <WhatIDo />
          <Career />
          <Projects />
          <Resume />
          <Contact />
        </main>
      )}
    </>
  );
}
