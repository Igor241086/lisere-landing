import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function useSectionReveal(options = { threshold: 0.3, triggerOnce: true }) {
  const controls = useAnimation();
  const [ref, inView] = useInView(options);

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  return [ref, controls];
}
