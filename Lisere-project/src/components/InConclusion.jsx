import React from 'react';
import PropTypes from 'prop-types';
import './InConclusion.scss';
import ParallaxSection from './ParallaxSection';
import heroBg from '../assets/images/hero-bg-75.webp';

import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function InConclusion() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  React.useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.2, ease: 'easeOut' },
    }),
  };

  return (
    <ParallaxSection avif={heroBg} webp={heroBg} lqip={heroBg} className="in-conclusion">
      <motion.div
        ref={ref}
        className="grid-15x13 in-conclusion__content"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: {},
          visible: {},
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

InConclusion.propTypes = {
  setIsBlurred: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
};

export default InConclusion;
