import ServiceCard from '../ServiceCard/ServiceCard';
import { COLORS, STRINGS } from '../../constants';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Services() {
  const ref = useScrollReveal(true);

  return (
    <section id="services" className="py-16" style={{ backgroundColor: COLORS.lightGray }} ref={ref}>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-2">{STRINGS.services.title}</h2>
        <p className="text-center mb-12" style={{ color: COLORS.darkLight }}>
          {STRINGS.services.subtitle}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STRINGS.services.items.map((service) => (
            <div key={service.id} data-reveal>
              <ServiceCard
                id={service.id}
                name={service.name}
                iconName={service.icon}
                description={service.description}
                price={service.price}
                popular={service.popular}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
