import Create from "../components/landing/Create";
import Features from "../components/landing/Features";
import Footer from "../components/landing/Footer";
import Header from "../components/landing/Header";
import Hero from "../components/landing/Hero";

function Landing() {
  return (
    <div className="container-fluid">
      <Header />
      <Hero />
      <Features />
      <Create />
      <Footer />
    </div>
  );
}

export default Landing;
