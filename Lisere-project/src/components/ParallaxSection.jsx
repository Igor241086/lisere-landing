import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import PropTypes from 'prop-types';

const ParallaxBackground = ({ targetRef, image, className }) => {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

  return (
    <motion.div className={`${className}__background`} style={{ y }} aria-hidden="true">
      <div className={`${className}__bgInner`}>
        <img className={`${className}__image`} src={image} alt="" />
      </div>
    </motion.div>
  );
};

ParallaxBackground.propTypes = {
  targetRef: PropTypes.object.isRequired,
  image: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

const ParallaxSection = ({ image, children, className }) => {
  const ref = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      ref={ref}
      className={`parallax-section ${className || ''}`}
      style={{ position: 'relative' }}
    >
      {mounted ? (
        <ParallaxBackground targetRef={ref} image={image} className={className || 'parallax'} />
      ) : (
        <div className={`${className}__background`} aria-hidden="true">
          <div className={`${className}__bgInner`}>
            <img className={`${className}__image`} src={image} alt="" />
          </div>
        </div>
      )}

      {children}
    </section>
  );
};

ParallaxSection.propTypes = {
  image: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default ParallaxSection;
