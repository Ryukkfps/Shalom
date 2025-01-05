import React from "react";
import "./Service.css";

const Services = () => {
  return (
    <div className="container-xxl py-5">
      <div className="services-container" style={{ width: "100vw"}}>
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6
            style={{ color: "#fd8a1f" }}
            className="section-title text-center text-uppercase"
          >
            Our Services
          </h6>
          <h1 className="mb-5 text-white">
            Explore Our{" "}
            <span style={{ color: "#fd8a1f" }} className="text-uppercase">
              Services
            </span>
          </h1>
        </div>
        <div className="row g-4">
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <a className="service-item rounded fixed-height" href="">
              <div className="service-icon bg-transparent p-1">
                <div className="w-100 h-100 d-flex align-items-center justify-content-center">
                  <i
                    className="fa fa-hotel fa-2x"
                    style={{ color: "#fd8a1f" }}
                  ></i>
                </div>
              </div>
              <h5 style={{ color: "#fd8a1f" }} className="mb-3">
                Rooms
              </h5>
              <p style={{ color: "#fd8a1f" }} className="mb-0">
                Experience comfort in our 10 elegantly furnished rooms, each designed 
                with modern amenities and luxurious finishes for your perfect stay.
              </p>
            </a>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
            <a className="service-item rounded fixed-height" href="">
              <div className="service-icon bg-transparent p-1">
                <div className="w-100 h-100 d-flex align-items-center justify-content-center">
                  <i
                    className="fa fa-utensils fa-2x"
                    style={{ color: "#fd8a1f" }}
                  ></i>
                </div>
              </div>
              <h5 style={{ color: "#fd8a1f" }} className="mb-3">
                Food & Restaurant
              </h5>
              <p style={{ color: "#fd8a1f" }} className="mb-0">
                Savor delicious local and international cuisine at our restaurant, featuring fresh ingredients and expert chefs. We offer breakfast, lunch and dinner with both buffet and à la carte options.
              </p>
            </a>
          </div>
          {/* <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <a className="service-item rounded" href="">
              <div className="service-icon bg-transparent p-1">
                <div className="w-100 h-100 d-flex align-items-center justify-content-center">
                  <i
                    className="fa fa-spa fa-2x"
                    style={{ color: "#fd8a1f" }}
                  ></i>
                </div>
              </div>
              <h5 style={{ color: "#fd8a1f" }} className="mb-3">
                Spa & Fitness
              </h5>
              <p style={{ color: "#fd8a1f" }} className="mb-0">
                Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
                sed diam stet diam sed stet lorem.
              </p>
            </a>
          </div> */}
          {/* <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
            <a className="service-item rounded" href="">
              <div className="service-icon bg-transparent p-1">
                <div className="w-100 h-100 d-flex align-items-center justify-content-center">
                  <i
                    className="fa fa-swimmer fa-2x"
                    style={{ color: "#fd8a1f" }}
                  ></i>
                </div>
              </div>
              <h5 style={{ color: "#fd8a1f" }} className="mb-3">
                Sports & Gaming
              </h5>
              <p style={{ color: "#fd8a1f" }} className="mb-0">
                Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
                sed diam stet diam sed stet lorem.
              </p>
            </a>
          </div> */}
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <a className="service-item rounded fixed-height" href="">
              <div className="service-icon bg-transparent p-1">
                <div className="w-100 h-100 d-flex align-items-center justify-content-center">
                  <i
                    className="fa fa-glass-cheers fa-2x"
                    style={{ color: "#fd8a1f" }}
                  ></i>
                </div>
              </div>
              <h5 style={{ color: "#fd8a1f" }} className="mb-3">
                Event & Party
              </h5>
              <p style={{ color: "#fd8a1f" }} className="mb-0">
                Our intimate banquet hall is perfect for hosting private parties and gatherings of up to 30 people, offering a cozy and elegant space for your special occasions.
              </p>
            </a>
          </div>
          {/* <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
            <a className="service-item rounded" href="">
              <div className="service-icon bg-transparent  p-1">
                <div className="w-100 h-100 d-flex align-items-center justify-content-center">
                  <i
                    className="fa fa-dumbbell fa-2x"
                    style={{ color: "#fd8a1f" }}
                  ></i>
                </div>
              </div>
              <h5 style={{ color: "#fd8a1f" }} className="mb-3">
                GYM & Yoga
              </h5>
              <p style={{ color: "#fd8a1f" }} className="mb-0">
                Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
                sed diam stet diam sed stet lorem.
              </p>
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Services;
