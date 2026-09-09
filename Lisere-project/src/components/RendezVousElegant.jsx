import React from 'react';
import './RendezVousElegant.scss';
import avif from '../assets/images/rendez-vous-elegant-image-65.avif';
import webp from '../assets/images/rendez-vous-elegant-image-85.webp';
import lqip from '../assets/images/rendez-vous-elegant-image-lqip.webp';
import ParallaxSection from './ParallaxSection';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const RendezVousElegant = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  React.useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  return (
    <ParallaxSection className="rendezvous" avif={avif} webp={webp} lqip={lqip}>
      <motion.div
        ref={ref}
        className="grid-15x13 rendezvous__content"
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
              Within it — the graceful poise of a woman who doesn’t strive to be noticed — she
              simply lingers in memory.
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
      </motion.div>
    </ParallaxSection>
  );
};

export default RendezVousElegant;
