import React from 'react';
import PropTypes from 'prop-types';
import './HeroBg.scss';
import bgImage from '../../assets/images/hero-bg-70.webp';

const HeroBg = ({ loaded, isBlurred }) => (
  <div
    className={['hero-bg', loaded ? 'hero-bg--loaded' : '', isBlurred ? 'hero-bg--blurred' : '']
      .filter(Boolean)
      .join(' ')}
    style={{ backgroundImage: `url(${bgImage})` }}
  />
);

HeroBg.propTypes = {
  loaded: PropTypes.bool.isRequired,
  isBlurred: PropTypes.bool.isRequired,
};

export default HeroBg;
