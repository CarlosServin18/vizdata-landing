import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { COLORS, STRINGS, CONFIG } from '../../constants';

export default function Hero() {
  const logoRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const secondaryCTARef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      logoRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out' }
    )
      .fromTo(
        titleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
        0.2
      )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
        0.4
      )
      .fromTo(
        [ctaRef.current, secondaryCTARef.current],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', stagger: 0.1 },
        0.6
      );
  }, []);

  const mailtoLink = `mailto:${CONFIG.email}?subject=Agenda%20tu%20demo`;

  return (
    <header
      id="inicio"
      className="pt-32 pb-16 relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${COLORS.dark} 0%, ${COLORS.darkLight} 100%)`,
        color: COLORS.white,
      }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
        style={{
          background: `radial-gradient(circle, ${COLORS.primary}, transparent)`,
          filter: 'blur(60px)',
        }}
      />
      <div
        className="absolute bottom-0 left-10 w-80 h-80 rounded-full opacity-10"
        style={{
          background: `radial-gradient(circle, ${COLORS.primary}, transparent)`,
          filter: 'blur(60px)',
        }}
      />

      <div className="container mx-auto px-6 flex flex-col items-center text-center relative z-10">
        <img
          ref={logoRef}
          src={CONFIG.logo}
          alt="VizData Logo"
          className="h-20 w-auto mb-6"
        />
        <h1 ref={titleRef} className="text-6xl md:text-7xl font-bold mb-4">
          {STRINGS.hero.title}
        </h1>
        <p ref={subtitleRef} className="text-xl md:text-2xl mb-8 opacity-90">
          {STRINGS.hero.subtitle}
        </p>

        <p ref={subtitleRef} className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl">
          {STRINGS.hero.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            ref={ctaRef}
            href={mailtoLink}
            className="font-semibold py-3 px-8 rounded shadow transition text-white"
            style={{
              backgroundColor: COLORS.primary,
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = COLORS.primaryDark;
              gsap.to(e.target, { scale: 1.05, duration: 0.2 });
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = COLORS.primary;
              gsap.to(e.target, { scale: 1, duration: 0.2 });
            }}
          >
            {STRINGS.hero.cta}
          </a>
          <a
            ref={secondaryCTARef}
            href="#services"
            className="font-semibold py-3 px-8 rounded border-2 transition text-white"
            style={{
              borderColor: COLORS.white,
              backgroundColor: 'transparent',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = COLORS.white;
              e.target.style.color = COLORS.dark;
              gsap.to(e.target, { scale: 1.05, duration: 0.2 });
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = COLORS.white;
              gsap.to(e.target, { scale: 1, duration: 0.2 });
            }}
          >
            {STRINGS.hero.secondary}
          </a>
        </div>
      </div>
    </header>
  );
}
