import React from 'react'

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '20px',
  margin: '20px auto',
}

const cardStyle = {
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '16px',
  maxWidth: '300px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
}

const headingStyle = {
  marginBottom: '16px',
}

const Card = ({ title, content }) => (
  <div style={cardStyle}>
    <h2 style={headingStyle}>{title}</h2>
    <p>{content}</p>
  </div>
)

const ContactUs = () => {
  return (
    <div style={containerStyle}>
      <Card title="Phone Number" content="(123) 456-7890" />
      <Card title="Email" content="contact@example.com" />
      <Card title="Address" content="123 Main St, Anytown, USA" />
    </div>
  )
}

export default ContactUs
