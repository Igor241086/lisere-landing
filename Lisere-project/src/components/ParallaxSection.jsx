import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const ParallaxSection = ({ image, children }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

  return (
    <section className="soir" ref={ref}>
      <motion.div className="soir__background" style={{ y }} aria-hidden="true">
        <div className="soir__bgInner">
          <img className="soir__image" src={image} alt="" />
        </div>
      </motion.div>

      {children}
    </section>
  );
};

export default ParallaxSection;
