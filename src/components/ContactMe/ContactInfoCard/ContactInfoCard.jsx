import React from 'react'
import './ContactInfoCard.css'

const ContactInfoCard = ({iconUrl,text}) => {
  return (
    <div className='contact-details-card'>
      <div className='icon'>
        <img src={iconUrl} alt='icon'/>
        </div> 

    <p>{text}</p>

    </div>
  )
}

export default ContactInfoCard
