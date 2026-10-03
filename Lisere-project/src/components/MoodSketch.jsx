import { useLayoutEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './MoodSketch.scss';

gsap.registerPlugin(ScrollTrigger);

// Финальная «раскладка на столе»: небольшой поворот и сдвиг по вертикали для каждого фото.
// Для 4–5 фото используются следующие позы, дальше цикл.
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

  // useLayoutEffect — чтобы стартовое (скрытое) состояние выставилось до первой отрисовки, без вспышки
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
            // без «полёта»: фото сразу на своих местах, только мягкое появление
            gsap.set(el, { rotation, y });
            tl.fromTo(el, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.5 }, i * 0.1);
            return;
          }

          // spread: -1 для левого, 0 для среднего, 1 для правого (при 3 фото)
          const spread = i - (photos.length - 1) / 2;
          const dir = spread === 0 ? 1 : Math.sign(spread);
          const at = i * 0.16;

          // «бросок»: фото прилетает сверху и сбоку, с лишним поворотом и небольшим увеличением,
          // и мягко оседает на место
          tl.fromTo(
            el,
            { x: spread * 60, y: y - 80, rotation: rotation + dir * 11, scale: 1.1 },
            { x: 0, y, rotation, scale: 1, duration: 1.3, ease: 'power3.out' },
            at,
          );
          // лёгкий fade-in поверх, короче основного движения
          tl.fromTo(el, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.7, ease: 'power1.out' }, at);
        });

        ScrollTrigger.create({
          trigger: stackRef.current,
          start: 'top 80%',
          once: true,
          onEnter: () => tl.play(),
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
                loading="lazy"
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
