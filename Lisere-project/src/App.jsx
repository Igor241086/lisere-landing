import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx'

import './styles/base.scss';
import './styles/grid.scss';
import './styles/variables.scss';

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
      </main>
    </>
  );
}

export default App;
