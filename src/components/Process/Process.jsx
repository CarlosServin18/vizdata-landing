import ProcessStep from '../ProcessStep/ProcessStep';
import { STRINGS } from '../../constants';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Process() {
  const ref = useScrollReveal(true);

  return (
    <section id="process" className="py-16" ref={ref}>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-2">{STRINGS.process.title}</h2>
        <p className="text-center mb-12" style={{ color: '#34495E' }}>
          {STRINGS.process.subtitle}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {STRINGS.process.steps.map((step, index) => (
            <div key={step.id} data-reveal>
              <ProcessStep
                number={index + 1}
                iconName={step.icon}
                name={step.name}
                description={step.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
