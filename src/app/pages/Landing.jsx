import Create from "../components/landing/Create";
import Features from "../components/landing/Features";
import Footer from "../components/landing/Footer";
import Header from "../components/landing/Header";
import Hero from "../components/landing/Hero";
import SliderComponent from "../components/landing/Slider";

function Landing() {
  return (
    <div className="">
      <Header />
      <Hero />
      <SliderComponent/>
      <Features />
      <Create />
      <Footer />
    </div>
  );
}

export default Landing;
