import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './SoirDesire.scss';
import image from '../assets/images/soir-desire-image-75.webp';

gsap.registerPlugin(ScrollTrigger);

const SoirDesire = () => {
  const sectionRef = useRef(null);
  const bgInnerRef = useRef(null);
  const overlayRef = useRef(null);
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const bgInner = bgInnerRef.current;
    const overlay = overlayRef.current;
    const content = contentRef.current;
    if (!section || !bgInner) return;

    const p = 6;
    const fadePinViewportPortion = 0.6;

    const recalc = () => {
      const Hs = Math.round(section.getBoundingClientRect().height);
      const denom = 1 - 2 * (p / 100);
      const neededHb = Math.ceil(Hs / Math.max(denom, 0.001));
      bgInner.style.height = `${neededHb}px`;
      return { Hs, neededHb };
    };

    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      if (overlay) overlay.style.opacity = 1;
      if (content) content.style.opacity = 1;
      return;
    }

    let last = recalc();
    let resizeId = null;
    const onResize = () => {
      if (resizeId) cancelAnimationFrame(resizeId);
      resizeId = requestAnimationFrame(() => {
        last = recalc();
        ScrollTrigger.refresh();
      });
    };
    window.addEventListener('resize', onResize);

    const img = bgInner.querySelector('img');
    const onImgLoad = () => {
      last = recalc();
      ScrollTrigger.refresh();
    };
    if (img && !img.complete) img.addEventListener('load', onImgLoad);

    const ctx = gsap.context(() => {
      const Hs = last.Hs;
      const neededHb = last.neededHb;
      const maxOffsetPx = Math.round((neededHb - Hs) / 2);

      gsap.fromTo(
        bgInner,
        { y: -maxOffsetPx },
        {
          y: maxOffsetPx,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.6,
            invalidateOnRefresh: true,
            markers: true,
          },
        },
      );

      const pinDistance = Math.max(Math.round(window.innerHeight * fadePinViewportPortion), 300);
      const fadeTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: `+=${pinDistance}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      gsap.set(overlay, { opacity: 0 });
      gsap.set(content, { opacity: 0, y: 18 });

      fadeTl.to(overlay, { opacity: 1, duration: 0.35, ease: 'power1.out' }, 0);
      fadeTl.to(content, { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' }, 0.08);
    }, section);

    return () => {
      if (img) img.removeEventListener('load', onImgLoad);
      window.removeEventListener('resize', onResize);
      if (resizeId) cancelAnimationFrame(resizeId);
      ctx.revert();
    };
  }, []);

  return (
    <section className="soir" ref={sectionRef}>
      <div className="soir__background" aria-hidden="true">
        <div className="soir__bgInner" ref={bgInnerRef}>
          <img className="soir__image" src={image} alt="" />
        </div>
      </div>

      <div className="grid-15x13 soir__content" ref={contentRef}>
        <div className="soir__overlay col-start-10 col-span-5" ref={overlayRef}>
          <div className="soir__text-block">
            <h2 className="soir__text soir__text--title">“Soir Désiré”</h2>
            <p className="soir__text soir__text--subtitle">(“Desired evening”)</p>
            <p className="soir__description">
              A collection for an evening that needs no occasion.
              <br />
              <br />
              White marble, candlelight, soft shadows, and the whisper of silk.
              <br />
              <br />
              It captures that one fleeting moment when you’re not playing a role — you’re simply
              yourself.
              <br />
              <br />
              Gentleness, confidence, and the delicate scent of wine and silence.
              <br />
              <br />
              This is more than just an outfit — it’s a ritual.
              <br />
              <br />
              Your own private ceremony of beauty.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoirDesire;
