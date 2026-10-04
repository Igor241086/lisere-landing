import { useLayoutEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './MoodSketch.scss';

gsap.registerPlugin(ScrollTrigger);

const POSES = [
  { rotation: -2.5, y: 0 },
  { rotation: 1.5, y: -12 },
  { rotation: 3.5, y: 14 },
  { rotation: -1.5, y: 6 },
  { rotation: 2.5, y: -6 },
];

const MoodSketch = ({ images, alt }) => {
  const rootRef = useRef(null);
  const stackRef = useRef(null);

  useLayoutEffect(() => {
    const photos = gsap.utils.toArray('.mood-sketch__photo', rootRef.current);
    if (!photos.length) return undefined;

    const mm = gsap.matchMedia();

    mm.add(
      {
        motion: '(prefers-reduced-motion: no-preference)',
        reduce: '(prefers-reduced-motion: reduce)',
      },
      (context) => {
        const { reduce } = context.conditions;
        const tl = gsap.timeline({ paused: true });

        photos.forEach((el, i) => {
          const { rotation, y } = POSES[i % POSES.length];

          if (reduce) {
            gsap.set(el, { rotation, y });
            tl.fromTo(el, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.5 }, i * 0.1);
            return;
          }

          const spread = i - (photos.length - 1) / 2;
          const dir = spread === 0 ? 1 : Math.sign(spread);
          const at = i * 0.16;

          tl.fromTo(
            el,
            { x: spread * 60, y: y - 80, rotation: rotation + dir * 11, scale: 1.1 },
            { x: 0, y, rotation, scale: 1, duration: 1.3, ease: 'power3.out' },
            at,
          );
          tl.fromTo(el, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.7, ease: 'power1.out' }, at);
        });

        const imgs = gsap.utils.toArray('img', stackRef.current);
        let inView = false;
        let loaded = false;
        const tryPlay = () => {
          if (inView && loaded) tl.play();
        };

        Promise.all(imgs.map((img) => img.decode().catch(() => {}))).then(() => {
          loaded = true;
          tryPlay();
        });

        ScrollTrigger.create({
          trigger: stackRef.current,
          start: 'top 80%',
          once: true,
          onEnter: () => {
            inView = true;
            tryPlay();
          },
        });
      },
      rootRef,
    );

    return () => mm.revert();
  }, [images]);

  return (
    <section className="mood-sketch" ref={rootRef}>
      <div className="mood-sketch__inner">
        <div className="mood-sketch__caption">
          <p>
            “Sketches and technical drawings are currently under development and not publicly
            displayed.”
          </p>
          <p>“Contact us for further details.”</p>
        </div>

        <div className="mood-sketch__stack" ref={stackRef}>
          {images.map(({ src, alt: imgAlt }, i) => (
            <figure className="mood-sketch__photo" key={`${src}-${i}`}>
              <img
                src={src}
                alt={imgAlt || `${alt || 'Technical sketch'} ${i + 1}`}
                decoding="async"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

MoodSketch.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string,
    }),
  ).isRequired,
  alt: PropTypes.string,
};

export default MoodSketch;
