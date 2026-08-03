import { COLORS, CONFIG } from '../../constants';
import { getIcon } from '../../utils/icons';
import gsap from 'gsap';

export default function ServiceCard({
  name,
  description,
  price,
  id,
  popular = false,
  iconName,
}) {
  const mailtoLink = `mailto:${CONFIG.email}?subject=Info%20Paquete%20${encodeURIComponent(name)}`;

  const handleMouseEnter = (e) => {
    gsap.to(e.currentTarget, {
      y: -8,
      boxShadow: '0 20px 25px rgba(0,0,0,0.15)',
      duration: 0.3,
    });
  };

  const handleMouseLeave = (e) => {
    gsap.to(e.currentTarget, {
      y: 0,
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      duration: 0.3,
    });
  };

  return (
    <div
      className="rounded-2xl shadow p-8 relative h-full flex flex-col transition-all"
      style={{
        backgroundColor: COLORS.white,
        border: popular ? `2px solid ${COLORS.primary}` : 'none',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {popular && (
        <div
          className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold text-white"
          style={{ backgroundColor: COLORS.primary }}
        >
          Recomendado
        </div>
      )}

      <div className="mb-4" style={{ fontSize: '2.5rem', color: COLORS.primary }}>
        {getIcon(iconName)}
      </div>
      <h3 className="text-2xl font-bold mb-2">{name}</h3>
      <p className="mb-6 flex-grow" style={{ color: COLORS.darkLight }}>
        {description}
      </p>
      <p className="font-semibold mb-6" style={{ color: COLORS.primary }}>
        {price}
      </p>
      <a
        href={mailtoLink}
        className="font-semibold py-2 px-4 rounded transition text-white mt-auto"
        style={{
          backgroundColor: COLORS.primary,
          textDecoration: 'none',
          display: 'inline-block',
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = COLORS.primaryDark)}
        onMouseLeave={(e) => (e.target.style.backgroundColor = COLORS.primary)}
      >
        Más info
      </a>
    </div>
  );
}
