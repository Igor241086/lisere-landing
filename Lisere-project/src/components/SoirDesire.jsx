import React from 'react';
import './SoirDesire.scss';
import image from '../assets/images/Soir_Desire_image.png';

const SoirDesire = () => (
  <section className="soir">
    <div className="soir__background">
      <img src={image} alt="Soir Désiré" />
    </div>
    <div className="grid-15x13 soir__content">
      <div className="soir__overlay col-start-9 col-span-5">
        <div className="soir__text-block">
          <h2 className="soir__text soir__text--title">“Soir Désiré”</h2>
          <p className="soir__text soir__text--subtitle">(“Desired Evening”)</p>
          <p className="soir__description">
            A collection for an evening that needs no occasion.
            <br />
            <br />
            White marble, candlelight, soft shadows, and the whisper of silk.
            <br />
            <br />
            It captures that one fleeting moment when you’re not playing a role — you’re simply
            yourself.
            <br />
            <br />
            Gentleness, confidence, and the delicate scent of wine and silence.
            <br />
            <br />
            This is more than just an outfit — it’s a ritual.
            <br />
            <br />
            Your own private ceremony of beauty.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default SoirDesire;
