import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import PropTypes from 'prop-types';

const ParallaxBackground = ({ targetRef, avif, webp, lqip, className, onLoad }) => {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (loaded && onLoad) onLoad(true);
  }, [loaded, onLoad]);

  return (
    <div className={`${className}__background`} aria-hidden="true">
      <motion.div className={`${className}__bgInner`} style={{ y }}>
        {!loaded && <div className={`${className}__loader`} />}

        <img
          className={`${className}__image lqip ${loaded ? 'hidden' : ''}`}
          src={lqip}
          alt=""
          aria-hidden="true"
        />

        <picture>
          <source srcSet={avif} type="image/avif" />
          <source srcSet={webp} type="image/webp" />
          <img
            className={`${className}__image full ${loaded ? 'visible' : ''}`}
            src={webp}
            alt=""
            onLoad={() => setLoaded(true)}
          />
        </picture>
      </motion.div>
    </div>
  );
};

ParallaxBackground.propTypes = {
  targetRef: PropTypes.object.isRequired,
  avif: PropTypes.string.isRequired,
  webp: PropTypes.string.isRequired,
  lqip: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onLoad: PropTypes.func,
};

const ParallaxSection = ({ avif, webp, lqip, children, className }) => {
  const ref = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      ref={ref}
      className={`parallax-section ${className || ''}`}
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {mounted ? (
        <ParallaxBackground
          targetRef={ref}
          avif={avif}
          webp={webp}
          lqip={lqip}
          className={className || 'parallax'}
        />
      ) : (
        <div className={`${className}__background`} aria-hidden="true">
          <div className={`${className}__bgInner`}>
            <img className={`${className}__image`} src={lqip} alt="" />
          </div>
        </div>
      )}
      <motion.div
        className={`${className}__headlights`}
        initial={{ opacity: 0 }}
        animate={{ opacity: mounted ? 1 : 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <div className={`${className}__beam ${className}__beam--left`} />
        <div className={`${className}__beam ${className}__beam--right`} />
        <div className={`${className}__glow ${className}__glow--left`} />
        <div className={`${className}__glow ${className}__glow--right`} />
      </motion.div>

      {children}
    </section>
  );
};

ParallaxSection.propTypes = {
  avif: PropTypes.string.isRequired,
  webp: PropTypes.string.isRequired,
  lqip: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default ParallaxSection;
