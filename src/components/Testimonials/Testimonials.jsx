import TestimonialCard from '../TestimonialCard/TestimonialCard';
import { COLORS, STRINGS } from '../../constants';

export default function Testimonials() {
  return (
    <section className="py-16" style={{ backgroundColor: COLORS.lightGray }}>
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold mb-12">{STRINGS.testimonials.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {STRINGS.testimonials.items.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              quote={testimonial.quote}
              author={testimonial.author}
              company={testimonial.company}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
