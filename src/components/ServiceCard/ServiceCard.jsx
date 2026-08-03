import { COLORS, CONFIG } from '../../constants';

export default function ServiceCard({ name, description, price, id, popular = false }) {
  const mailtoLink = `mailto:${CONFIG.email}?subject=Info%20Paquete%20${encodeURIComponent(name)}`;

  return (
    <div
      className="rounded-2xl shadow p-8 relative"
      style={{
        backgroundColor: COLORS.white,
        border: popular ? `2px solid ${COLORS.primary}` : 'none',
      }}
    >
      {popular && (
        <div
          className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold text-white"
          style={{ backgroundColor: COLORS.primary }}
        >
          Recomendado
        </div>
      )}
      <h3 className="text-2xl font-bold mb-4">{name}</h3>
      <p className="mb-6" style={{ color: COLORS.darkLight }}>
        {description}
      </p>
      <p className="font-semibold mb-4">{price}</p>
      <a
        href={mailtoLink}
        className="font-semibold py-2 px-4 rounded transition text-white"
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
