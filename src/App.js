import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Process from './components/Process/Process';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { COLORS } from './constants';

export default function App() {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', color: COLORS.text }}>
      <Hero />
      <Services />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
