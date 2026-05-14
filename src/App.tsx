import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import FeaturedWeddings from './components/FeaturedWeddings';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import AboutFounder from './components/AboutFounder';
import ConversionCTA from './components/ConversionCTA';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import ParallaxDivider from './components/ParallaxDivider';

export default function App() {
  return (
    <div className="min-h-screen bg-ivory">
      <Navbar />
      <Hero />
      <TrustStrip />
      <FeaturedWeddings />
      <ParallaxDivider
        image="https://github.com/kd54726/Renuka-Events/blob/main/public/images/gallery4.jpg?raw=true"
        quote="A wedding is not just a day, it's the beginning of a beautiful forever"
        author="Renuka"
      />
      <WhyChooseUs />
      <Services />
      <Testimonials />
      <ParallaxDivider
        image="https://github.com/kd54726/Renuka-Events/blob/main/public/images/gallery5.jpg?raw=true"
        quote="In every detail, there is love. In every moment, there is magic."
      />
      <Gallery />
      <AboutFounder />
      <ConversionCTA />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
