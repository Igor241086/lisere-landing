import React from 'react';
import './Intro.scss';
import placeholder from '../assets/images/video.png';

const Intro = () => {
  return (
    <section className="intro grid-15x13">
      <div className="col-start-1 col-span-15 row-start-3 row-span-3 intro__video-wrapper">
        <img src={placeholder} alt="Intro video placeholder" className="intro__video" />
      </div>
      <div className="col-start-1 col-span-15 row-start-6 row-span-3 intro__columns">
        <div className="intro__column">Column 1</div>
        <div className="intro__column">Column 2</div>
        <div className="intro__column">Column 3</div>
      </div>
    </section>
  );
};

export default Intro;
