import React from "react";
import Header from "./components/Header";
import Services from "./components/Services";
import ClientLogos from "./components/ClientLogos"
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import "./styles/main.scss";

const App = () => {
  return (
    <div>
      <Header />
      <ClientLogos />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
