import React from 'react'
import './Policies.css'

const Policies = () => {
  return (
    <div className="policies-container">
      <h1 className="policies-title">Policies</h1>
      <div className="policies">
        <p className="policy-item">50% Advance payment at the time of booking</p>
        <p className="policy-item">Full payment before 14 days of arrival.</p>
        <p className="policy-item">Non-payment of the full amount before 14 days of arrival will revoke booking.</p>
      </div>
      <h1 className="policies-title">Cancellation and Refund Policy</h1>
      <div className="policies">
        <p className="policy-item">Cancellation of booking is allowed only if the booking is made 14 days before arrival.</p>
        <p className="policy-item">Cancellation of booking is allowed only if the booking is made 14 days before arrival.</p>
        <p className="policy-item">Cancellation of booking is allowed only if the booking is made 14 days before arrival.</p>
      </div>
      
    </div>
  )
}

export default Policies
