import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Hero.scss';
import HeroBg from './common/HeroBg.jsx';

const Hero = ({ setIsBlurred }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = '';
    img.onload = () => setLoaded(true);
  }, []);

  return (
    <section className="hero">
      <HeroBg loaded={loaded} />
      <div className="grid-15x13 hero__content">
        <div className="col-start-2 col-span-13 hero__centered-block">
          <div className="hero__text hero__text--main fade-in delay-1">WHEN FORM FOLLOWS</div>
          <div className="hero__text hero__text--emotions fade-in delay-2">EMOTIONS</div>
          <div className="hero__subtext fade-in delay-3">A future-facing creative research</div>
          <div className="hero__button-container fade-in delay-4">
            <button
              className="hero__button"
              onClick={() => {
                setIsBlurred(true);
              }}
            >
              DISCOVER THE CONCEPT
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  setIsBlurred: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
};

export default Hero;
