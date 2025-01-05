import React from "react";
import Carousel from "../components/Carousel";
import About from "./About";
import Services from "./Services";  
import WhyChoseUs from "./WhyChoseUs";
import Policies from "./Policies";
const Homepage = () => {
  return (
    <div style={{ width: "100vw" }}>
      <Carousel />
      <About />
      <Services />
      <WhyChoseUs />
      <Policies />
    </div>
  );
};

export default Homepage;
