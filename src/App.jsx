import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import About from './About';
import About2 from "./About2";
import About3 from "./About3";
import AppBanner from "./AppBanner";
import Card from "./Card";
import Contact from './Contact';
import Darkmode from "./Darkmode";
import Footer from "./Footer";
import Hero from './Hero';
import Navbar from './Navbar';
import Testimonial from './Testimonial';

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="overflow-x-hidden text-black bg-white dark:bg-black dark:text-white">
      <Navbar />
      <Hero />
      <About />
      <About2 />
      <About3 />
      <Contact />
      <Card/>
      <Darkmode/>
      <AppBanner />
      <Testimonial />
      <Footer/>
    </div>
  );
};

export default App;