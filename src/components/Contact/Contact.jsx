import ContactForm from '../ContactForm/ContactForm';
import { STRINGS } from '../../constants';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Contact() {
  const ref = useScrollReveal();

  return (
    <section id="contact" className="py-16" ref={ref}>
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">{STRINGS.contact.title}</h2>
        <p className="mb-8">{STRINGS.contact.subtitle}</p>
        <ContactForm />
      </div>
    </section>
  );
}
