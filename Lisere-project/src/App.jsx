import React, { useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Intro from './components/Intro.jsx';
import HeroBg from './components/common/HeroBg.jsx';

import './styles/main.scss';

function App() {
  const [loaded, setLoaded] = useState(false);
  const [isBlurred, setIsBlurred] = useState(false);
  const [currentPage, setCurrentPage] = useState('hero');

  useEffect(() => {
    const img = new Image();
    img.src = '/src/assets/images/hero-bg.png';
    img.onload = () => setLoaded(true);
  }, []);

  const hendleLogoClick = () => {
    setCurrentPage('hero');
    setIsBlurred(false);
  };

  return (
    <>
      <HeroBg loaded={loaded} isBlurred={isBlurred} />

      <Header onLogoClick={hendleLogoClick} />

      <main>
        {currentPage === 'hero' && (
          <Hero setIsBlurred={setIsBlurred} onNext={() => setCurrentPage('intro')} />
        )}

        {currentPage === 'intro' && <Intro />}
      </main>
    </>
  );
}

export default App;
