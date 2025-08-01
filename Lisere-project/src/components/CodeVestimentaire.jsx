import React from 'react';
import './CodeVestimentaire.scss';
import image from '../assets/images/сode-vestimentaire-image-75.webp';

const CodeVestimentaire = () => (
  <section className="code">
    <div className="code__background">
      <img src={image} alt="Code Vestimentaire" />
    </div>
    <div className="grid-15x13 code__content">
      <div className="code__overlay col-start-10 col-span-5">
        <div className="code__text-block">
          <h2 className="code__text code__text--title">“Code vestimentaire”</h2>
          <p className="code__text code__text--subtitle">(“Dress code”)</p>
          <p className="code__description">
            The sharp lines of the office do not cancel the desire to be a woman.
            <br />
            <br />
            She resolves issues, signs documents, stays in control — yet she holds a secret.
            <br />
            <br />
            Beneath the perfectly tailored suit lies elegance;
            <br />
            beneath the cool precision, warmth.
            <br />
            <br />
            This collection is a reminder: there’s room for refinement even in the everyday.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default CodeVestimentaire;
