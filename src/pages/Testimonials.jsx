import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonials.css";
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpeg";
import p5 from "../assets/p5.jpg";
import p6 from "../assets/p6.jpg";

const Testimonials = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const testimonials = [
    { id: 1, text: "Great service!", author: "John Doe", image: p1, rating: 5 },
    {
      id: 2,
      text: "Loved the experience!",
      author: "Jane Smith",
      image: p2,
      rating: 4,
    },
    {
      id: 3,
      text: "Highly recommend!",
      author: "Alice Johnson",
      image: p3,
      rating: 5,
    },
    {
      id: 4,
      text: "Will come back again.",
      author: "Chris Lee",
      image: p4,
      rating: 4,
    },
    {
      id: 5,
      text: "Fantastic support.",
      author: "Pat Brown",
      image: p5,
      rating: 5,
    },
    {
      id: 6,
      text: "Very satisfied.",
      author: "Sam Green",
      image: p6,
      rating: 4,
    },
  ];

  return (
    <div className="testimonial-container">
      <h1 className="testimonial-title al">Testimonials</h1>
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <img
              src={testimonial.image}
              className="testimonial-image"
              onError={(e) => (e.target.src = "path/to/placeholder.jpg")}
            />
            <div>
              <p>{testimonial.text}</p>
              <p>
                <strong>{testimonial.author}</strong>
              </p>
              <div className="testimonial-rating">
                {"★".repeat(testimonial.rating) +
                  "☆".repeat(5 - testimonial.rating)}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
