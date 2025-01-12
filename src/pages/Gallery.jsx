import React from 'react'

// Define card styles similar to ContactUs
const cardStyle = {
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '16px',
  maxWidth: '30%',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
  margin: '10px',
  flex: '1 1 30%',
}

// Create a Card component for images
const ImageCard = ({ src, alt }) => (
  <div style={cardStyle}>
    <img src={src} alt={alt} style={{ width: '100%', borderRadius: '8px' }} />
  </div>
)

const Gallery = () => {
  // Array of image data
  const images = [
    { src: "https://placehold.co/300x200", alt: "Placeholder 1" },
    { src: "https://placehold.co/300x200", alt: "Placeholder 2" },
    { src: "https://placehold.co/300x200", alt: "Placeholder 3" },
    { src: "https://placehold.co/300x200", alt: "Placeholder 4" },
  ]

  return (
    <>
    <div>
        <h1 style={{ textAlign: 'center', marginTop: '30px' }}>Glimpse of our rooms</h1>
    </div>
    <div className="gallery" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {images.map((image, index) => (
        <ImageCard key={index} src={image.src} alt={image.alt} />
      ))}
    </div>
    </>
  )
}

export default Gallery
