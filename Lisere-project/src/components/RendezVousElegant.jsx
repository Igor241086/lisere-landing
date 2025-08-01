import React from 'react';
import './RendezVousElegant.scss';
import image from '../assets/images/rendez-vous-Elegant-image-75.webp';

const RendezVousElegant = () => (
  <section className="rendezvous">
    <div className="rendezvous__background">
      <img src={image} alt="Rendez-vous Élégant" />
    </div>
    <div className="grid-15x13 rendezvous__content">
      <div className="rendezvous__overlay col-start-10 col-span-5">
        <div className="rendezvous__text-block">
          <h2 className="rendezvous__text rendezvous__text--title">“Rendez-vous Élégant”</h2>
          <p className="rendezvous__text rendezvous__text--subtitle">(“Elegant meeting”)</p>
          <p className="rendezvous__description">
            A collection for an evening where everything is intentional — every glance, every
            gesture, every final touch.
            <br />
            <br />
            Velvet shadows, the chime of crystal, French perfume and golden accents.
            <br />
            <br />
            Within it — the graceful poise of a woman who doesn’t strive to be noticed — she simply
            lingers in memory.
            <br />
            <br />
            It’s a taste refined in silence.
            <br />
            <br />
            This collection isn’t about fashion. It’s about dignity, style, and inner freedom.
            <br />
            <br />
            When elegance speaks louder than words.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default RendezVousElegant;
