import './CodeVestimentaire.scss';
import avif from '../assets/images/code-vestimentaire-image-65.avif';
import webp from '../assets/images/code-vestimentaire-image-85.webp';
import lqip from '../assets/images/code-vestimentaire-image-lqip.webp';
import ParallaxSection from './ParallaxSection';
import { motion } from 'framer-motion';
import { useSectionReveal } from './hooks/useSectionReveal';

const CodeVestimentaire = () => {
  const [ref, controls] = useSectionReveal();

  return (
    <ParallaxSection className="code" avif={avif} webp={webp} lqip={lqip}>
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
