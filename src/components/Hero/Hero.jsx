import { COLORS, STRINGS, CONFIG } from '../../constants';

export default function Hero() {
  const mailtoLink = `mailto:${CONFIG.email}?subject=Agenda%20tu%20demo`;

  return (
    <header
      className="py-12"
      style={{
        background: `linear-gradient(to right, ${COLORS.dark}, ${COLORS.darkLight})`,
        color: COLORS.white,
      }}
    >
      <div className="container mx-auto px-6 flex flex-col items-center text-center">
        <img src={CONFIG.logo} alt="VizData Logo" className="h-20 w-auto mb-4" />
        <h1 className="text-5xl font-bold mb-2">{STRINGS.hero.title}</h1>
        <p className="text-xl mb-6">{STRINGS.hero.subtitle}</p>
        <a
          href={mailtoLink}
          className="font-semibold py-3 px-8 rounded shadow transition text-white font-semibold"
          style={{
            backgroundColor: COLORS.primary,
            textDecoration: 'none',
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = COLORS.primaryDark)}
          onMouseLeave={(e) => (e.target.style.backgroundColor = COLORS.primary)}
        >
          {STRINGS.hero.cta}
        </a>
      </div>
    </header>
  );
}
