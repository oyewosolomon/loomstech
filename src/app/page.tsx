import Hero from "./components/landing/Hero";
import Aboutus from "./components/landing/Aboutus";
import Timeline from "./components/landing/Timeline";
import Testimonial from "./components/landing/Testimonial";
import Contactus from "./components/landing/Contactus";
import Footer from "./components/Footer";
import Commerce from "./components/Commerce";
import Services from "./components/services/Services";

export default function Home() {
  
  return (
    <div>
      <Hero id="hero" />
      <Services id="services" />
      <Aboutus id="aboutus" />
      <Commerce id="commerce" />
      <Testimonial id="testimonial" />
      <Contactus id="contactus" />
      <Footer />
    </div>
  );
}
