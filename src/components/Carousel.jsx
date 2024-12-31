import React from 'react'
import slide1 from '../assets/slide1.jpg'
import slide2 from '../assets/slide2.jpg'
import slide3 from '../assets/slide3.jpg'   


const Carousel = () => {
  return (
    <div 
      id="carouselExample" 
      className="carousel slide" 
      data-bs-ride="carousel"
      data-bs-interval="3000"
      style={{ height: '85vh' }}
    >
      {/* Carousel Indicators */}
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>

      {/* Carousel Items */}
      <div className="carousel-inner h-100">
        <div className="carousel-item active h-100 position-relative">
          <div className="position-absolute w-100 h-100 bg-dark" style={{ opacity: '0.5' }}></div>
          <img src={slide1} className="d-block w-100 h-100" style={{ objectFit: 'cover' }} alt="First slide" />
          <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
            <h2 className="display-4 fw-bold">Welcome to Shalom </h2>
            <p className="lead">Your stay in the heart of the city</p>
          </div>
        </div>
        <div className="carousel-item h-100 position-relative">
          <div className="position-absolute w-100 h-100 bg-dark" style={{ opacity: '0.5' }}></div>
          <img src={slide2} className="d-block w-100 h-100" style={{ objectFit: 'cover' }} alt="Second slide" />
          <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
            <h2 className="display-4 fw-bold">Enjoy your stay with us</h2>
            <p className="lead">With the warmth of our hospitality and the luxury of our facilities</p>
          </div>
        </div>
        <div className="carousel-item h-100 position-relative">
          <div className="position-absolute w-100 h-100 bg-dark" style={{ opacity: '0.5' }}></div>
          <img src={slide3} className="d-block w-100 h-100" style={{ objectFit: 'cover' }} alt="Third slide" />
          <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
            <h2 className="display-4 fw-bold">Make your Kumbh Mela memorable</h2>
            <p className="lead">With our luxurious facilities and the best services</p>
          </div>
        </div>
      </div>

      {/* Carousel Controls */}
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default Carousel
