import React from "react";
import "./About.css";
import room1 from "../assets/room1.jpg";
import room2 from "../assets/room2.jpg";
import room3 from "../assets/room3.jpg";
import room4 from "../assets/room4.jpg";

const About = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <h6 className="section-title text-start text-uppercase">
              About Us
            </h6>
            <h1 className="mb-4" style={{ color: "#83084a" }}>
              Welcome to{" "}
              <span className="text-uppercase" style={{ color: "#fd8a1f" }}>
                Shalom
              </span>
            </h1>
            <p className="mb-4">
              your perfect retreat in the heart of Prayagraj! Nestled in the
              vibrant and prestigious Civil Lines area, our hotel offers a blend
              of modern elegance and unparalleled hospitality. With 10 luxurious
              and spacious rooms, Hotel Shalom provides a serene and comfortable
              stay, ideal for both business and leisure travelers. Despite being
              just 1-2 years old, we have quickly gained a reputation for our
              exceptional service and warm hospitality. Experience the charm of
              Prayagraj with a stay at Hotel Shalom, where every detail is
              crafted to make your visit truly memorable.
            </p>
          </div>
          <div className="col-lg-6">
            <div className="row g-3">
              <div className="col-6 text-end">
                <img
                  className="img-fluid rounded w-75 wow zoomIn"
                  data-wow-delay="0.1s"
                  src={room1}
                  style={{ marginTop: "25%" }}
                />
              </div>
              <div className="col-6 text-start">
                <img
                  className="img-fluid rounded w-100 wow zoomIn"
                  data-wow-delay="0.3s"
                  src={room2}
                />
              </div>
              <div className="col-6 text-end">
                <img
                  className="img-fluid rounded w-50 wow zoomIn"
                  data-wow-delay="0.5s"
                  src={room3}
                />
              </div>
              <div className="col-6 text-start">
                <img
                  className="img-fluid rounded w-75 wow zoomIn"
                  data-wow-delay="0.7s"
                  src={room4}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
