import React from "react";
import Navbar from "../Navbar/Navbar";
import Landingpage from "../Landingpage/Landingpage";
import Info from '../Info/Info'
import Footer from '../Footer/Footer'

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Landingpage />
      <Info/>
      {/* <Footer/> */}
    </div>
  );
};

export default Homepage;
