import React, { useEffect, useState } from 'react';
import './InConclusion.scss';
import HeroBg from './common/HeroBg.jsx';
import heroBg from '../assets/images/hero-bg-75.webp';

import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const InConclusion = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = heroBg;
    img.onload = () => setLoaded(true);
  }, []);

  return (
    <section className="in-conclusion">
      <HeroBg loaded={loaded} isBlurred={false} />

      <div className="grid-15x13 in-conclusion__content">
        <div className="col-start-2 col-span-13 in-conclusion__bottom">
          <div className="in-conclusion__icons">
            <a href="https://github.com/Igor241086" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/ihor-mahats-0b1046287/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.instagram.com/igor241086/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>

          <div className="in-conclusion__footer-text">
            © 2025 Lisière · Concept by Igor241086 · Designed &amp; Coded by hand
          </div>
        </div>
      </div>
    </section>
  );
};

export default InConclusion;
