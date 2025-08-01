import React from 'react';
import './LookDeTousLesJours.scss';
import image from '../assets/images/look-de-tous-les-jours-image-75.webp';

const LookDeTousLesJours = () => {
  return (
    <section className="quotidien">
      <div className="quotidien__background">
        <img src={image} alt="Look de tous les jours" />
      </div>
      <div className="grid-15x13 quotidien__content">
        <div className="col-start-2 col-span-6 quotidien__text-block">
          <h2 className="quotidien__title">Look de tous les jours</h2>
          <p className="quotidien__description">
            Everyday looks with elevated essence. Functional beauty woven into the rhythm of the
            modern woman’s routine.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LookDeTousLesJours;
