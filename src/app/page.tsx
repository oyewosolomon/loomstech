import Hero from "./components/Hero";
import Aboutus from "./components/Aboutus";
import Timeline from "./components/Timeline";
import Testimonial from "./components/Testimonial";
import Contactus from "./components/Contactus";
import Footer from "./components/Footer";

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
