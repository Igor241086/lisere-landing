// CodeVestimentaire.jsx
import React from 'react';
import './CodeVestimentaire.scss';
import image from '../assets/images/сode-vestimentaire-image-75.webp';
import ParallaxSection from './ParallaxSection';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CodeVestimentaire = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  React.useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  return (
    <ParallaxSection image={image} className="code">
      <motion.div
        ref={ref}
        className="grid-15x13 code__content"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.9, ease: 'easeOut' },
          },
        }}
      >
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
      </motion.div>
    </ParallaxSection>
  );
};

export default CodeVestimentaire;
