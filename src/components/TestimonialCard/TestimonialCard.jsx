import { COLORS } from '../../constants';

export default function TestimonialCard({ quote, author, company }) {
  return (
    <blockquote
      className="p-8 rounded-2xl shadow"
      style={{ backgroundColor: COLORS.white }}
    >
      <p className="italic mb-4">{`"${quote}"`}</p>
      <footer className="font-bold">
        – {author}, {company}
      </footer>
    </blockquote>
  );
}
