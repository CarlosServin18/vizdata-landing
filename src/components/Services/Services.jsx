import ServiceCard from '../ServiceCard/ServiceCard';
import { COLORS, STRINGS } from '../../constants';

export default function Services() {
  return (
    <section className="py-16" style={{ backgroundColor: COLORS.lightGray }}>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">{STRINGS.services.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STRINGS.services.items.map((service) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              name={service.name}
              description={service.description}
              price={service.price}
              popular={service.popular}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
