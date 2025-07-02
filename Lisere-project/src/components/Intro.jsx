import React from 'react';
import './Intro.scss';
import placeholder from '../assets/images/video.png';

const Intro = () => {
  return (
    <section className="intro grid-15x13">
      <div className="intro__video-wrapper col-start-1 col-span-15">
        <img src={placeholder} alt="Intro video placeholder" className="intro__video" />
      </div>

      <div className="intro__columns col-start-2 col-span-13">
        <div className="intro__column">
          <h3>About the Project</h3>
          <p>
            <strong>Lisière</strong> is not a store. It’s a visual story about femininity, style,
            and subtlety.
            <br />A digital experiment where a developer builds an aesthetic experience around
            stockings — not to sell, but to express.
          </p>
        </div>
        <div className="intro__column">
          <h3>Where the Concept Began</h3>
          <p>
            We were tired of identical product cards and dry presentation.
            <br />
            We wanted emotion, mood, ritual.
            <br />
            While learning design, we built a concept where the user sees not just a product — but
            an atmosphere.
          </p>
        </div>
        <div className="intro__column">
          <h3>What We Offer</h3>
          <p>
            Four visual moods — stockings as part of the fleeting moment of grace only she knows,
            the poise of everyday style, evening rituals, and invisible rules of allure.
            <br />
            With sketches, ambiance, and attention to detail.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
