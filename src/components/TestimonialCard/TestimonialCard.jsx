import { COLORS } from '../../constants';

export default function TestimonialCard({ quote, author, company, initials, rating }) {
  return (
    <blockquote
      className="p-8 rounded-2xl shadow"
      style={{ backgroundColor: COLORS.white }}
    >
      <div className="text-4xl mb-4" style={{ color: COLORS.primary }}>
        "
      </div>
      <p className="italic mb-6" style={{ color: COLORS.text }}>
        {quote}
      </p>

      {/* Star rating */}
      <div className="flex justify-center gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <span key={i} style={{ color: COLORS.primary }}>
            ★
          </span>
        ))}
      </div>

      {/* Author info */}
      <div className="flex items-center justify-center gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
          style={{ backgroundColor: COLORS.primary }}
        >
          {initials}
        </div>
        <div className="text-left">
          <div className="font-bold" style={{ color: COLORS.text }}>
            {author}
          </div>
          <div className="text-sm" style={{ color: COLORS.darkLight }}>
            {company}
          </div>
        </div>
      </div>
    </blockquote>
  );
}
