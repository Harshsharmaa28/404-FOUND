import React from "react";
import Navbar from "../Navbar/Navbar";
import Landingpage from "../Landingpage/Landingpage";
import Info from "../Info/Info";
import Footer from "../Footer/Footer";
import Feature from "../../pages/Features/Feature";
import Faqs from "../../pages/faqs/Faqs";
import Contact from "../../pages/ContactUs/Contact";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Landingpage />
      <Info />
      <Feature />
      <Faqs />
      <Contact />

      <Footer />
    </div>
  );
};

export default Homepage;
