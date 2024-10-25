import Hero from "./components/landing/Hero";
import Aboutus from "./components/landing/Aboutus";
import Timeline from "./components/landing/Timeline";
import Testimonial from "./components/landing/Testimonial";
import Contactus from "./components/landing/Contactus";
import Footer from "./components/Footer";
import { ModalProvider } from '../contexts/ModalContext';
import ContactModal from './components/ContactModal';


export default function Home() {
  
  return (
    <div>
      <Hero/>
      <Aboutus/>
      <Timeline/>
      <Testimonial/>
      <Contactus/>
      <Footer/>
    </div>
  );
}
