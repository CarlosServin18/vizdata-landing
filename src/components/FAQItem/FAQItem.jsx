import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { COLORS } from '../../constants';

export default function FAQItem({ question, answer, isOpen, onToggle }) {
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      gsap.to(contentRef.current, {
        height: 'auto',
        opacity: 1,
        duration: 0.3,
        ease: 'power2.inOut',
      });
    } else {
      gsap.to(contentRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.inOut',
      });
    }
  }, [isOpen]);

  return (
    <div
      className="rounded-lg overflow-hidden"
      style={{
        border: `1px solid ${COLORS.lightGray}`,
        backgroundColor: COLORS.white,
      }}
    >
      <button
        className="w-full px-6 py-4 flex justify-between items-center font-semibold transition-colors"
        style={{
          color: COLORS.text,
          backgroundColor: isOpen ? COLORS.lightGray : COLORS.white,
        }}
        onClick={onToggle}
        onMouseEnter={(e) => {
          if (!isOpen) e.currentTarget.style.backgroundColor = COLORS.lightGray;
        }}
        onMouseLeave={(e) => {
          if (!isOpen) e.currentTarget.style.backgroundColor = COLORS.white;
        }}
      >
        <span>{question}</span>
        <span
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease',
          }}
        >
          ▼
        </span>
      </button>
      <div
        ref={contentRef}
        style={{
          height: 0,
          overflow: 'hidden',
          opacity: 0,
        }}
      >
        <div className="px-6 py-4 border-t" style={{ borderColor: COLORS.lightGray }}>
          <p style={{ color: COLORS.darkLight }}>{answer}</p>
        </div>
      </div>
    </div>
  );
}
