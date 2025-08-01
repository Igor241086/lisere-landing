import React from 'react';
import './LookDeTousLesJours.scss';
import image from '../assets/images/look-de-tous-les-jours-image-75.webp';

const LookDeTousLesJours = () => (
  <section className="quotidien">
    <div className="quotidien__background">
      <img src={image} alt="Look de tous les jours" />
    </div>
    <div className="grid-15x13 quotidien__content">
      <div className="quotidien__overlay col-start-10 col-span-5">
        <div className="quotidien__text-block">
          <h2 className="quotidien__text quotidien__text--title">“Look de tous les jours”</h2>
          <p className="quotidien__text quotidien__text--subtitle">(“Everyday look”)</p>
          <p className="quotidien__description">
            She’s not in a hurry.
            <br />
            <br />
            Success has already happened — now it’s about pleasure.
            <br />
            <br />
            Luxury lives in the little things:
            <br />
            in the soft shine of lipstick,
            <br />
            in a expensive car,
            <br />
            in a takeaway coffee,
            <br />
            in a perfectly chosen detail.
            <br />
            <br />
            This look isn’t for attention.
            <br />
            It’s for herself.
            <br />
            Chic that doesn’t scream — it simply is.
            <br />
            <br />
            Because every day is a moment of magnificence.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default LookDeTousLesJours;
