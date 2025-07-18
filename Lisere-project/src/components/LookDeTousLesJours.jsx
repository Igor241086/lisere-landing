import React from 'react';
import './LookDeTousLesJours.scss';
import image from '../assets/images/Look_de_tous_les_jours_image.png';

const LookDeTousLesJours = () => {
  return (
    <section className="quotidien">
      <div className="grid-15x13 quotidien__content">
        <div className="col-start-2 col-span-6">
          <img src={image} alt="Look de tous les jours" className="quotidien__image" />
        </div>
        <div className="col-start-8 col-span-6 quotidien__text">
          <h2>Look de tous les jours</h2>
          <p>
            Everyday looks with elevated essence. Functional beauty woven into the rhythm of the
            modern woman’s routine.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LookDeTousLesJours;
