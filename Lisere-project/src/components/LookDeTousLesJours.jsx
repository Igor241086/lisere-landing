import './LookDeTousLesJours.scss';
import avif from '../assets/images/look-de-tous-les-jours-image-65.avif';
import webp from '../assets/images/look-de-tous-les-jours-image-85.webp';
import lqip from '../assets/images/look-de-tous-les-jours-image-lqip.webp';
import ParallaxSection from './ParallaxSection';
import { motion } from 'framer-motion';
import { useSectionReveal } from '../hooks/useSectionReveal';

const LookDeTousLesJours = () => {
  const [ref, controls] = useSectionReveal();

  return (
    <ParallaxSection className="look" avif={avif} webp={webp} lqip={lqip}>
      <motion.div
        ref={ref}
        className="grid-15x13 look__content"
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
              She doesn’t chase time — it moves around her.
              <br />
              <br />
              Success is no longer a destination; it’s the air she breathes.
              <br />
              <br />
              Luxury is silence behind tinted glass,
              <br />
              the weight of a dress cut to perfection,
              <br />
              the quiet line of lace where fabric meets skin.
              <br />
              <br />
              There is no need to be seen — only to be felt.
              <br />
              <br />
              Chic does not announce itself;
              <br />
              it endures.
              <br />
              <br />
              Every day is not routine but ritual — a private magnificence known only to her.
            </p>
          </div>
        </div>
      </motion.div>
    </ParallaxSection>
  );
};

export default LookDeTousLesJours;
