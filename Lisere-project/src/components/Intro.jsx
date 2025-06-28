import React from 'react';
import './Intro.scss';

const Intro = () => {
  return (
    <section className="intro grid-15x13">
      <div className="col-start-2 col-span-13 intro__content">
        <h1 className="intro__title fade-in delay-1">INTRODUCTION</h1>
        <p className="intro__text fade-in delay-2">
          This is the beginning of the concept exploration
        </p>
      </div>
    </section>
  );
};

export default Intro;
