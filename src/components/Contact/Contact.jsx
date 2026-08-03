import ContactForm from '../ContactForm/ContactForm';
import { STRINGS } from '../../constants';

export default function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">{STRINGS.contact.title}</h2>
        <p className="mb-8">{STRINGS.contact.subtitle}</p>
        <ContactForm />
      </div>
    </section>
  );
}
