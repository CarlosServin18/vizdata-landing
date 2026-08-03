import { useState, useRef, useEffect } from 'react';
import { COLORS, STRINGS, CONFIG } from '../../constants';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    if (!navRef.current) return;

    gsap.to(navRef.current, {
      scrollTrigger: {
        trigger: 'body',
        start: 'top 0',
        onUpdate: (self) => {
          if (self.getVelocity() !== 0) {
            const isScrolled = self.progress > 0.05;
            if (isScrolled) {
              gsap.to(navRef.current, {
                backgroundColor: COLORS.white,
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                duration: 0.3,
              });
            } else {
              gsap.to(navRef.current, {
                backgroundColor: 'transparent',
                boxShadow: 'none',
                duration: 0.3,
              });
            }
          }
        },
      },
    });
  }, []);

  const navLinks = [
    { label: STRINGS.nav.services, href: '#services' },
    { label: STRINGS.nav.process, href: '#process' },
    { label: STRINGS.nav.testimonials, href: '#testimonials' },
    { label: STRINGS.nav.faq, href: '#faq' },
    { label: STRINGS.nav.contact, href: '#contact' },
  ];

  const mailtoLink = `mailto:${CONFIG.email}?subject=Agenda%20tu%20demo`;

  return (
    <nav
      ref={navRef}
      className="fixed top-0 w-full z-50 transition-all duration-300"
      style={{
        backgroundColor: 'transparent',
      }}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <img src={CONFIG.logo} alt="VizData" className="h-8 w-auto" />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center flex-1 justify-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors"
              style={{
                color: COLORS.text,
              }}
              onMouseEnter={(e) => (e.target.style.color = COLORS.primary)}
              onMouseLeave={(e) => (e.target.style.color = COLORS.text)}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href={mailtoLink}
          className="hidden md:block font-semibold py-2 px-4 rounded text-white transition-all"
          style={{
            backgroundColor: COLORS.primary,
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = COLORS.primaryDark)}
          onMouseLeave={(e) => (e.target.style.backgroundColor = COLORS.primary)}
        >
          {STRINGS.hero.cta}
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          style={{ color: COLORS.text }}
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="md:hidden absolute top-full left-0 w-full py-4 px-6"
          style={{ backgroundColor: COLORS.white, boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium"
                style={{ color: COLORS.text }}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={mailtoLink}
              className="font-semibold py-2 px-4 rounded text-white text-center w-full"
              style={{ backgroundColor: COLORS.primary }}
              onClick={() => setIsOpen(false)}
            >
              {STRINGS.hero.cta}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
