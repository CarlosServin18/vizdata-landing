import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Process from './components/Process/Process';
import Testimonials from './components/Testimonials/Testimonials';
import FAQ from './components/FAQ/FAQ';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { COLORS } from './constants';

export default function App() {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', color: COLORS.text }}>
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Testimonials />
      <FAQ />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}
