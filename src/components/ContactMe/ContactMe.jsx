import React from 'react'
import './ContactMe.css'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import ContactForm from './ContactForm/ContactForm'
// import emailjs from '@emailjs/browser';

const ContactMe = () => {

  

  return (
    <section className='contact-container'>
      <h5>Contact Me</h5>
      
      <div className='contact-content'>
        <div style={{flex:1}}>
          <ContactInfoCard iconUrl='./assets/images/email-icon.png' text='radheypatil6630@gmail.com'/>

          <a id='github' href='https://github.com/radheypatil6630' target='_blank'> <ContactInfoCard iconUrl='./assets/images/github_icon.png' text='Github.com'/></a>
        </div>

        <div style={{flex:1}}>
          <ContactForm/>
        </div>
      </div>

    </section>
  )
}

export default ContactMe
