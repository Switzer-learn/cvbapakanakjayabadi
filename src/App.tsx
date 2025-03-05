import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Products from './components/Products';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <Products />
        <Services />
        <Testimonials />
        <CTASection />
        <Contact />
      </main>
      <Footer />
      <div className='fixed md:bottom-20 md:right-20 bottom-4 right-4 z-50'>
        <a 
          href="https://wa.me/your-number" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}

export default App;
