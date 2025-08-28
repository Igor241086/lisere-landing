import React from 'react';
import './LookDeTousLesJours.scss';
import image from '../assets/images/look-de-tous-les-jours-image-75.webp';
import ParallaxSection from './ParallaxSection';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const LookDeTousLesJours = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  React.useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  return (
    <ParallaxSection image={image} className="soir">
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
        <div className="look__overlay col-start-10 col-span-5">
          <div className="look__text-block">
            <h2 className="look__text look__text--title">“Look de tous les jours”</h2>
            <p className="look__text look__text--subtitle">(“Everyday look”)</p>
            <p className="look__description">
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
      </motion.div>
    </ParallaxSection>
  );
};

export default LookDeTousLesJours;
