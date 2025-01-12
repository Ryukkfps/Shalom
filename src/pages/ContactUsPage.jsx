import React from 'react'
import ContactUs from './ContactUs'

const ContactUsPage = () => {
  return (
    <>
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      {/* <button style={{ backgroundColor: '#d4a017', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>
        Contact Us
      </button> */}
      <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Contact Our Team</h1>
      <p style={{ textAlign: 'center' }}>
        <span>☑️ Need help with a booking? </span>
        <span>☑️ Do you have a question? </span>
        <span>☑️ Are you with the press?</span>
      </p>
      <form>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
          <input type="text" placeholder="Your First Name" style={{ width: '48%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} required />
          <input type="text" placeholder="Your Last Name" style={{ width: '48%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} required />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
          <input type="email" placeholder="Your Email" style={{ width: '48%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} required />
          <input type="tel" placeholder="Your Phone Number" style={{ width: '48%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} required />
        </div>
        <input type="text" placeholder="Enter Subject" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', marginBottom: '10px' }} />
        <textarea placeholder="Leave us a message..." style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', marginBottom: '20px', height: '100px' }} required></textarea>
        <button type="submit" style={{ width: '100%', backgroundColor: '#c2185b', color: '#fff', padding: '15px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>
          Send Message
        </button>
      </form>
    </div>
    <ContactUs />
    </>
  )
}

export default ContactUsPage
