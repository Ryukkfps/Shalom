import React from "react";
import Carousel from "../components/Carousel";
import About from "./About";
import Services from "./Services";
import WhyChoseUs from "./WhyChoseUs";
import Policies from "./Policies";
import Testimonials from "./Testimonials";
import ContactUs from "./ContactUs";
const Homepage = () => {
  return (
    <div style={{ width: "100%" }}>
      <Carousel />
      <About />
      <Services />
      <WhyChoseUs />
      <Policies />
      <Testimonials />
      <div style={{
        backgroundColor: "#83084a",
        padding: "20px",
        marginTop: "20px",
        color: "white",
        display: "flex",
      }}>
        <ContactUs />
      </div>
    </div>
  );
};

export default Homepage;
