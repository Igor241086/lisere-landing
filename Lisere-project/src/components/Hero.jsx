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

      <div className="container grid-15 grid-rows hero__content">
        <div className="hero__text hero__text--main fade-in delay-1">
          WHEN FORM FOLLOWS
        </div>
        <div className="hero__text hero__text--emotions fade-in delay-2">
          EMOTIONS
        </div>
        <div className="hero__subtext fade-in delay-3">
          A future-facing creative research
        </div>
        <div className="hero__button-container fade-in delay-4">
          <button className="hero__button">
            DISCOVER THE CONCEPT
          </button>
        </div>
        <div className="hero__disclaimer">
          {"Photo: Publicly available image (used for conceptual presentation only)."}
        </div>
      </div>
    </section>
  );
};

export default Hero;