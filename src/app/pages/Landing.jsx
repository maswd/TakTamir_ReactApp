import Features from "../components/Features"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Pricing from "../components/Pricing"
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/main.min.css";
// import "../../assets/css/jalalidatepicker.min.css";
// import "../../assets/css/owl.carousel.min.css";
// import "../../assets/css/owl.theme.default.min.css";
import Conect from "../components/Conect"


function Landing() {
  
    return (
       
        <>
        
            <Header />
            <Hero />
            <Features />
            <Conect/>
            <Pricing />
            <Footer />
        </>
    )
}


export default Landing