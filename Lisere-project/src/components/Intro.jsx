import React, { useState, useEffect } from 'react';
import './Intro.scss';
import placeholder from '../assets/images/video.png';

const Intro = () => {
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowHint(false);
      window.removeEventListener('scroll', handleScroll);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="intro">
      <div className="grid-15x13 intro__content">
        <div className="col-start-2 col-span-13 intro__centered-block">
          <div className="intro__video-wrapper">
            <img src={placeholder} alt="Intro video placeholder" className="intro__video" />
          </div>

          <div className="intro__columns">
            <div className="intro__column">
              <h3>About the Project</h3>
              <p>
                <strong>Lisière</strong> is not a store. It’s a visual story about femininity,
                style, and subtlety.
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
                While learning design, we built a concept where the user sees not just a product —
                but an atmosphere.
              </p>
            </div>

            <div className="intro__column">
              <h3>What We Offer</h3>
              <p>
                Four visual moods — stockings as part of the fleeting moment of grace only she
                knows, the poise of everyday style, evening rituals, and invisible rules of allure.
                <br />
                With sketches, ambiance, and attention to detail.
              </p>
            </div>
          </div>

          {showHint && (
            <div className="intro__scroll-hint fade-in delay-4">
              <span>Scroll hint</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Intro;
