import React from 'react';
import PropTypes from 'prop-types';
import './MoodSketch.scss';

const MoodSketch = ({ image, alt }) => {
  return (
    <section className="mood-sketch">
      <div className="mood-sketch__image-wrapper">
        <img src={image} alt={alt || 'Technical sketches'} className="mood-sketch__image" />
      </div>
      <div className="mood-sketch__caption">
        <p>
          Sketches and technical drawings are currently under development and not publicly
          displayed.
        </p>
        <p>Contact us for further details.</p>
      </div>
    </section>
  );
};

MoodSketch.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default MoodSketch;
