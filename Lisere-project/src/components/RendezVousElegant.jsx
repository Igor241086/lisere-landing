import React from 'react';
import './RendezVousElegant.scss';
import image from '../assets/images/Rendez-vous_Elegant_image.png';

const RendezVousElegant = () => {
  return (
    <section className="rendezvous">
      <div className="grid-15x13 rendezvous__content">
        <div className="col-start-2 col-span-6">
          <img src={image} alt="Rendez-vous Élégant" className="rendezvous__image" />
        </div>
        <div className="col-start-8 col-span-6 rendezvous__text">
          <h2>Rendez-vous Élégant</h2>
          <p>
            A moment poised in elegance. Quiet confidence, subtle gestures, and an ensemble that
            speaks before you do.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RendezVousElegant;
