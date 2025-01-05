import React from 'react'
import './WhyChoseUs.css'
import wcu1 from '../assets/wcu1.jpg'
import ald from '../assets/ald.jpg'
import cafe from '../assets/cafe.jpg'
import fort from '../assets/allahabadfort.jpg'
const WhyChoseUs = () => {
  return (
    <div className="why-chose-us">
      <h1>Why Shalom Rooms?</h1>
      <div className="features">
        <div className="feature" style={{ '--animation-delay': '0s' }}>
          <img src={wcu1} alt="Close proximity to Sangam" />
          <p>Located in the heart of the city, Sangam, Arail Ghat, and the riverfront are within 10km radius</p>
        </div>
        <div className="feature" style={{ '--animation-delay': '0.5s' }}>
          <img src={ald} alt="Spacious, Lush Green Gardens" />
          <p>Close to railway station and bus stand and major restaurants and cafes</p>
        </div>
        <div className="feature" style={{ '--animation-delay': '1.0s' }}>
          <img src={cafe} alt="Clean, Safe, and Exceptional Hospitality" />
          <p>Clean, Safe, and Exceptional Hospitality</p>
        </div>
        <div className="feature" style={{ '--animation-delay': '1.5s' }}>
          <img src={fort} alt="Boat Tours, Pick-up/Drop-off available" />
          <p>Easy access to the city's main attractions and landmarks</p>
        </div>
      </div>
    </div>
  )
}

export default WhyChoseUs
