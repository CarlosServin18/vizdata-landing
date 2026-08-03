import TestimonialCard from '../TestimonialCard/TestimonialCard';
import { COLORS, STRINGS } from '../../constants';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Testimonials() {
  const ref = useScrollReveal(true);

  return (
    <section id="testimonials" className="py-16" style={{ backgroundColor: COLORS.lightGray }} ref={ref}>
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold mb-12">{STRINGS.testimonials.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STRINGS.testimonials.items.map((testimonial) => (
            <div key={testimonial.id} data-reveal>
              <TestimonialCard
                quote={testimonial.quote}
                author={testimonial.author}
                company={testimonial.company}
                initials={testimonial.initials}
                rating={testimonial.rating}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
