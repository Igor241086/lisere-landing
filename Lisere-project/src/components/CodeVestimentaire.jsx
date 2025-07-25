import React from 'react';
import './CodeVestimentaire.scss';
import image from '../assets/images/Code_vestimentaire_image.png';

const CodeVestimentaire = () => {
  return (
    <section className="code">
      <div className="code__background">
        <img src={image} alt="Code Vestimentaire" />
      </div>
      <div className="grid-15x13 code__content">
        <div className="col-start-2 col-span-6 code__text-block">
          <h2 className="code__title">Code Vestimentaire</h2>
          <p className="code__description">
            Rules of refinement never go out of style. An ode to the timeless codes that shape
            appearance, presence, and intent.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CodeVestimentaire;
