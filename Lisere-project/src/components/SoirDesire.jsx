import React from 'react';
import './SoirDesire.scss';
import image from '../assets/images/Soir_Desire_image.png';

const SoirDesire = () => {
  return (
    <section className="soir">
      <div className="grid-15x13 soir__content">
        <div className="col-start-2 col-span-6">
          <img src={image} alt="Soir Desire" className="soir__image" />
        </div>
        <div className="col-start-8 col-span-6 soir__text">
          <h2>Soir Desire</h2>
          <p>
            Night unveils more than elegance — it awakens allure. A curated scene where charm and
            confidence meet under the city lights.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SoirDesire;
