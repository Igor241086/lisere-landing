import React from 'react';
import './RendezVousElegant.scss';
import image from '../assets/images/rendez-vous-Elegant-image-75.webp';

const RendezVousElegant = () => {
  return (
    <section className="rendezvous">
      <div className="rendezvous__background">
        <img src={image} alt="Rendez-vous Élégant" />
      </div>
      <div className="grid-15x13 rendezvous__content">
        <div className="col-start-2 col-span-6 rendezvous__text-block">
          <h2 className="rendezvous__title">Rendez-vous Élégant</h2>
          <p className="rendezvous__description">
            A moment poised in elegance. Quiet confidence, subtle gestures, and an ensemble that
            speaks before you do.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RendezVousElegant;
