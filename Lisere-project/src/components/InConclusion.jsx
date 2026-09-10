import './InConclusion.scss';
import ParallaxSection from './ParallaxSection';
import webp from '../assets/images/hero-bg-85.webp';
import avif from '../assets/images/hero-bg-65.avif';
import lqip from '../assets/images/hero-bg-lqip.webp';

import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useSectionReveal } from './hooks/useSectionReveal';

function InConclusion() {
  const [ref, controls] = useSectionReveal();

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.2, ease: 'easeOut' },
    }),
  };

  return (
    <ParallaxSection className="in-conclusion" avif={avif} webp={webp} lqip={lqip}>
      <motion.div
        ref={ref}
        className="grid-15x13 in-conclusion__content"
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
        <div className="col-start-2 col-span-13 in-conclusion__bottom">
          <motion.div
            className="in-conclusion__icons"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            {[
              { href: 'https://github.com/Igor241086', icon: <FaGithub /> },
              {
                href: 'https://www.linkedin.com/in/ihor-mahats-0b1046287/',
                icon: <FaLinkedinIn />,
              },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                custom={i}
                variants={itemVariants}
              >
                {item.icon}
              </motion.a>
            ))}
          </motion.div>

          <motion.div className="in-conclusion__footer-text" custom={3} variants={itemVariants}>
            © 2025-2026 Lisière · Concept by Igor241086 · Designed &amp; Coded by hand
          </motion.div>
        </div>
      </motion.div>
    </ParallaxSection>
  );
}

export default InConclusion;
