import React from 'react';
import './SoirDesire.scss';
import image from '../assets/images/soir-desire-image-75.webp';
import ParallaxSection from './ParallaxSection';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SoirDesire = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  React.useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  return (
    <ParallaxSection image={image}>
      <motion.div
        ref={ref}
        className="grid-15x13 soir__content"
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
        <div className="soir__overlay col-start-10 col-span-5">
          <div className="soir__text-block">
            <h2 className="soir__text soir__text--title">“Soir Désiré”</h2>
            <p className="soir__text soir__text--subtitle">(“Desired evening”)</p>
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
      </motion.div>
    </ParallaxSection>
  );
};

export default SoirDesire;
