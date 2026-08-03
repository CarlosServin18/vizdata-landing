import ProcessStep from '../ProcessStep/ProcessStep';
import { STRINGS } from '../../constants';

export default function Process() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">{STRINGS.process.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {STRINGS.process.steps.map((step) => (
            <ProcessStep
              key={step.id}
              icon={step.icon}
              name={step.name}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
