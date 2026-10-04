import React, { useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Intro from './components/Intro.jsx';
import HeroBg from './components/common/HeroBg.jsx';
import StatementBlock from './components/StatementBlock.jsx';
import { useImagePreload } from './hooks/useImagePreload.js';

import SoirDesire from './components/SoirDesire.jsx';
import CodeVestimentaire from './components/CodeVestimentaire.jsx';
import RendezVousElegant from './components/RendezVousElegant.jsx';
import LookDeTousLesJours from './components/LookDeTousLesJours.jsx';

import MoodSketch from './components/MoodSketch.jsx';
import InConclusion from './components/InConclusion.jsx';

import sketchSoirDesire1 from './assets/images/soir-desire-sketch-1-85.webp';
import sketchSoirDesire2 from './assets/images/soir-desire-sketch-2-85.webp';
import sketchSoirDesire3 from './assets/images/soir-desire-sketch-3-85.webp';
import sketchCodeVestimentaire1 from './assets/images/code-vestimentaire-sketch-1-85.webp';
import sketchCodeVestimentaire2 from './assets/images/code-vestimentaire-sketch-2-85.webp';
import sketchCodeVestimentaire3 from './assets/images/code-vestimentaire-sketch-3-85.webp';
import sketchCodeVestimentaire4 from './assets/images/code-vestimentaire-sketch-4-85.webp';
import sketchRendezVousElegant1 from './assets/images/rendezvous-elegant-sketch-1-85.webp';
import sketchRendezVousElegant2 from './assets/images/rendezvous-elegant-sketch-2-85.webp';
import sketchRendezVousElegant3 from './assets/images/rendezvous-elegant-sketch-3-85.webp';
import sketchLookDeTousLesJours1 from './assets/images/look-de-tous-les-jours-sketch-1-85.webp';
import sketchLookDeTousLesJours2 from './assets/images/look-de-tous-les-jours-sketch-2-85.webp';
import sketchLookDeTousLesJours3 from './assets/images/look-de-tous-les-jours-sketch-3-85.webp';
import heroBg from './assets/images/hero-bg-85.webp';

import './styles/main.scss';

const sketches = [
  {
    images: [{ src: sketchSoirDesire1 }, { src: sketchSoirDesire2 }, { src: sketchSoirDesire3 }],
    alt: 'Soir Désiré technical sketch',
  },
  {
    images: [
      { src: sketchCodeVestimentaire1 },
      { src: sketchCodeVestimentaire2 },
      { src: sketchCodeVestimentaire3 },
      { src: sketchCodeVestimentaire4 },
    ],
    alt: 'Code Vestimentaire technical sketch',
  },
  {
    images: [
      { src: sketchRendezVousElegant1 },
      { src: sketchRendezVousElegant2 },
      { src: sketchRendezVousElegant3 },
    ],
    alt: 'Rendez-vous Élégant technical sketch',
  },
  {
    images: [
      { src: sketchLookDeTousLesJours1 },
      { src: sketchLookDeTousLesJours2 },
      { src: sketchLookDeTousLesJours3 },
    ],
    alt: 'Look de tous les jours technical sketch',
  },
];

const statements = [
  { text: 'LET US DRAW YOUR ATTENTION TO...', gridClass: 'col-start-2 col-span-13' },
  { text: 'IS TEMPTATION THEIR ONLY PURPOSE?', gridClass: 'col-start-4 col-span-9' },
  {
    text: 'FOR THE ELEGANT EVENING — ONLY THE FINEST DETAILS...',
    gridClass: 'col-start-3 col-span-11',
  },
  { text: 'AND WHAT OF EVERYDAY ELEGANCE?', gridClass: 'col-start-5 col-span-7' },
];

const sections = [
  { Component: SoirDesire, sketch: sketches[0] },
  { Component: CodeVestimentaire, sketch: sketches[1] },
  { Component: RendezVousElegant, sketch: sketches[2] },
  { Component: LookDeTousLesJours, sketch: sketches[3] },
];

function App() {
  const loaded = useImagePreload(heroBg);
  const [isBlurred, setIsBlurred] = useState(false);
  const [currentPage, setCurrentPage] = useState('hero');

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
                <MoodSketch images={sketch.images} alt={sketch.alt} />
              </React.Fragment>
            ))}

            <InConclusion />
          </>
        )}
      </main>
    </>
  );
}

export default App;
