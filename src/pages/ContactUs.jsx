import React from 'react'

const ContactUs = () => {
  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    maxWidth: '400px',
    margin: '20px auto',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  }

  const headingStyle = {
    marginBottom: '16px',
  }

  return (
    <div style={cardStyle}>
      <h1 style={headingStyle}>Contact Us</h1>
      <p>Phone Number: (123) 456-7890</p>
      <p>Email: contact@example.com</p>
      <p>Address: 123 Main St, Anytown, USA</p>
    </div>
  )
}

export default ContactUs
