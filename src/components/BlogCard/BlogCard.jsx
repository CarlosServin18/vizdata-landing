import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { COLORS, STRINGS } from '../../constants';
import { getIcon } from '../../utils/icons';

export default function BlogCard({
  title,
  excerpt,
  body,
  category,
  date,
  readTime,
  iconName,
  isOpen,
  onToggle,
}) {
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.to(contentRef.current, {
      height: isOpen ? 'auto' : 0,
      opacity: isOpen ? 1 : 0,
      duration: 0.4,
      ease: 'power2.inOut',
    });
  }, [isOpen]);

  return (
    <article
      className="rounded-2xl p-8 h-full flex flex-col"
      style={{
        backgroundColor: COLORS.white,
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      }}
    >
      <div className="mb-4" style={{ fontSize: '2rem', color: COLORS.primary }}>
        {getIcon(iconName)}
      </div>

      <div className="flex items-center gap-3 mb-3 text-xs font-semibold">
        <span
          className="px-3 py-1 rounded-full"
          style={{ backgroundColor: COLORS.lightGray, color: COLORS.primaryDark }}
        >
          {category}
        </span>
        <span style={{ color: COLORS.darkLight }}>{readTime}</span>
      </div>

      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="mb-2 text-sm" style={{ color: COLORS.darkLight }}>
        {date}
      </p>
      <p className="mb-6 flex-grow" style={{ color: COLORS.darkLight }}>
        {excerpt}
      </p>

      <div ref={contentRef} style={{ height: 0, overflow: 'hidden', opacity: 0 }}>
        <div className="border-t pt-6 mb-6" style={{ borderColor: COLORS.lightGray }}>
          {body.map((paragraph, index) => (
            <p key={index} className="mb-4 leading-relaxed" style={{ color: COLORS.darkLight }}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="font-semibold py-2 px-4 rounded transition text-white mt-auto self-start"
        style={{ backgroundColor: COLORS.primary }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = COLORS.primaryDark)}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = COLORS.primary)}
      >
        {isOpen ? STRINGS.blog.readLess : STRINGS.blog.readMore}
      </button>
    </article>
  );
}
