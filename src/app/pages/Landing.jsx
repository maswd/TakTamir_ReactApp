import Features from "../components/landing/Features";
import Footer from "../components/landing/Footer";
import Header from "../components/landing/Header";
import Hero from "../components/landing/Hero";
import Conect from "../components/landing/Connect";

function Landing() {
  return (
    <div className="container-fluid">
      <Header />
      <Hero />
      <Features />
      {/* <Conect /> */}
      <Footer />
    </div>
  );
}

export default Landing;
