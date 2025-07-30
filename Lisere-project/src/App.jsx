import React, { useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Intro from './components/Intro.jsx';
import HeroBg from './components/common/HeroBg.jsx';
import StatementBlock from './components/StatementBlock.jsx';

import SoirDesire from './components/SoirDesire.jsx';
import CodeVestimentaire from './components/CodeVestimentaire.jsx';
import RendezVousElegant from './components/RendezVousElegant.jsx';
import LookDeTousLesJours from './components/LookDeTousLesJours.jsx';

import MoodSketch from './components/MoodSketch.jsx';

import sketchSoirDesire from './assets/images/soirdesire-sketch.png';
import sketchCodeVestimentaire from './assets/images/code-vestimentaire-sketch.png';
import sketchRendezVousElegant from './assets/images/rendezvous-elegant-sketch.png';
import sketchLookDeTousLesJours from './assets/images/look-de-tous-les-jours-sketch.png';
import heroBg from './assets/images/hero-bg.png';

import './styles/main.scss';

const sketches = [
  { image: sketchSoirDesire, alt: 'Soir Désiré technical sketch' },
  { image: sketchCodeVestimentaire, alt: 'Code Vestimentaire technical sketch' },
  { image: sketchRendezVousElegant, alt: 'Rendez-vous Élégant technical sketch' },
  { image: sketchLookDeTousLesJours, alt: 'Look de tous les jours technical sketch' },
];

const statements = [
  {
    text: 'LET US DRAW YOUR ATTENTION TO...',
    gridClass: 'col-start-2 col-span-13',
  },
  {
    text: 'IS TEMPTATION THEIR ONLY PURPOSE?',
    gridClass: 'col-start-4 col-span-9',
  },
  {
    text: 'FOR THE ELEGANT EVENING — ONLY THE FINEST DETAILS...',
    gridClass: 'col-start-3 col-span-11',
  },
  {
    text: 'AND WHAT OF EVERYDAY ELEGANCE?',
    gridClass: 'col-start-5 col-span-7',
  },
];

const sections = [
  { Component: SoirDesire, sketch: sketches[0] },
  { Component: CodeVestimentaire, sketch: sketches[1] },
  { Component: RendezVousElegant, sketch: sketches[2] },
  { Component: LookDeTousLesJours, sketch: sketches[3] },
];

function App() {
  const [loaded, setLoaded] = useState(false);
  const [isBlurred, setIsBlurred] = useState(false);
  const [currentPage, setCurrentPage] = useState('hero');

  useEffect(() => {
    const img = new Image();
    img.src = heroBg;
    img.onload = () => setLoaded(true);
  }, []);

  const handleLogoClick = () => {
    setCurrentPage('hero');
    setIsBlurred(false);
  };

  return (
    <>
      <HeroBg loaded={loaded} isBlurred={isBlurred} />
      <Header onLogoClick={handleLogoClick} />

      <main>
        {currentPage === 'hero' && (
          <Hero setIsBlurred={setIsBlurred} onNext={() => setCurrentPage('intro')} />
        )}

        {currentPage === 'intro' && (
          <>
            <Intro />

            {sections.map(({ Component, sketch }, i) => (
              <React.Fragment key={i}>
                <StatementBlock text={statements[i].text} gridClass={statements[i].gridClass} />
                <Component />
                <MoodSketch image={sketch.image} alt={sketch.alt} />
              </React.Fragment>
            ))}
          </>
        )}
      </main>
    </>
  );
}

export default App;
