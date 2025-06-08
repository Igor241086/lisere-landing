import React from "react";
import './Hero.scss';
import bgImage from '../assets/images/hero-bg.jpg';

const Hero = () => {
  return (
    <section className="hero">
      <div
        className="hero__background"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      <div className="container grid-15 hero__content">
        <div className="hero__text hero__text--main fade-in delay-1">
          WHEN FORM FOLLOWS
        </div>
        <div className="hero__text hero__text--emotions fade-in delay-2">
          EMOTIONS
        </div>
      </div>
    </section>
  );
};

export default Hero;