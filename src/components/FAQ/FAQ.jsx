import { useState } from 'react';
import FAQItem from '../FAQItem/FAQItem';
import { COLORS, STRINGS } from '../../constants';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const ref = useScrollReveal();

  return (
    <section id="faq" className="py-16" ref={ref}>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">{STRINGS.faq.title}</h2>
        <div className="max-w-2xl mx-auto space-y-4">
          {STRINGS.faq.items.map((item, index) => (
            <FAQItem
              key={item.id}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
