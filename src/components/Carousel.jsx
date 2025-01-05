import React from 'react'
import img1 from '../assets/slide1.jpg'
import img2 from '../assets/slide2.jpg'
import img3 from '../assets/slide3.jpg'
import './Carousel.css'

const Carousel = () => {
  return (
    <div className="container-fluid p-0 mb-5">
      <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active fade-in">
            <img className="w-100" src={img1} alt="Image" style={{ maxHeight: '80vh', objectFit: 'cover', filter: 'brightness(0.5)' }} />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3 fade-in" style={{ maxWidth: '700px' }}>
                <h1 className="display-3 text-white mb-4 animated slideInDown">Welcome to Shalom</h1>
                <h6 className="section-title text-uppercase mb-3 animated slideInDown" style={{ color: 'white' }}>Your stay in the heart of the city</h6>
              </div>
            </div>
          </div>
          <div className="carousel-item fade-in">
            <img className="w-100" src={img2} alt="Image" style={{ maxHeight: '80vh', objectFit: 'cover', filter: 'brightness(0.5)' }} />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3 fade-in" style={{ maxWidth: '700px' }}>
                <h1 className="display-3 text-white mb-4 animated slideInDown">Enjoy your stay with us</h1>
                <h6 className="section-title text-uppercase mb-3 animated slideInDown" style={{ color: 'white' }}>With the warmth of our hospitality and the luxury of our facilities</h6>
              </div>
            </div>
          </div>
          <div className="carousel-item fade-in">
            <img className="w-100" src={img3} alt="Image" style={{ maxHeight: '80vh', objectFit: 'cover', filter: 'brightness(0.5)' }} />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3 fade-in" style={{ maxWidth: '700px' }}>
                <h1 className="display-3 text-white mb-4 animated slideInDown">Make your Maha Kumbh visit memorable</h1>
                <h6 className="section-title text-uppercase mb-3 animated slideInDown" style={{ color: 'white' }}>With our luxurious facilities and the best services</h6>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Carousel
